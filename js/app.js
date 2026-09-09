/* =========================================================
 * English Quest 主逻辑
 * 纯原生 JS，无依赖；进度保存在 localStorage
 * ========================================================= */
(function(){
'use strict';
const D = window.EQ_DATA;
const SAVE_KEY = 'english-quest-save-v1';
const MAX_HEARTS_DLG = 5;
const MAX_HEARTS_VOCAB = 3;

/* ---------- 工具 ---------- */
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function flattenMissions(){
  const list=[];
  D.worlds.forEach(w=>w.missions.forEach(m=>list.push({world:w,...m})));
  return list;
}
const ALL = flattenMissions();

/* ---------- 存档 ---------- */
let save = load();
function load(){
  try{ const s = JSON.parse(localStorage.getItem(SAVE_KEY)); if(s) return s; }catch(e){}
  return {xp:0, completed:{}, streak:0, lastDate:'', spoken:0};
}
function persist(){ localStorage.setItem(SAVE_KEY, JSON.stringify(save)); }
function todayStr(){ const d=new Date(); return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(); }
function touchStreak(){
  const t = todayStr(), y = new Date(Date.now()-864e5);
  const ys = y.getFullYear()+'-'+y.getMonth()+'-'+y.getDate();
  if(save.lastDate === t) return;
  save.streak = (save.lastDate === ys) ? save.streak+1 : 1;
  save.lastDate = t; persist();
}
function levelOf(xp){ return Math.floor(xp/120)+1; }

/* ---------- 运行时状态 ---------- */
let R = { view:'home', mission:null, world:null, lineIdx:0, wrongCount:0, hearts:0,
          qIdx:0, vocabWrong:0, history:[] , listening:false, recog:null };

/* ---------- Toast / 特效 ---------- */
let toastTimer=null;
function toast(msg){
  const t=$('toast'); t.textContent=msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>t.classList.remove('show'),2200);
}
function floatXP(text,x,y){
  const el=document.createElement('div'); el.className='float-xp'; el.textContent=text;
  el.style.left=(x||window.innerWidth/2)+'px'; el.style.top=(y||120)+'px';
  document.body.appendChild(el); setTimeout(()=>el.remove(),1000);
}
function confetti(n){
  n=n||24; const icons=['⭐','🎉','✨','🎊','💫'];
  for(let i=0;i<n;i++){
    const c=document.createElement('div'); c.className='confetti';
    c.textContent=icons[i%icons.length];
    c.style.left=Math.random()*100+'vw';
    c.style.animationDuration=(1.6+Math.random()*1.4)+'s';
    c.style.fontSize=(14+Math.random()*14)+'px';
    document.body.appendChild(c); setTimeout(()=>c.remove(),3200);
  }
}

/* ---------- 语音 TTS ---------- */
let enVoice=null;
function pickVoice(){
  const vs = speechSynthesis.getVoices();
  enVoice = vs.find(v=>/en-US/i.test(v.lang)&&/female|samantha|zira|jenny|aria/i.test(v.name))
         || vs.find(v=>/en-US/i.test(v.lang))
         || vs.find(v=>/^en/i.test(v.lang)) || null;
}
if('speechSynthesis' in window){ pickVoice(); speechSynthesis.onvoiceschanged=pickVoice; }
function speak(text, rate){
  if(!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  if(enVoice) u.voice=enVoice;
  u.lang='en-US'; u.rate=rate||0.95; u.pitch=1.05;
  speechSynthesis.speak(u);
}

/* ---------- 语音识别 STT ---------- */
function hasSTT(){ return !!(window.SpeechRecognition||window.webkitSpeechRecognition); }
function startListen(onText){
  const SR = window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){ toast('当前浏览器不支持语音识别，请用 Chrome / Edge，或直接点选答案'); return; }
  if(R.listening){ stopListen(); return; }
  const rec = new SR();
  rec.lang='en-US'; rec.interimResults=false; rec.maxAlternatives=3;
  R.recog=rec; R.listening=true; updateMicBtn();
  let got=false;
  rec.onresult = e=>{
    got=true;
    const alts=[]; for(let i=0;i<e.results[0].length;i++) alts.push(e.results[0][i].transcript);
    onText(alts);
  };
  rec.onerror = ()=>{ toast('没听清，请再试一次或直接点选'); };
  rec.onend = ()=>{ R.listening=false; R.recog=null; updateMicBtn(); };
  rec.start();
}
function stopListen(){ try{ R.recog && R.recog.stop(); }catch(e){} R.listening=false; updateMicBtn(); }
function updateMicBtn(){
  const b=document.querySelector('.mic-btn'); if(!b) return;
  if(R.listening){ b.classList.add('listening'); b.innerHTML='● 正在听，请大声说英语…（点我停止）'; }
  else { b.innerHTML='🎤 用语音回答'; }
}
/* 识别文本与选项匹配：归一化后计算词重叠 */
function norm(s){ return s.toLowerCase().replace(/[^a-z\s']/g,' ').replace(/\s+/g,' ').trim(); }
function matchOption(alts, opts){
  let best={idx:-1,score:0};
  opts.forEach((o,i)=>{
    const target=new Set(norm(o.e).split(' ').filter(w=>w.length>2));
    alts.forEach(a=>{
      const words=norm(a).split(' ');
      let hit=0; words.forEach(w=>{ if(target.has(w)) hit++; });
      const score = hit/Math.max(3,target.size);
      if(score>best.score) best={idx:i,score};
    });
  });
  return best.score>=0.45 ? best.idx : -1;
}

/* ---------- 视图路由 ---------- */
const VIEWS=['home','map','brief','dialogue','vocab','result','profile'];
function show(view){
  R.view=view;
  VIEWS.forEach(v=>$('screen-'+v).classList.toggle('hidden', v!==view));
  $('btnBack').style.visibility = (view==='home')?'hidden':'visible';
  window.scrollTo(0,0);
  refreshTopbar();
}
function refreshTopbar(){
  $('tbHearts').textContent = (R.view==='dialogue')?R.hearts : (R.view==='vocab')?R.hearts:'5';
  $('tbXp').textContent = save.xp;
  $('tbStreak').textContent = save.streak;
}
const App = window.App = {
  go(view){ stopListen(); speechSynthesis&&speechSynthesis.cancel();
    if(view==='map') renderMap();
    if(view==='profile') renderProfile();
    show(view);
  },
  back(){
    stopListen(); speechSynthesis&&speechSynthesis.cancel();
    if(R.view==='dialogue'||R.view==='vocab'||R.view==='brief'){ this.go('map'); }
    else if(R.view==='result'){ this.go('map'); }
    else this.go('home');
  },
  openMission(mid){ const m=ALL.find(x=>x.id===mid); if(!m) return;
    R.mission=m; R.world=m.world;
    if(isLocked(mid)){ toast('先通过前一关来解锁它吧'); return; }
    renderBrief();
  },
  startMission(){
    const m=R.mission;
    R.lineIdx=0; R.wrongCount=0; R.vocabWrong=0; R.history=[];
    if(m.type==='dialogue'){ R.hearts=MAX_HEARTS_DLG; show('dialogue'); renderDialogue(true); }
    else { R.hearts=MAX_HEARTS_VOCAB; R.qIdx=0; show('vocab'); renderVocab(); }
  }
};

/* ---------- 解锁逻辑 ---------- */
function isLocked(mid){
  const idx=ALL.findIndex(x=>x.id===mid);
  if(idx<=0) return false;
  return !save.completed[ALL[idx-1].id];
}

/* ---------- 世界地图 ---------- */
function renderMap(){
  touchStreak();
  const wrap=$('worldList'); wrap.innerHTML='';
  D.worlds.forEach(w=>{
    const total=w.missions.length;
    const done=w.missions.filter(m=>save.completed[m.id]).length;
    const world=document.createElement('div'); world.className='world';
    world.innerHTML =
      '<div class="world-banner" style="background:'+w.gradient+'">'
      +'<div class="wi">'+w.icon+'</div>'
      +'<div><h3>'+esc(w.name)+'</h3><div class="wzh">'+esc(w.nameZh)+'</div></div>'
      +'<div class="world-progress">'+done+'/'+total
        +'<div class="bar"><i style="width:'+(done/total*100)+'%"></i></div></div>'
      +'</div><div class="mission-path"></div>';
    const path=world.querySelector('.mission-path');
    w.missions.forEach((m,i)=>{
      if(i>0){ const line=document.createElement('div'); line.className='path-line'+(save.completed[w.missions[i-1].id]?' done':''); path.appendChild(line); }
      const locked=isLocked(m.id), rec=save.completed[m.id];
      const node=document.createElement('div');
      node.className='mission-node '+(rec?'done':locked?'locked':(i===0||save.completed[w.missions[i-1].id])?'current':'locked');
      const stars = rec?'★'.repeat(rec.stars)+'☆'.repeat(3-rec.stars):'';
      node.innerHTML='<div class="node-circle">'+(locked?'🔒':m.icon)+'</div>'
        +'<div class="node-stars">'+stars+'</div>'
        +'<div class="node-label">'+esc(m.titleZh)+'</div>';
      if(!locked) node.onclick=()=>App.openMission(m.id);
      path.appendChild(node);
    });
    wrap.appendChild(world);
  });
}

/* ---------- 关卡简报 ---------- */
function renderBrief(){
  const m=R.mission, w=R.world;
  const rec=save.completed[m.id];
  $('screen-brief').innerHTML =
    '<div class="brief-card"><div class="brief-top" style="background:'+w.gradient+'">'
    +'<div class="bi">'+m.icon+'</div><h2>'+esc(m.title)+'</h2><div class="bzh">'+esc(m.titleZh)+'</div></div>'
    +'<div class="brief-body">'
    + (m.type==='dialogue'
      ? '<div class="brief-sec"><h4>📍 场景</h4><p>'+esc(m.scene)+'</p></div>'
        +'<div class="brief-sec"><h4>🎯 你的任务</h4><div class="goal-box">'+esc(m.goal)+'</div></div>'
        +'<div class="brief-sec"><h4>📖 关键词预习（点喇叭听发音）</h4><div class="vocab-preview">'
        + m.vocab.map(v=>'<span class="vocab-chip"><b>'+esc(v.en)+'</b><span class="zh">'+esc(v.zh)+'</span>'
          +'<span class="spk" onclick="event.stopPropagation();window.EQ.speak(\''+v.en.replace(/'/g,"\\'")+'\')">🔊</span></span>').join('')
        +'</div></div>'
      : '<div class="brief-sec"><h4>👾 BOSS 词汇战</h4><div class="goal-box">'+esc(m.intro)+'<br>共 '+m.questions.length+' 题：听音选义、看词选义、句子填空。答错扣心，3 颗心用完挑战失败。</div></div>')
    + (rec?'<div class="brief-sec" style="text-align:center;color:#e0a800;font-weight:700">历史最佳：'+'★'.repeat(rec.stars)+'☆'.repeat(3-rec.stars)+'</div>':'')
    +'<div class="brief-actions"><button class="btn" onclick="App.startMission()">'+(rec?'↻ 再次挑战':'▶ 开始闯关')+'</button>'
    +'<button class="btn ghost" onclick="App.go(\'map\')">返回地图</button></div>'
    +'</div></div>';
  show('brief');
}

/* ---------- 对话关卡 ---------- */
function renderDialogue(autoplay){
  const m=R.mission;
  const stage=$('dlgStage');
  if(R.lineIdx>=m.lines.length){ finishMission(); return; }
  const line=m.lines[R.lineIdx];
  const pct = R.lineIdx/m.lines.length*100;
  $('dlgBar').style.width=pct+'%';
  refreshTopbar();
  const histHtml = R.history.map(h=>
    h.who==='npc'
      ? '<div class="npc-row"><div class="npc-avatar">'+m.npc.emoji+'</div><div class="bubble"><div class="en">'+esc(h.en)+'</div><div class="zh">'+esc(h.zh)+'</div>'
        +'<span class="speak" onclick="window.EQ.speak(\''+h.en.replace(/'/g,"\\'")+'\')">🔊 再听一遍</span></div></div>'
      : '<div class="me-row"><div class="me-bubble"><div class="en">'+esc(h.en)+'</div><div class="zh">'+esc(h.zh)+'</div></div></div>'
  ).join('');
  stage.innerHTML = histHtml
    + '<div class="npc-row" id="curNpc"><div class="npc-avatar">'+m.npc.emoji+'</div>'
    +   '<div class="bubble"><div class="en">'+esc(line.n)+'</div><div class="zh">'+esc(line.nz)+'</div>'
    +   '<span class="speak" onclick="window.EQ.speak(\''+line.n.replace(/'/g,"\\'")+'\')">🔊 播放</span></div></div>'
    + '<div class="options" id="optBox"></div>'
    + (hasSTT()?'<div class="voice-row"><button class="mic-btn" id="micBtn">🎤 用语音回答</button></div>':'');
  line.opts.forEach((o,i)=>{
    const b=document.createElement('button'); b.className='opt';
    b.innerHTML='<span class="o-en">'+esc(o.e)+'</span><span class="o-zh">'+esc(o.z)+'</span>';
    b.onclick=()=>chooseOption(i,b);
    $('optBox').appendChild(b);
  });
  const mic=$('micBtn'); if(mic) mic.onclick=()=>{
    save.spoken++; persist();
    startListen(alts=>{
      const idx=matchOption(alts,line.opts);
      if(idx<0){ toast('识别结果没匹配到选项，再试一次或点选答案'); return; }
      const btn=$('optBox').children[idx]; chooseOption(idx,btn);
    });
  };
  if(autoplay!==false) setTimeout(()=>speak(line.n),350);
  stage.scrollTop=stage.scrollHeight; window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'});
}
function chooseOption(i, btnEl){
  stopListen();
  const line=R.mission.lines[R.lineIdx], o=line.opts[i];
  const box=$('optBox');
  [...box.children].forEach(b=>b.disabled=true);
  if(o.ok){
    btnEl.classList.add('correct');
    R.history.push({who:'npc',en:line.n,zh:line.nz});
    R.history.push({who:'me',en:o.e,zh:o.z});
    speak(o.e, 1.0);
    setTimeout(()=>{ R.lineIdx++; renderDialogue(); }, 850);
  }else{
    btnEl.classList.add('wrong');
    R.wrongCount++; R.hearts=Math.max(0,R.hearts-1); refreshTopbar();
    const hint=document.createElement('div'); hint.className='hint-tip';
    hint.textContent='💡 '+o.hint;
    const stage=$('dlgStage'); const old=stage.querySelector('.hint-tip'); if(old) old.remove(); stage.appendChild(hint);
    speak('Hmm, try again',1.0);
    if(R.hearts<=0){
      setTimeout(()=>{ toast('心用完啦，别灰心，再来一次！'); R.hearts=MAX_HEARTS_DLG; R.wrongCount=0; R.history=[]; R.lineIdx=0; renderDialogue(); },900);
      return;
    }
    setTimeout(()=>{ [...box.children].forEach(b=>{b.disabled=false;b.classList.remove('wrong');}); hint.remove(); },1400);
  }
}

/* ---------- 词汇 BOSS 关 ---------- */
function renderVocab(){
  const m=R.mission, qs=m.questions;
  if(R.qIdx>=qs.length){ finishMission(); return; }
  const q=qs[R.qIdx];
  $('vocabBar').style.width=(R.qIdx/qs.length*100)+'%';
  refreshTopbar();
  const stage=$('vocabStage');
  let prompt='';
  if(q.t==='listen'){
    prompt='<div class="q-prompt"><button class="listen-big" onclick="window.EQ.speak(\''+q.word+'\')">🔊</button>'
      +'<div class="qzh" style="margin-top:8px">听发音，选出正确的中文意思（可点喇叭重播）</div></div>';
  }else if(q.t==='match'){
    prompt='<div class="q-prompt"><div class="qword">'+esc(q.word)+'</div>'
      +'<button class="listen-big" style="width:44px;height:44px;font-size:18px;margin-top:10px" onclick="window.EQ.speak(\''+q.word+'\')">🔊</button>'
      +'<div class="qzh">选出正确释义</div></div>';
  }else{
    const parts=q.sentence.split('___');
    prompt='<div class="q-prompt"><div class="sentence">'+esc(parts[0])+'<span class="blank">_____</span>'+esc(parts[1]||'')+'</div>'
      +'<div class="qzh">选出最合适的词填入空格</div></div>';
  }
  stage.innerHTML =
    '<div class="boss-head"><div class="bi">'+m.bossEmoji+'</div><div><b>'+esc(m.bossName)+'</b><span>第 '+(R.qIdx+1)+' / '+qs.length+' 题</span></div></div>'
    + prompt + '<div class="v-opts" id="vOpts"></div>';
  q.options.forEach(op=>{
    const b=document.createElement('button'); b.className='v-opt'; b.textContent=op;
    b.onclick=()=>chooseVocab(op,b);
    $('vOpts').appendChild(b);
  });
  if(q.t==='listen') setTimeout(()=>speak(q.word),300);
}
function chooseVocab(op, btn){
  const q=R.mission.questions[R.qIdx];
  const box=$('vOpts');
  const correct = q.t==='cloze' ? op===q.answer : op===q.zh;
  if(correct){
    btn.classList.add('correct');
    speak(q.t==='cloze'?q.answer:q.word, 1.0);
    [...box.children].forEach(b=>b.disabled=true);
    setTimeout(()=>{ R.qIdx++; renderVocab(); },800);
  }else{
    if(btn.classList.contains('wrong')) return;
    btn.classList.add('wrong');
    R.vocabWrong++; R.hearts=Math.max(0,R.hearts-1); refreshTopbar();
    if(R.hearts<=0){
      setTimeout(()=>{ toast('BOSS 太强了，调整一下再来！'); R.hearts=MAX_HEARTS_VOCAB; R.vocabWrong=0; R.qIdx=0; renderVocab(); },900);
    }
  }
}

/* ---------- 结算 ---------- */
function calcStars(){
  const wrong = R.mission.type==='dialogue'?R.wrongCount:R.vocabWrong;
  return wrong===0?3:wrong===1?2:1;
}
function finishMission(){
  const m=R.mission;
  const stars=calcStars();
  const prev = save.completed[m.id];
  const gained = prev ? Math.max(0,(30+stars*10)-(30+prev.stars*10)) : (30+stars*10);
  save.xp += gained;
  save.completed[m.id]={stars:Math.max(stars,prev?prev.stars:0)};
  checkBadges();
  persist();
  confetti(28);
  $('vocabBar').style.width='100%'; $('dlgBar').style.width='100%';
  /* 本关学到的词 */
  let words=[];
  if(m.type==='dialogue') words=m.vocab;
  else words=m.questions.filter(q=>q.t!=='cloze').map(q=>({en:q.word,zh:q.zh}));
  words=words.slice(0,6);
  const idx=ALL.findIndex(x=>x.id===m.id);
  const next=ALL[idx+1];
  const lv=levelOf(save.xp);
  $('screen-result').innerHTML =
    '<div class="result-card">'
    +'<div class="result-emoji">'+(stars===3?'🏆':stars===2?'🎉':'✅')+'</div>'
    +'<h2>'+(stars===3?'完美通关！':stars===2?'顺利通关！':'闯关成功！')+'</h2>'
    +'<div class="result-stars">'
      +[1,2,3].map(i=>'<span class="'+(i<=stars?'':'off')+'">★</span>').join('')+'</div>'
    +'<div class="result-xp">⭐ +'+gained+' XP　|　Lv.'+lv+'</div>'
    +'<div class="learned-list"><h4>📚 本关核心词句（点喇叭跟读）</h4>'
    + words.map(v=>'<div class="learned-item"><span class="spk" onclick="window.EQ.speak(\''+String(v.en).replace(/'/g,"\\'")+'\')">🔊</span><b>'+esc(v.en)+'</b><span class="zh">'+esc(v.zh)+'</span></div>').join('')
    +'</div>'
    +'<div class="result-actions">'
    +(next?'<button class="btn" onclick="App.openMission(\''+next.id+'\')">下一关：'+esc(next.titleZh)+' →</button>':'<button class="btn" onclick="App.go(\'map\')">🏆 全部通关，回到地图</button>')
    +'<button class="btn blue" onclick="App.startMission()">↻ 再玩一次冲三星</button>'
    +'<button class="btn ghost" onclick="App.go(\'map\')">返回地图</button>'
    +'</div></div>';
  show('result');
}

/* ---------- 徽章 ---------- */
const BADGES=[
  {id:'first', icon:'🌱', name:'初出茅庐', desc:'通关第一个关卡'},
  {id:'star3', icon:'🌟', name:'三星达人', desc:'首次获得三星评价'},
  {id:'world', icon:'🗺️', name:'世界征服者', desc:'通关一个完整主题世界'},
  {id:'spoken', icon:'🎤', name:'开口勇士', desc:'用语音回答 10 次'},
  {id:'streak', icon:'🔥', name:'坚持不懈', desc:'连续打卡 3 天'},
  {id:'all', icon:'👑', name:'英语王者', desc:'通关全部 24 个关卡'}
];
function earnedBadges(){
  const set=new Set();
  const comp=Object.keys(save.completed);
  if(comp.length>=1) set.add('first');
  if(comp.some(id=>save.completed[id].stars===3)) set.add('star3');
  D.worlds.forEach(w=>{ if(w.missions.every(m=>save.completed[m.id])) set.add('world'); });
  if(save.spoken>=10) set.add('spoken');
  if(save.streak>=3) set.add('streak');
  if(comp.length>=ALL.length) set.add('all');
  return set;
}
function checkBadges(){ /* 结果页不打断，徽章在个人中心展示 */ }

/* ---------- 个人中心 ---------- */
function renderProfile(){
  const comp=Object.keys(save.completed);
  const three=comp.filter(id=>save.completed[id].stars===3).length;
  const got=earnedBadges();
  $('screen-profile').innerHTML =
    '<div class="map-head"><h2>我的成就</h2><p>进度自动保存在本机浏览器，随时回来继续冒险</p></div>'
    +'<div class="stat-row">'
    +'<div class="stat-box"><div class="n">Lv.'+levelOf(save.xp)+'</div><div class="l">当前等级</div></div>'
    +'<div class="stat-box"><div class="n">'+comp.length+'/'+ALL.length+'</div><div class="l">通关关卡</div></div>'
    +'<div class="stat-box"><div class="n">'+three+'</div><div class="l">三星关卡</div></div>'
    +'</div>'
    +'<div class="stat-row">'
    +'<div class="stat-box"><div class="n">'+save.xp+'</div><div class="l">总 XP</div></div>'
    +'<div class="stat-box"><div class="n">'+save.streak+'</div><div class="l">连续打卡(天)</div></div>'
    +'<div class="stat-box"><div class="n">'+save.spoken+'</div><div class="l">语音答题</div></div>'
    +'</div>'
    +'<div class="map-head" style="margin-top:18px"><h2 style="font-size:19px">徽章墙</h2></div>'
    +'<div class="badge-grid">'
    + BADGES.map(b=>'<div class="badge'+(got.has(b.id)?' got':'')+'"><div class="bi">'+b.icon+'</div><b>'+b.name+'</b><span>'+b.desc+'</span></div>').join('')
    +'</div>'
    +'<div class="danger-zone"><button class="btn ghost" onclick="resetSave()">重置全部存档</button></div>';
}
function resetSave(){
  if(!confirm('确定要清空所有关卡进度和 XP 吗？此操作不可恢复。')) return;
  localStorage.removeItem(SAVE_KEY);
  save=load(); persist(); toast('存档已重置'); App.go('home');
}

/* ---------- 初始化 ---------- */
document.addEventListener('DOMContentLoaded',()=>{
  touchStreak();
  show('home');
  refreshTopbar();
});
window.EQ = { speak, resetSave };
})();
