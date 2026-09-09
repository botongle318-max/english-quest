/* =========================================================
 * English Quest 关卡数据
 * 6 个主题世界 × 4 关（3 对话关 + 1 词汇 BOSS 关）= 24 关
 * 对话关 lines: n=NPC台词(英) nz=中文; opts: e=选项(英) z=中文 ok=是否正确 hint=错误提示
 * 词汇题 questions: t 类型 listen(听音选义)/match(看英选义)/cloze(选词填空)
 * ========================================================= */
window.EQ_DATA = {
  worlds: [

/* ================= 世界 1：咖啡馆与餐厅 ================= */
{
  id:'cafe', name:'Café & Restaurant', nameZh:'咖啡馆与餐厅', icon:'☕',
  gradient:'linear-gradient(135deg,#c98850,#e0a869)',
  missions:[
    {
      id:'cafe1', type:'dialogue', icon:'☕', title:'Ordering Coffee', titleZh:'点一杯咖啡',
      npc:{emoji:'👩‍🍳', name:'Barista'},
      scene:'周一早晨，你走进校园旁一家忙碌的咖啡馆，想点一杯咖啡带去上课。',
      goal:'顺利点到一杯中杯拿铁，并选择在这里喝还是带走。',
      vocab:[{en:'latte',zh:'拿铁'},{en:'medium',zh:'中杯'},{en:'for here',zh:'堂食'},{en:'to go',zh:'带走'}],
      lines:[
        {n:"Hi there! What can I get started for you today?", nz:"你好！今天想喝点什么？",
         opts:[
           {e:"Hi! Could I get a medium latte, please?", z:"你好！请给我一杯中杯拿铁。", ok:true},
           {e:"Give me coffee. Now.", z:"给我咖啡，快点。", hint:"语气太生硬啦，加上 please 和 could I 会更礼貌。"},
           {e:"Sorry, I don't speak English.", z:"抱歉我不会说英语。", hint:"别紧张，大胆点单就好！"}
         ]},
        {n:"Sure! Would you like that hot or iced?", nz:"好的！要热的还是冰的？",
         opts:[
           {e:"Hot, please. It's a chilly morning.", z:"热的，谢谢。今天早上有点冷。", ok:true},
           {e:"Yes.", z:"好。", hint:"对方问的是 hot or iced，需要明确选一个哦。"},
           {e:"I want food.", z:"我想要吃的。", hint:"对方问的是饮品温度，先回答这个问题。"}
         ]},
        {n:"Got it. And will that be for here or to go?", nz:"明白。在这儿喝还是带走？",
         opts:[
           {e:"To go, please. I have class in ten minutes.", z:"带走，谢谢。我十分钟后有课。", ok:true},
           {e:"For here or to go?", z:"在这儿喝还是带走？", hint:"这是店员问你的问题，你需要回答其中一个。"},
           {e:"No problem.", z:"没问题。", hint:"这不是 yes/no 问题，要回答 for here 或 to go。"}
         ]},
        {n:"Alright. Your total is four dollars and fifty cents.", nz:"好的，一共 4 美元 50 美分。",
         opts:[
           {e:"Here you go. Keep the change.", z:"给你，不用找了。", ok:true},
           {e:"How much money do you have?", z:"你有多少钱？", hint:"该你付钱啦，这句话是问别人有多少钱。"},
           {e:"I am total.", z:"我是总数。", hint:"付钱可以说 Here you go（给你）。"}
         ]},
        {n:"Thanks! Here's your latte. Have a great day!", nz:"谢谢！这是你的拿铁，祝你今天愉快！",
         opts:[
           {e:"Thank you! You too. Bye now.", z:"谢谢！你也一样，再见。", ok:true},
           {e:"Give me my money back.", z:"把钱退给我。", hint:"交易已经顺利完成，礼貌道谢就好。"},
           {e:"I don't like it.", z:"我不喜欢。", hint:"你还没尝呢，先礼貌地结束对话吧。"}
         ]}
      ]
    },
    {
      id:'cafe2', type:'dialogue', icon:'🍽️', title:'At a Restaurant', titleZh:'餐厅点餐',
      npc:{emoji:'🤵', name:'Waiter'},
      scene:'周末你和朋友来到一家西餐厅，服务员上前为你点餐。',
      goal:'成功点好前菜、主菜，并选择配菜。',
      vocab:[{en:'starter',zh:'前菜'},{en:'main course',zh:'主菜'},{en:'steak',zh:'牛排'},{en:'medium rare',zh:'五分熟'}],
      lines:[
        {n:"Good evening! Are you ready to order?", nz:"晚上好！准备好点餐了吗？",
         opts:[
           {e:"Yes. For a starter, I'll have the tomato soup.", z:"是的，前菜我要番茄汤。", ok:true},
           {e:"I am ready in my heart.", z:"我心里准备好了。", hint:"直接告诉服务员你要点的菜就好。"},
           {e:"Where is your boss?", z:"你老板在哪？", hint:"服务员在等你点餐，不用找老板～"}
         ]},
        {n:"Excellent choice. And for your main course?", nz:"选得好。主菜要什么呢？",
         opts:[
           {e:"I'd like the steak, please.", z:"我要牛排，谢谢。", ok:true},
           {e:"I am a main course.", z:"我是一道主菜。", hint:"I'd like... 是点餐常用句型：我想要……"},
           {e:"The main course is expensive.", z:"主菜好贵。", hint:"直接说出你想点的菜名即可。"}
         ]},
        {n:"How would you like your steak cooked?", nz:"牛排要几分熟？",
         opts:[
           {e:"Medium rare, please.", z:"五分熟，谢谢。", ok:true},
           {e:"Cooked by you.", z:"你来做。", hint:"几分熟要说 rare/medium/well done 等。"},
           {e:"I like steak very much.", z:"我非常喜欢牛排。", hint:"对方问的是熟度，medium rare 是五分熟。"}
         ]},
        {n:"That comes with either fries or a salad. Which do you prefer?", nz:"配菜可以选薯条或沙拉，你要哪个？",
         opts:[
           {e:"A salad sounds great, thanks.", z:"沙拉就好，谢谢。", ok:true},
           {e:"Either is me.", z:"哪个都是我。", hint:"二选一时直接说 I'll have / A salad, please。"},
           {e:"Do you prefer fries?", z:"你喜欢薯条吗？", hint:"是服务员在问你，你来选一个。"}
         ]},
        {n:"Perfect. Anything to drink?", nz:"好的，要喝点什么吗？",
         opts:[
           {e:"Just water for now, thanks.", z:"先来杯水就好，谢谢。", ok:true},
           {e:"I drink every day.", z:"我每天都喝。", hint:"告诉服务员你要的饮品，比如 water。"},
           {e:"Drinking is fun.", z:"喝东西很有趣。", hint:"点一杯饮品吧，水就可以说 Just water。"}
         ]}
      ]
    },
    {
      id:'cafe3', type:'dialogue', icon:'🧾', title:'Paying the Bill', titleZh:'结账付款',
      npc:{emoji:'💁', name:'Cashier'},
      scene:'用餐结束，你走到收银台结账，并询问是否可以刷卡。',
      goal:'核对账单、选择支付方式并顺利结账。',
      vocab:[{en:'bill',zh:'账单'},{en:'credit card',zh:'信用卡'},{en:'receipt',zh:'收据'},{en:'split',zh:'分开付'}],
      lines:[
        {n:"Hi! Did you enjoy your meal?", nz:"你好！用餐还愉快吗？",
         opts:[
           {e:"It was delicious, thank you. Could I get the bill?", z:"很好吃，谢谢。可以结账吗？", ok:true},
           {e:"I enjoyed your face.", z:"我喜欢你的脸。", hint:"先评价餐点，再要账单 bill。"},
           {e:"No bill, please.", z:"请不要给我账单。", hint:"吃完要结账，可以说 Could I get the bill?"}
         ]},
        {n:"Of course. Here you go — that's twenty-eight dollars even.", nz:"当然，给您，一共 28 美元整。",
         opts:[
           {e:"Let me take a quick look... looks right.", z:"我看一下……没问题。", ok:true},
           {e:"Twenty-eight is a number.", z:"28 是个数字。", hint:"核对账单后确认无误即可继续。"},
           {e:"I don't have eyes.", z:"我没有眼睛。", hint:"可以先核对一下账单金额再付款。"}
         ]},
        {n:"How would you like to pay — cash or card?", nz:"您想怎么付，现金还是刷卡？",
         opts:[
           {e:"By credit card, please. Do you take Visa?", z:"刷信用卡，你们收 Visa 吗？", ok:true},
           {e:"I pay with my smile.", z:"我用微笑支付。", hint:"支付方式要说 cash 或 credit card。"},
           {e:"How do you pay?", z:"你怎么付钱？", hint:"是你在付款，选一种方式告诉收银员。"}
         ]},
        {n:"Yes, we take Visa. Please insert or tap your card.", nz:"收的，请插卡或刷卡。",
         opts:[
           {e:"Sure, tapping it now.", z:"好的，我现在拍卡。", ok:true},
           {e:"My card is at home.", z:"我的卡在家。", hint:"既然选择刷卡，就完成刷卡动作吧。"},
           {e:"What is a card?", z:"什么是卡？", hint:"按提示拍卡/插卡即可。"}
         ]},
        {n:"Approved! Would you like a receipt?", nz:"支付成功！需要收据吗？",
         opts:[
           {e:"Yes, a digital receipt to my email would be great.", z:"要，发电子收据到我邮箱就好。", ok:true},
           {e:"Receipts are paper.", z:"收据是纸做的。", hint:"回答需要或不需要即可。"},
           {e:"Are you a receipt?", z:"你是收据吗？", hint:"需要收据就说 Yes, please。"}
         ]}
      ]
    },
    {
      id:'cafe4', type:'vocab', icon:'👾', title:'Café Boss Battle', titleZh:'餐厅 BOSS 战',
      bossEmoji:'👾', bossName:'Hungry Monster',
      intro:'击败饥饿小怪兽，证明你掌握了餐厅词汇！',
      questions:[
        {t:'listen', word:'latte', zh:'拿铁', options:['拿铁','橙汁','白开水','红茶']},
        {t:'match', word:'starter', zh:'前菜/开胃菜', options:['甜点','前菜','账单','小费']},
        {t:'cloze', sentence:'How would you like your ___ cooked?', answer:'steak', options:['steak','stake','stick','stack']},
        {t:'match', word:'to go', zh:'打包带走', options:['堂食','打包带走','点餐','加餐']},
        {t:'cloze', sentence:'Could I get the ___, please?', answer:'bill', options:['bell','bill','beer','bean']},
        {t:'listen', word:'receipt', zh:'收据', options:['食谱','收据','菜单','预订']}
      ]
    }
  ]
},

/* ================= 世界 2：旅行与交通 ================= */
{
  id:'travel', name:'Travel & Transport', nameZh:'旅行与交通', icon:'✈️',
  gradient:'linear-gradient(135deg,#3b82d6,#67b0ff)',
  missions:[
    {
      id:'travel1', type:'dialogue', icon:'🛫', title:'Airport Check-in', titleZh:'机场值机',
      npc:{emoji:'🧑‍✈️', name:'Check-in Agent'},
      scene:'你第一次独自飞国际航班，来到值机柜台办理登机手续。',
      goal:'出示护照、选择座位并托运行李。',
      vocab:[{en:'passport',zh:'护照'},{en:'aisle seat',zh:'靠过道座位'},{en:'check in',zh:'值机'},{en:'luggage',zh:'行李'}],
      lines:[
        {n:"Good morning! May I see your passport, please?", nz:"早上好！请出示您的护照。",
         opts:[
           {e:"Here's my passport. I'm flying to London.", z:"这是我的护照，我飞伦敦。", ok:true},
           {e:"I don't have a passport.", z:"我没有护照。", hint:"国际航班必须出示护照，记得随身携带。"},
           {e:"Why do you need it?", z:"你为什么需要它？", hint:"值机必须查验护照，直接递给工作人员即可。"}
         ]},
        {n:"Thank you. Are you checking any luggage today?", nz:"谢谢。今天有行李要托运吗？",
         opts:[
           {e:"Yes, just one suitcase to check.", z:"有，托运一个行李箱。", ok:true},
           {e:"My luggage checks me.", z:"我的行李托运我。", hint:"托运行李说 I'd like to check one suitcase。"},
           {e:"Luggage is heavy.", z:"行李很重。", hint:"回答有或没有，并说明件数。"}
         ]},
        {n:"Please place it on the scale. Would you prefer a window or an aisle seat?", nz:"请放到秤上。您想要靠窗还是靠过道的座位？",
         opts:[
           {e:"An aisle seat, please. It's easier to stretch my legs.", z:"靠过道，方便伸腿。", ok:true},
           {e:"A seat, please.", z:"要一个座位。", hint:"要明确选 window（靠窗）还是 aisle（靠过道）。"},
           {e:"I prefer standing.", z:"我更喜欢站着。", hint:"飞机上需要选座位，靠窗或靠过道选一个。"}
         ]},
        {n:"No problem. Did you pack these bags yourself?", nz:"好的。行李是您本人收拾的吗？",
         opts:[
           {e:"Yes, I packed everything myself.", z:"是的，都是我自己收拾的。", ok:true},
           {e:"A stranger packed it.", z:"一个陌生人收拾的。", hint:"安全问题必须如实回答，本人收拾就说 myself。"},
           {e:"I don't know what's inside.", z:"我不知道里面有什么。", hint:"自己的行李要清楚内容物，并如实回答。"}
         ]},
        {n:"Great. Here's your boarding pass. Your gate is B12, boarding at 9:40.", nz:"好了，这是您的登机牌，登机口 B12，9:40 开始登机。",
         opts:[
           {e:"Thank you! Which way to gate B12?", z:"谢谢！B12 登机口怎么走？", ok:true},
           {e:"Can I keep your pen?", z:"你的笔能给我吗？", hint:"拿好登机牌，可以问登机口方向。"},
           {e:"I will board yesterday.", z:"我昨天登机。", hint:"听清登机口和时间，不确定方向可以问路。"}
         ]}
      ]
    },
    {
      id:'travel2', type:'dialogue', icon:'🛃', title:'At Immigration', titleZh:'入境审查',
      npc:{emoji:'🛃', name:'Immigration Officer'},
      scene:'抵达目的地后，你在入境柜台接受移民官询问。',
      goal:'说明来访目的、停留时间和住宿地点。',
      vocab:[{en:'purpose of visit',zh:'来访目的'},{en:'tourism',zh:'旅游'},{en:'duration',zh:'持续时间'},{en:'accommodation',zh:'住宿'}],
      lines:[
        {n:"Welcome. What's the purpose of your visit?", nz:"欢迎，您此行的目的是什么？",
         opts:[
           {e:"I'm here for tourism and to visit a friend.", z:"我来旅游，顺便看一位朋友。", ok:true},
           {e:"My purpose is a secret.", z:"我的目的是秘密。", hint:"如实说明目的，如 tourism 旅游。"},
           {e:"I live here now.", z:"我现在住这儿了。", hint:"持旅游签要说明是旅游/访友等短期目的。"}
         ]},
        {n:"How long do you plan to stay?", nz:"计划停留多久？",
         opts:[
           {e:"About two weeks. I fly back on the 24th.", z:"大约两周，24 号返程。", ok:true},
           {e:"Very long time, forever.", z:"很久，永远。", hint:"给出具体时长和返程日期更稳妥。"},
           {e:"As long as you want.", z:"你想多久就多久。", hint:"停留时间由你说明，例如 two weeks。"}
         ]},
        {n:"Where will you be staying?", nz:"你会住在哪里？",
         opts:[
           {e:"At a hotel downtown — I have the booking here.", z:"市中心的酒店，我带了预订单。", ok:true},
           {e:"Maybe on the street.", z:"可能住街上。", hint:"入境需要明确住宿地址，准备好酒店订单。"},
           {e:"Wherever the wind takes me.", z:"风把我吹到哪算哪。", hint:"请提供酒店或住处的名称地址。"}
         ]},
        {n:"Do you have a return ticket?", nz:"你有返程机票吗？",
         opts:[
           {e:"Yes, here's my return booking confirmation.", z:"有的，这是返程订票确认单。", ok:true},
           {e:"Return to where?", z:"返回到哪里？", hint:"出示返程机票证明你会按期离境。"},
           {e:"I will swim back.", z:"我游回去。", hint:"请准备并出示返程机票。"}
         ]},
        {n:"Everything looks good. Welcome, and enjoy your stay!", nz:"没问题，欢迎您，祝旅途愉快！",
         opts:[
           {e:"Thank you very much, officer!", z:"非常感谢，警官！", ok:true},
           {e:"Finally, so many questions.", z:"问题可真多。", hint:"通过审查后礼貌道谢即可，别抱怨哦。"},
           {e:"Can I work here now?", z:"我现在可以在这工作吗？", hint:"旅游签不允许工作，礼貌结束就好。"}
         ]}
      ]
    },
    {
      id:'travel3', type:'dialogue', icon:'🧭', title:'Asking Directions', titleZh:'问路',
      npc:{emoji:'🚶', name:'Local Resident'},
      scene:'你在城市里迷路了，向一位当地人询问去地铁站的路。',
      goal:'问清路线、距离和交通方式。',
      vocab:[{en:'subway station',zh:'地铁站'},{en:'block',zh:'街区'},{en:'turn left',zh:'左转'},{en:'across from',zh:'在……对面'}],
      lines:[
        {n:"You look a bit lost. Can I help you find something?", nz:"你看起来有点迷路，需要帮忙吗？",
         opts:[
           {e:"Yes, please! How do I get to the nearest subway station?", z:"是的！最近的地铁站怎么走？", ok:true},
           {e:"I am not lost, you are lost.", z:"我没迷路，是你迷路了。", hint:"大方求助，说明目的地即可。"},
           {e:"Where am I?", z:"我在哪？", hint:"先说你要去哪里，对方才好指路。"}
         ]},
        {n:"Sure! It's about three blocks from here.", nz:"没问题！离这儿大约三个街区。",
         opts:[
           {e:"Is it within walking distance?", z:"走路能到吗？", ok:true},
           {e:"Three blocks is a food.", z:"三个街区是一种食物。", hint:"可以接着问距离远近或交通方式。"},
           {e:"Blocks are heavy.", z:"街区很重。", hint:"可以问步行是否可达。"}
         ]},
        {n:"Definitely, around a ten-minute walk. Go straight and turn left at the second light.", nz:"当然，走十分钟左右。直走，在第二个红绿灯左转。",
         opts:[
           {e:"Straight, then left at the second light. Got it!", z:"直走，第二个灯左转，记住了！", ok:true},
           {e:"Turn left at the first light?", z:"第一个灯左转吗？", hint:"注意听清是第二个红绿灯 second light。"},
           {e:"What is a light?", z:"什么是红绿灯？", hint:"重复路线确认：second light 是第二个红绿灯。"}
         ]},
        {n:"That's right. You'll see a bakery, and the station entrance is across from it.", nz:"对，你会看到一家面包店，地铁站入口就在它对面。",
         opts:[
           {e:"Across from the bakery — thank you so much!", z:"面包店对面，太感谢了！", ok:true},
           {e:"I don't like bread.", z:"我不喜欢面包。", hint:"面包店是地标，记住它对面就是入口。"},
           {e:"The bakery is across from itself.", z:"面包店在自己对面。", hint:"across from 是在……对面，记住地标关系。"}
         ]},
        {n:"You're welcome! Safe travels.", nz:"不客气，一路顺利！",
         opts:[
           {e:"Thanks again, have a nice day!", z:"再次感谢，祝你愉快！", ok:true},
           {e:"Don't follow me.", z:"别跟着我。", hint:"得到帮助后礼貌道谢道别。"},
           {e:"I will live here.", z:"我要住这儿了。", hint:"道谢并结束对话即可。"}
         ]}
      ]
    },
    {
      id:'travel4', type:'vocab', icon:'👾', title:'Travel Boss Battle', titleZh:'旅行 BOSS 战',
      bossEmoji:'👾', bossName:'Lost Slime',
      intro:'击败迷路史莱姆，巩固旅行交通词汇！',
      questions:[
        {t:'match', word:'passport', zh:'护照', options:['护照','驾照','登机牌','签证']},
        {t:'cloze', sentence:'I would like an ___ seat, please.', answer:'aisle', options:['aisle','isle','aisel','aile']},
        {t:'listen', word:'luggage', zh:'行李', options:['航班','行李','登机口','延误']},
        {t:'match', word:'tourism', zh:'旅游', options:['工作','移民','旅游','留学']},
        {t:'cloze', sentence:'Go straight and ___ left at the light.', answer:'turn', options:['turn','tern','tone','torn']},
        {t:'listen', word:'accommodation', zh:'住宿', options:['通勤','住宿','餐饮','门票']}
      ]
    }
  ]
},

/* ================= 世界 3：酒店住宿 ================= */
{
  id:'hotel', name:'Hotel & Stay', nameZh:'酒店住宿', icon:'🏨',
  gradient:'linear-gradient(135deg,#8a5cd1,#b794ff)',
  missions:[
    {
      id:'hotel1', type:'dialogue', icon:'🔑', title:'Checking In', titleZh:'办理入住',
      npc:{emoji:'🙋‍♀️', name:'Receptionist'},
      scene:'晚上十点你抵达预订的酒店，到前台办理入住。',
      goal:'报上预订姓名、确认房型并拿到房卡。',
      vocab:[{en:'reservation',zh:'预订'},{en:'check in',zh:'入住'},{en:'single room',zh:'单人间'},{en:'key card',zh:'房卡'}],
      lines:[
        {n:"Good evening! Welcome to the Grand Hotel. How can I help you?", nz:"晚上好，欢迎光临大酒店，请问有什么可以帮您？",
         opts:[
           {e:"Hi, I have a reservation under the name Li.", z:"你好，我用姓李预订了房间。", ok:true},
           {e:"I want to buy this hotel.", z:"我想买下这家酒店。", hint:"报预订姓名：I have a reservation under the name..."},
           {e:"Do you have a bed?", z:"你们有床吗？", hint:"先说明你有预订并报上姓名。"}
         ]},
        {n:"Let me check... Yes, a single room for three nights, is that correct?", nz:"我查一下……是的，单人间三晚，对吗？",
         opts:[
           {e:"That's right, three nights.", z:"对，三晚。", ok:true},
           {e:"I want thirty nights.", z:"我要三十晚。", hint:"与预订一致就确认即可。"},
           {e:"What is a night?", z:"什么是一晚？", hint:"核对信息无误就确认。"}
         ]},
        {n:"Could I see your ID, and could you fill in this registration form?", nz:"请出示证件，并填写这张入住登记表。",
         opts:[
           {e:"Sure, here's my ID. I'll fill it out now.", z:"好的，这是证件，我现在填写。", ok:true},
           {e:"I don't write.", z:"我不写字。", hint:"按要求出示证件并填表。"},
           {e:"Fill it out for me, please.", z:"你帮我填吧。", hint:"入住登记需要本人填写，配合办理即可。"}
         ]},
        {n:"Thank you. Would you like a wake-up call or breakfast included?", nz:"谢谢。需要叫醒服务或含早餐吗？",
         opts:[
           {e:"Breakfast would be great. What time is it served?", z:"含早餐吧，几点供应？", ok:true},
           {e:"Wake me up forever.", z:"永远叫醒我。", hint:"按需选择服务，并可以追问细节。"},
           {e:"I don't eat breakfast.", z:"我不吃早餐。", hint:"可以选择含早并询问时间，或礼貌婉拒。"}
         ]},
        {n:"From 7 to 10 on the second floor. Here are your two key cards. You're in room 806.", nz:"二楼 7 点到 10 点。这是两张房卡，您住 806 房。",
         opts:[
           {e:"Thank you. Where are the elevators?", z:"谢谢，电梯在哪里？", ok:true},
           {e:"Why two cards?", z:"为什么有两张？", hint:"拿好房卡，可以问电梯/Wi-Fi 等实用信息。"},
           {e:"I live on the second floor.", z:"我住二楼。", hint:"你住 806，可以问电梯怎么走。"}
         ]}
      ]
    },
    {
      id:'hotel2', type:'dialogue', icon:'🛠️', title:'Room Problems', titleZh:'房间出问题了',
      npc:{emoji:'🧑‍🔧', name:'Front Desk'},
      scene:'进房间后你发现空调不制冷，于是打电话给前台。',
      goal:'描述问题、请求维修或换房。',
      vocab:[{en:'air conditioner',zh:'空调'},{en:'not working',zh:'坏了/不工作'},{en:'maintenance',zh:'维修'},{en:'switch rooms',zh:'换房'}],
      lines:[
        {n:"Front desk, how may I help you?", nz:"前台，请问需要什么帮助？",
         opts:[
           {e:"Hi, this is room 806. The air conditioner isn't working.", z:"你好，806 房，空调不制冷了。", ok:true},
           {e:"Hi, I am a problem.", z:"你好，我是个问题。", hint:"先说房号，再描述哪里坏了 isn't working。"},
           {e:"Why is this hotel so cold?", z:"酒店为什么这么冷？", hint:"说明房号和具体故障设备。"}
         ]},
        {n:"I'm sorry to hear that. Is it blowing warm air, or not turning on at all?", nz:"很抱歉。是吹热风，还是完全打不开？",
         opts:[
           {e:"It turns on, but only blows warm air.", z:"能打开，但只吹暖风。", ok:true},
           {e:"It is sad.", z:"它很难过。", hint:"具体描述故障现象，方便维修判断。"},
           {e:"It blows my mind.", z:"它让我震惊。", hint:"说明具体情况：吹暖风/无法开机。"}
         ]},
        {n:"Understood. I can send maintenance up right away, or move you to another room.", nz:"明白了。我可以立刻派维修人员上去，或者给您换房。",
         opts:[
           {e:"It's late — could you switch me to another room instead?", z:"太晚了，能直接给我换房吗？", ok:true},
           {e:"Send maintenance next week.", z:"下周再派维修吧。", hint:"二选一，给出你的选择。"},
           {e:"Can maintenance sleep here?", z:"维修人员能睡这儿吗？", hint:"在维修和换房之间做选择。"}
         ]},
        {n:"Of course. Room 812 is available. I'll send someone with a new key card.", nz:"可以，812 房空着，我让人给您送新房卡。",
         opts:[
           {e:"That's very kind, thank you. About how long will it take?", z:"太好了，大概要多久？", ok:true},
           {e:"I want room 1.", z:"我要 1 号房。", hint:"接受安排并询问等待时间即可。"},
           {e:"Send them to 806 forever.", z:"让他们永远待在 806。", hint:"确认方案，可以问多久能办好。"}
         ]},
        {n:"Just a few minutes. Sorry again for the inconvenience!", nz:"几分钟就好，给您添麻烦了！",
         opts:[
           {e:"No worries at all, thanks for sorting it out quickly.", z:"没关系，谢谢这么快处理。", ok:true},
           {e:"Inconvenience is my middle name.", z:"麻烦就是我的中间名。", hint:"礼貌回应，感谢处理。"},
           {e:"I will remember this.", z:"我记住了。", hint:"对方致歉时大度回应即可。"}
         ]}
      ]
    },
    {
      id:'hotel3', type:'dialogue', icon:'🛎️', title:'Room Service', titleZh:'客房服务',
      npc:{emoji:'🛎️', name:'Room Service'},
      scene:'你在房间里打电话叫客房送餐服务。',
      goal:'点餐、说明送到时间并确认费用。',
      vocab:[{en:'room service',zh:'客房服务'},{en:'order',zh:'点餐'},{en:'deliver',zh:'配送'},{en:'charge to room',zh:'计入房账'}],
      lines:[
        {n:"Room service, this is Anna speaking. What would you like to order?", nz:"客房服务，我是安娜，您想点什么？",
         opts:[
           {e:"Hi, I'd like a club sandwich and a pot of tea, please.", z:"你好，我要一份总汇三明治和一壶茶。", ok:true},
           {e:"Whatever you have.", z:"有什么上什么。", hint:"具体说出你要点的餐品。"},
           {e:"I'd like to order a house.", z:"我想点一栋房子。", hint:"点餐要说具体食物名称。"}
         ]},
        {n:"One club sandwich and a pot of tea. Would you like anything else?", nz:"一份总汇三明治和一壶茶，还要别的吗？",
         opts:[
           {e:"That's all for now, thanks.", z:"先这些，谢谢。", ok:true},
           {e:"Anything else?", z:"还要别的吗？", hint:"这是对方在问你，回答就这些或继续加单。"},
           {e:"I want everything.", z:"我全都要。", hint:"确认点单内容，不需要就说 That's all。"}
         ]},
        {n:"Great. It should be delivered in about 25 minutes to your room.", nz:"好的，大约 25 分钟送到您房间。",
         opts:[
           {e:"Perfect. Could you bring extra napkins, please?", z:"好的，能多带些纸巾吗？", ok:true},
           {e:"25 minutes is a sandwich.", z:"25 分钟是三明治。", hint:"可以补充小要求，或确认送达时间。"},
           {e:"Deliver it yesterday.", z:"昨天送到。", hint:"确认送达时间，可补充合理要求。"}
         ]},
        {n:"Sure. Would you like to charge this to your room?", nz:"好的，费用要计入房账吗？",
         opts:[
           {e:"Yes, please charge it to room 812.", z:"是的，计入 812 房账。", ok:true},
           {e:"Charge the room to me.", z:"把房间记我账上。", hint:"计入房账说 charge it to my room。"},
           {e:"I charge phones.", z:"我给手机充电。", hint:"确认支付方式：计入房账或现付。"}
         ]},
        {n:"Done. We'll knock when we arrive. Enjoy your meal in advance!", nz:"好的，到了我们会敲门，提前祝您用餐愉快！",
         opts:[
           {e:"Thanks a lot, see you soon.", z:"多谢，一会儿见。", ok:true},
           {e:"Don't knock, ever.", z:"永远别敲门。", hint:"礼貌道谢结束通话。"},
           {e:"I enjoy meals in advance already.", z:"我已经提前享受了。", hint:"道谢并结束即可。"}
         ]}
      ]
    },
    {
      id:'hotel4', type:'vocab', icon:'👾', title:'Hotel Boss Battle', titleZh:'酒店 BOSS 战',
      bossEmoji:'👾', bossName:'Snoozy Ghost',
      intro:'击败瞌睡幽灵，拿下酒店住宿词汇！',
      questions:[
        {t:'match', word:'reservation', zh:'预订', options:['预订','退房','押金','发票']},
        {t:'cloze', sentence:'I have a ___ under the name Li.', answer:'reservation', options:['reservation','preservation','observation','relaxation']},
        {t:'listen', word:'elevator', zh:'电梯', options:['楼梯','电梯','走廊','大堂']},
        {t:'match', word:'maintenance', zh:'维修/维护', options:['保洁','维修','安保','迎宾']},
        {t:'cloze', sentence:'Please ___ it to my room.', answer:'charge', options:['change','charge','chase','chart']},
        {t:'listen', word:'key card', zh:'房卡', options:['钥匙卡/房卡','银行卡','名片','门禁密码']}
      ]
    }
  ]
}

,

/* ================= 世界 4：日常生活 ================= */
{
  id:'daily', name:'Daily Life', nameZh:'日常生活', icon:'🏥',
  gradient:'linear-gradient(135deg,#3fa036,#7fd86f)',
  missions:[
    {
      id:'daily1', type:'dialogue', icon:'💊', title:'At the Pharmacy', titleZh:'药店买药',
      npc:{emoji:'👨‍⚕️', name:'Pharmacist'},
      scene:'你有点感冒症状，到药店向药师描述症状并买药。',
      goal:'描述症状、获得用药建议并确认用法。',
      vocab:[{en:'symptom',zh:'症状'},{en:'sore throat',zh:'喉咙痛'},{en:'dosage',zh:'剂量'},{en:'side effect',zh:'副作用'}],
      lines:[
        {n:"Hi there. What symptoms are you dealing with?", nz:"你好，你有什么症状？",
         opts:[
           {e:"I have a sore throat and a slight headache.", z:"我喉咙痛，头也有点疼。", ok:true},
           {e:"I am a symptom.", z:"我是一种症状。", hint:"描述具体症状：sore throat、headache、fever 等。"},
           {e:"Everything hurts, including my mood.", z:"哪儿都疼，包括心情。", hint:"说清身体症状，方便药师推荐药品。"}
         ]},
        {n:"I see. When did these symptoms start?", nz:"明白了，症状什么时候开始的？",
         opts:[
           {e:"Yesterday morning, after I got caught in the rain.", z:"昨天早上淋雨后开始的。", ok:true},
           {e:"Before I was born.", z:"我出生前。", hint:"说明症状开始的时间。"},
           {e:"They haven't started yet.", z:"还没开始。", hint:"如实回答开始时间，比如 yesterday。"}
         ]},
        {n:"Sounds like a mild cold. I'd recommend this cold relief tablet.", nz:"听起来是轻度感冒，推荐这款感冒药。",
         opts:[
           {e:"Thank you. How often should I take it?", z:"谢谢，多久吃一次？", ok:true},
           {e:"I don't believe in tablets.", z:"我不相信药片。", hint:"接受建议后询问用法用量。"},
           {e:"Is the tablet friendly?", z:"药片友好吗？", hint:"问清剂量和频次：How often should I take it?"}
         ]},
        {n:"One tablet twice a day after meals. Are you taking any other medicine?", nz:"一天两次，每次一片，饭后吃。你还在吃别的药吗？",
         opts:[
           {e:"No, nothing else. Are there any side effects?", z:"没有了，有什么副作用吗？", ok:true},
           {e:"I eat medicine for breakfast.", z:"我把药当早餐。", hint:"回答是否在服其他药，并可问副作用。"},
           {e:"Twice a day is a lot of meals.", z:"一天两顿饭真多。", hint:"确认用药史，并询问副作用更安心。"}
         ]},
        {n:"It may make you a little sleepy, so avoid driving. Get well soon!", nz:"可能会有点犯困，别开车。早日康复！",
         opts:[
           {e:"Got it, thanks for the advice!", z:"明白了，谢谢你的建议！", ok:true},
           {e:"I drive for a living.", z:"我靠开车为生。", hint:"记住注意事项，礼貌道谢。"},
           {e:"Sleepy is my favorite.", z:"我最爱犯困了。", hint:"听清禁忌，道谢结束。"}
         ]}
      ]
    },
    {
      id:'daily2', type:'dialogue', icon:'👕', title:'Shopping for Clothes', titleZh:'买衣服',
      npc:{emoji:'🧑‍💼', name:'Shop Assistant'},
      scene:'你在商场想买一件衬衫，向店员询问尺码和试衣间。',
      goal:'选到合适尺码并试穿。',
      vocab:[{en:'size',zh:'尺码'},{en:'try on',zh:'试穿'},{en:'fitting room',zh:'试衣间'},{en:'fit',zh:'合身'}],
      lines:[
        {n:"Hi! Are you looking for anything in particular?", nz:"你好！有什么特别想找的吗？",
         opts:[
           {e:"Yes, I'm looking for a casual button-up shirt.", z:"是的，我想找一件休闲衬衫。", ok:true},
           {e:"I'm looking for my purpose.", z:"我在寻找人生意义。", hint:"说明你想买的衣物类型。"},
           {e:"Just looking at the ceiling.", z:"我就看看天花板。", hint:"告诉店员你想找什么衣服。"}
         ]},
        {n:"These just arrived. What size do you usually wear?", nz:"这些是新款，你平时穿什么码？",
         opts:[
           {e:"Usually a medium. Could I try it on?", z:"一般 M 码，我可以试穿吗？", ok:true},
           {e:"My size is mysterious.", z:"我的尺码是个谜。", hint:"说出尺码 S/M/L，并可要求试穿。"},
           {e:"I wear clothes.", z:"我穿衣服。", hint:"具体回答尺码，如 medium。"}
         ]},
        {n:"Of course! The fitting rooms are right over there.", nz:"当然！试衣间就在那边。",
         opts:[
           {e:"Thanks. Do you have this in another color?", z:"谢谢，这件还有别的颜色吗？", ok:true},
           {e:"I will fit in the room.", z:"我要住进试衣间。", hint:"可以顺便问颜色/款式。"},
           {e:"Where is 'over there'?", z:"'那边'是哪边？", hint:"道谢，并继续问你关心的问题。"}
         ]},
        {n:"Yes, it also comes in light blue and white.", nz:"有的，还有浅蓝和白色。",
         opts:[
           {e:"I'll take both colors in medium to try.", z:"两个颜色都拿 M 码试试。", ok:true},
           {e:"Colors are many.", z:"颜色真多。", hint:"做出选择，拿对应尺码去试。"},
           {e:"Do colors wear me?", z:"是颜色穿我吗？", hint:"选定颜色和尺码去试穿。"}
         ]},
        {n:"Here you go. How does it fit?", nz:"给您，穿着合身吗？",
         opts:[
           {e:"The blue one fits perfectly — I'll take it!", z:"蓝色这件很合身，我买了！", ok:true},
           {e:"It fits my personality.", z:"它合我的性格。", hint:"评价是否合身 fit，并决定买不买。"},
           {e:"The shirt is wearing me.", z:"是衬衫在穿我。", hint:"说明大小是否合适并做决定。"}
         ]}
      ]
    },
    {
      id:'daily3', type:'dialogue', icon:'↩️', title:'Returning an Item', titleZh:'退换商品',
      npc:{emoji:'🧾', name:'Customer Service'},
      scene:'你买的耳机第二天就坏了，带着小票去客服柜台退换。',
      goal:'说明问题、出示小票并完成换货。',
      vocab:[{en:'return',zh:'退货'},{en:'exchange',zh:'换货'},{en:'receipt',zh:'小票'},{en:'faulty',zh:'有故障的'}],
      lines:[
        {n:"Hello, how can I assist you today?", nz:"您好，今天有什么可以帮您？",
         opts:[
           {e:"Hi, I'd like to exchange these faulty earphones.", z:"你好，这副耳机有问题，我想换货。", ok:true},
           {e:"Hi, assist me by giving me everything free.", z:"把所有东西免费给我。", hint:"说明是退货还是换货，以及商品问题。"},
           {e:"I am here to argue.", z:"我是来吵架的。", hint:"冷静说明诉求：return 退货或 exchange 换货。"}
         ]},
        {n:"I'm sorry about that. What seems to be the problem?", nz:"很抱歉，是什么问题呢？",
         opts:[
           {e:"The right side has no sound since yesterday.", z:"从昨天开始右边就没声音了。", ok:true},
           {e:"It doesn't love me anymore.", z:"它不爱我了。", hint:"具体描述故障现象。"},
           {e:"The problem is life.", z:"问题在于人生。", hint:"说明商品具体故障。"}
         ]},
        {n:"Do you have your receipt with you?", nz:"您带购物小票了吗？",
         opts:[
           {e:"Yes, here it is. I bought them the day before yesterday.", z:"带了，给你，前天买的。", ok:true},
           {e:"I threw it away on purpose.", z:"我故意扔了。", hint:"退换货通常需要小票，提前准备好。"},
           {e:"What is a receipt?", z:"小票是什么？", hint:"出示购买凭证 receipt。"}
         ]},
        {n:"Thanks, it's still within the 30-day window. Would you like a refund or an exchange?", nz:"谢谢，还在 30 天退换期内。您要退款还是换货？",
         opts:[
           {e:"An exchange for the same model, please.", z:"换一个同型号的，谢谢。", ok:true},
           {e:"I want both refund and exchange.", z:"退款换货我都要。", hint:"二选一，明确你的诉求。"},
           {e:"A window of 30 days sounds nice.", z:"30 天的窗户听起来不错。", hint:"在退款 refund 和换货 exchange 间选择。"}
         ]},
        {n:"No problem at all. Here's a brand-new pair, tested and working.", nz:"没问题，这是一副全新的，已测试正常。",
         opts:[
           {e:"Great, thanks for making this so easy!", z:"太好了，处理得这么顺利，谢谢！", ok:true},
           {e:"Test it again in front of me forever.", z:"永远在我面前测试。", hint:"确认新商品没问题，礼貌道谢。"},
           {e:"I will return tomorrow too.", z:"我明天还来退。", hint:"换货完成，道谢结束即可。"}
         ]}
      ]
    },
    {
      id:'daily4', type:'vocab', icon:'👾', title:'Daily Life Boss Battle', titleZh:'生活 BOSS 战',
      bossEmoji:'👾', bossName:'Sneeze Goblin',
      intro:'击败喷嚏哥布林，攻克日常生活词汇！',
      questions:[
        {t:'match', word:'symptom', zh:'症状', options:['处方','症状','剂量','药效']},
        {t:'listen', word:'sore throat', zh:'喉咙痛', options:['胃痛','头痛','喉咙痛','牙痛']},
        {t:'cloze', sentence:'Could I ___ this shirt on?', answer:'try', options:['try','dry','cry','fly']},
        {t:'match', word:'exchange', zh:'换货', options:['退款','换货','下单','打折']},
        {t:'cloze', sentence:'Take one tablet twice a day after ___.', answer:'meals', options:['meals','deals','seals','wheels']},
        {t:'listen', word:'receipt', zh:'购物小票', options:['购物小票','说明书','保修卡','会员卡']}
      ]
    }
  ]
},

/* ================= 世界 5：职场商务 ================= */
{
  id:'work', name:'Business & Workplace', nameZh:'职场商务', icon:'💼',
  gradient:'linear-gradient(135deg,#44556e,#7489a8)',
  missions:[
    {
      id:'work1', type:'dialogue', icon:'👔', title:'Job Interview', titleZh:'求职面试',
      npc:{emoji:'👔', name:'Interviewer'},
      scene:'你参加一家心仪公司的英文面试，面试官开始提问。',
      goal:'自我介绍、说明优势并问出一个好问题。',
      vocab:[{en:'strength',zh:'优势'},{en:'experience',zh:'经验'},{en:'team player',zh:'有团队精神的人'},{en:'opportunity',zh:'机会'}],
      lines:[
        {n:"Thanks for coming in. To start, could you tell me a little about yourself?", nz:"感谢来面试，先简单介绍一下你自己吧？",
         opts:[
           {e:"Sure. I'm a marketing major with two internships in social media.", z:"好的，我是市场营销专业，有两段新媒体实习经历。", ok:true},
           {e:"I like sleeping and snacks.", z:"我喜欢睡觉和零食。", hint:"介绍要与岗位相关：专业、经历、优势。"},
           {e:"What do you want to know?", z:"你想知道什么？", hint:"用一句话概括专业背景和相关经验。"}
         ]},
        {n:"Interesting. What would you say is your greatest strength?", nz:"有意思，你最大的优势是什么？",
         opts:[
           {e:"I'm a strong team player and a fast learner.", z:"我很有团队精神，学习能力也强。", ok:true},
           {e:"I can sleep with my eyes open.", z:"我能睁着眼睡觉。", hint:"结合岗位说优势，并举出例子更好。"},
           {e:"I have no weaknesses, so no strengths.", z:"我没有弱点，所以也没有优势。", hint:"正面回答优势，如团队合作、学习能力。"}
         ]},
        {n:"Why are you interested in this position?", nz:"你为什么对这个职位感兴趣？",
         opts:[
           {e:"I admire your products, and this role matches my skills.", z:"我很欣赏贵公司的产品，而且这个岗位和我的技能匹配。", ok:true},
           {e:"Because I need money.", z:"因为我需要钱。", hint:"从公司、岗位、成长角度回答，别只谈钱。"},
           {e:"It was the closest to my home.", z:"离我家最近。", hint:"展现你对公司和岗位的了解。"}
         ]},
        {n:"Good answer. Tell me about a challenge you overcame.", nz:"回答得不错，说说你克服过的一个挑战。",
         opts:[
           {e:"Once a deadline moved up, so I reprioritized and finished on time.", z:"有次截止日期提前，我重新排优先级并按时完成了。", ok:true},
           {e:"I overcame my alarm clock every day.", z:"我每天都战胜了闹钟。", hint:"用 STAR 思路讲一个真实的小案例。"},
           {e:"Challenges overcome me.", z:"都是挑战战胜我。", hint:"举具体例子：情境、行动、结果。"}
         ]},
        {n:"Wonderful. Do you have any questions for us?", nz:"很好，你有什么想问我们的吗？",
         opts:[
           {e:"Yes — what does success look like in this role in the first six months?", z:"有的，这个岗位前六个月怎样算做得好？", ok:true},
           {e:"No questions, I know everything.", z:"没问题，我什么都知道。", hint:"面试结尾反问一个好问题会加分。"},
           {e:"How much vacation do I get?", z:"我有多少假期？", hint:"首轮先问成长与职责，福利可以后续再谈。"}
         ]}
      ]
    },
    {
      id:'work2', type:'dialogue', icon:'📊', title:'A Team Meeting', titleZh:'团队会议',
      npc:{emoji:'👩‍💼', name:'Team Lead'},
      scene:'周会上领导点名让你汇报项目进展。',
      goal:'汇报进度、说明风险并提出需求。',
      vocab:[{en:'progress',zh:'进展'},{en:'on track',zh:'按计划进行'},{en:'bottleneck',zh:'瓶颈'},{en:'deadline',zh:'截止日期'}],
      lines:[
        {n:"Could you give us a quick update on your project?", nz:"能简单同步一下你项目的进展吗？",
         opts:[
           {e:"Sure. Overall we're on track, about 70% complete.", z:"好的，整体按计划进行，完成约 70%。", ok:true},
           {e:"My project is mysterious.", z:"我的项目很神秘。", hint:"先给整体状态：on track/at risk，再给进度。"},
           {e:"Update: I am here.", z:"进展：我在这儿。", hint:"用一句话概括进度百分比和状态。"}
         ]},
        {n:"Good to hear. Any bottlenecks we should know about?", nz:"不错，有什么需要大家知道的瓶颈吗？",
         opts:[
           {e:"The data pipeline is delayed, but we have a workaround.", z:"数据管道有点延迟，但我们有临时方案。", ok:true},
           {e:"The bottleneck is my chair.", z:"瓶颈是我的椅子。", hint:"如实说明风险，并附上应对方案。"},
           {e:"Bottlenecks are everywhere inside me.", z:"我浑身都是瓶颈。", hint:"指出具体卡点和你的应对办法。"}
         ]},
        {n:"Do you need any support from the team?", nz:"你需要团队提供什么支持吗？",
         opts:[
           {e:"It would help to have one designer review the UI this week.", z:"这周如果有设计师帮忙看下 UI 会很有帮助。", ok:true},
           {e:"I need emotional support.", z:"我需要精神支持。", hint:"提出具体、可执行的资源需求。"},
           {e:"Support me by being quiet.", z:"你们安静就是支持。", hint:"明确说出需要谁、做什么、何时做。"}
         ]},
        {n:"I can arrange that. Are we still confident about Friday's deadline?", nz:"我来安排。周五的截止日期还有把握吗？",
         opts:[
           {e:"Yes, if the design review happens by Wednesday.", z:"有把握，只要周三前完成设计评审。", ok:true},
           {e:"Friday is a day of the week.", z:"周五是一周中的一天。", hint:"明确回答能否按时，并说明前提条件。"},
           {e:"Deadlines are suggestions.", z:"截止日期只是建议。", hint:"给出明确承诺和依赖条件。"}
         ]},
        {n:"Perfect, thanks for the clear update.", nz:"很好，谢谢你清晰的汇报。",
         opts:[
           {e:"Happy to help. I'll share a written summary after the meeting.", z:"应该的，会后我发一份文字总结。", ok:true},
           {e:"Clear like mud.", z:"像泥巴一样清晰。", hint:"礼貌收尾，主动同步后续动作会加分。"},
           {e:"Can I sleep now?", z:"我能睡了吗？", hint:"专业收尾：总结、行动项、时间点。"}
         ]}
      ]
    },
    {
      id:'work3', type:'dialogue', icon:'💰', title:'Salary Negotiation', titleZh:'薪资谈判',
      npc:{emoji:'🤝', name:'HR Manager'},
      scene:'收到 offer 后，你和 HR 礼貌地沟通薪资期望。',
      goal:'有理有据地提出期望薪资并达成一致。',
      vocab:[{en:'offer',zh:'录用通知'},{en:'salary expectation',zh:'薪资期望'},{en:'market rate',zh:'市场水平'},{en:'compensation',zh:'薪酬'}],
      lines:[
        {n:"We'd love to extend you an offer. What are your salary expectations?", nz:"我们很想录用你，你的薪资期望是多少？",
         opts:[
           {e:"Based on my experience and market rates, I'm targeting 12 to 14k.", z:"结合经验和市场水平，我期望 12 到 14k。", ok:true},
           {e:"As much as possible.", z:"越多越好。", hint:"给区间、给依据，比单纯喊高价更有说服力。"},
           {e:"I'll take whatever you give.", z:"给多少要多少。", hint:"提前调研市场水平，给出合理区间。"}
         ]},
        {n:"Our budget for this role is a bit lower, around 10k.", nz:"这个岗位的预算稍低，大约 10k。",
         opts:[
           {e:"I understand. Could we meet halfway at 12k, based on my internship results?", z:"理解，基于我的实习成果，能折中到 12k 吗？", ok:true},
           {e:"Then I'm leaving, goodbye forever.", z:"那我走了，永别。", hint:"保持礼貌，用价值说话，寻求折中。"},
           {e:"10k is a big number, okay.", z:"10k 是个大数字，行吧。", hint:"别立刻接受，也别翻脸，可以礼貌协商。"}
         ]},
        {n:"12k might be possible with a performance review after three months.", nz:"12k 有可能，但需要三个月后做绩效评估。",
         opts:[
           {e:"That sounds fair. Could we put that review in writing?", z:"合理，能把这项评估写进合同吗？", ok:true},
           {e:"I don't trust writing.", z:"我不相信白纸黑字。", hint:"口头承诺最好落实到书面。"},
           {e:"Review me every day.", z:"每天评估我吧。", hint:"确认机制，并争取书面保障。"}
         ]},
        {n:"We can do that. Besides base pay, we offer a yearly bonus and meal allowance.", nz:"可以。除基本工资外，我们还有年终奖和餐补。",
         opts:[
           {e:"That's good to know. How is the yearly bonus determined?", z:"了解了，年终奖是怎么评定的？", ok:true},
           {e:"Allowance of meals? Delicious.", z:"餐补？好吃。", hint:"综合考虑总包：基本工资、奖金、补贴。"},
           {e:"I only care about base pay.", z:"我只在乎基本工资。", hint:"问清奖金和补贴规则，算清总包。"}
         ]},
        {n:"It's tied to both company and personal performance. Shall we send over the final offer today?", nz:"和公司及个人绩效挂钩。我们今天发正式 offer 给你？",
         opts:[
           {e:"Yes, please. I'm excited about the opportunity — thank you!", z:"好的，我很期待这个机会，谢谢！", ok:true},
           {e:"Send it to my dreams.", z:"发到我梦里吧。", hint:"达成一致后积极确认并道谢。"},
           {e:"Let me think for ten years.", z:"让我想十年。", hint:"满意就确认接收，并表达期待。"}
         ]}
      ]
    },
    {
      id:'work4', type:'vocab', icon:'👾', title:'Workplace Boss Battle', titleZh:'职场 BOSS 战',
      bossEmoji:'👾', bossName:'Deadline Dragon',
      intro:'击败截止日期巨龙，掌握职场核心词汇！',
      questions:[
        {t:'match', word:'strength', zh:'优势/长处', options:['弱点','优势','压力','任务']},
        {t:'listen', word:'deadline', zh:'截止日期', options:['截止日期','时间线','日程表','会议纪要']},
        {t:'cloze', sentence:"Overall, the project is ___ track.", answer:'on', options:['on','in','at','by']},
        {t:'match', word:'compensation', zh:'薪酬', options:['补偿/薪酬','竞争','能力','同事']},
        {t:'cloze', sentence:'I am a fast ___ and a team player.', answer:'learner', options:['learner','teacher','listener','leader']},
        {t:'listen', word:'bottleneck', zh:'瓶颈', options:['瓶底','瓶颈','瓶盖','瓶口']}
      ]
    }
  ]
},

/* ================= 世界 6：社交日常 ================= */
{
  id:'social', name:'Social & Everyday', nameZh:'社交日常', icon:'🎉',
  gradient:'linear-gradient(135deg,#ef7d4d,#ffb27d)',
  missions:[
    {
      id:'social1', type:'dialogue', icon:'🏘️', title:'Meeting a Neighbor', titleZh:'认识新邻居',
      npc:{emoji:'🧑‍🦱', name:'New Neighbor'},
      scene:'搬家当天，你在楼道遇到同层的新邻居，主动打招呼。',
      goal:'自然地自我介绍、寒暄并留下联系方式。',
      vocab:[{en:'move in',zh:'搬入'},{en:'next door',zh:'隔壁'},{en:'nice to meet you',zh:'很高兴认识你'},{en:'hang out',zh:'一起玩'}],
      lines:[
        {n:"Oh, hi! Are you the person who just moved in?", nz:"嗨！你就是刚搬来的人吧？",
         opts:[
           {e:"Yes, I just moved in next door today!", z:"对，我今天刚搬到隔壁！", ok:true},
           {e:"No, I have lived here for 100 years.", z:"不，我在这住一百年了。", hint:"大方承认并回应寒暄。"},
           {e:"Who is asking?", z:"谁在问？", hint:"友好回应，说明自己是新邻居。"}
         ]},
        {n:"Welcome to the building! I'm Sam, I live in 805.", nz:"欢迎！我是山姆，住 805。",
         opts:[
           {e:"Nice to meet you, Sam! I'm Chris, in 806.", z:"很高兴认识你，山姆！我是 806 的克里斯。", ok:true},
           {e:"805 is a number.", z:"805 是个数字。", hint:"自我介绍名字和房号：Nice to meet you."},
           {e:"I know who you are already.", z:"我已经知道你是谁了。", hint:"礼貌地自我介绍。"}
         ]},
        {n:"So where are you from originally?", nz:"你老家是哪里的？",
         opts:[
           {e:"I'm from Shanghai, but I moved here for university.", z:"我来自上海，来这边上大学。", ok:true},
           {e:"I am from the past.", z:"我来自过去。", hint:"自然回答来自哪里、为何来这里。"},
           {e:"Originally? I don't remember.", z:"最初？我不记得了。", hint:"简单介绍家乡和来意即可。"}
         ]},
        {n:"Cool! If you need anything — Wi-Fi tips, good cafés nearby — just knock.", nz:"不错！需要什么——Wi-Fi 建议、附近好咖啡馆——敲门就行。",
         opts:[
           {e:"That's so kind of you! I might take you up on that.", z:"你太好了！说不定真要麻烦你。", ok:true},
           {e:"I need everything right now.", z:"我现在什么都需要。", hint:"表达感谢，接受这份善意。"},
           {e:"I don't knock.", z:"我不敲门。", hint:"友好感谢对方的好意。"}
         ]},
        {n:"Anytime! Let's exchange contacts, maybe we can hang out sometime.", nz:"随时！我们加个联系方式吧，有空一起玩。",
         opts:[
           {e:"Sounds great! Let me add you on WeChat.", z:"太好了！我加你微信吧。", ok:true},
           {e:"Contacts are scary.", z:"联系方式很可怕。", hint:"交换社交账号，友好收尾。"},
           {e:"Let's hang out in ten years.", z:"十年后再一起玩。", hint:"积极回应邀约并交换联系方式。"}
         ]}
      ]
    },
    {
      id:'social2', type:'dialogue', icon:'📩', title:'Inviting Friends', titleZh:'邀请朋友',
      npc:{emoji:'👯', name:'Classmate'},
      scene:'周末你想约同学一起看电影，用英语发出邀请。',
      goal:'发出邀请、敲定时间地点并确认见面方式。',
      vocab:[{en:'be up to',zh:'打算做'},{en:'free',zh:'有空'},{en:'catch a movie',zh:'看场电影'},{en:'pick you up',zh:'去接你'}],
      lines:[
        {n:"Hey! What are you up to this weekend?", nz:"嘿！这周末打算干嘛？",
         opts:[
           {e:"Not much. Are you free on Saturday afternoon?", z:"没什么安排，你周六下午有空吗？", ok:true},
           {e:"I am up to my neck.", z:"我忙得不可开交。", hint:"先问对方是否有空，再发出邀请。"},
           {e:"Weekends are a concept.", z:"周末是个概念。", hint:"用 Are you free...? 询问对方时间。"}
         ]},
        {n:"I think so, why? What's on your mind?", nz:"应该有空，怎么了？有什么想法？",
         opts:[
           {e:"Want to catch a movie together? A new comedy is out.", z:"想一起看场电影吗？新上了一部喜剧。", ok:true},
           {e:"Let's rob a bank.", z:"我们抢银行吧。", hint:"清晰发出邀请并说明活动内容。"},
           {e:"My mind is empty.", z:"我大脑一片空白。", hint:"提出具体活动建议。"}
         ]},
        {n:"Sounds fun! Which showing were you thinking?", nz:"听起来不错！你想看哪一场？",
         opts:[
           {e:"The 4 p.m. showing at the mall cinema works best for me.", z:"商场影院下午四点那场最合适。", ok:true},
           {e:"A showing of movies.", z:"一场电影。", hint:"提出具体场次和地点。"},
           {e:"Whichever showing exists.", z:"随便哪场存在的。", hint:"给出具体时间和影院。"}
         ]},
        {n:"4 p.m. is perfect. Want to grab a bite before it?", nz:"四点正好，看之前要不要先吃点东西？",
         opts:[
           {e:"Sure! Let's meet at the food court around 2:30.", z:"好呀，两点半在美食广场见吧。", ok:true},
           {e:"I bite food, not grab it.", z:"我咬食物，不抓食物。", hint:"敲定集合时间地点。"},
           {e:"Before it is a time.", z:"电影之前是个时间。", hint:"确认提前吃饭的安排和集合点。"}
         ]},
        {n:"Deal! I'll see you Saturday at 2:30 then.", nz:"说定了！那周六两点半见。",
         opts:[
           {e:"It's a plan! I can pick you up at the dorm gate if you like.", z:"就这么定！需要的话我到宿舍门口接你。", ok:true},
           {e:"See you in another life.", z:"下辈子见。", hint:"确认约定，并可提出接送等贴心安排。"},
           {e:"I will forget this.", z:"我会忘的。", hint:"复述时间地点确认，友好收尾。"}
         ]}
      ]
    },
    {
      id:'social3', type:'dialogue', icon:'💬', title:'Small Talk', titleZh:'破冰闲聊',
      npc:{emoji:'🧑‍🎓', name:'Classmate'},
      scene:'课前你和不太熟的同班同学闲聊，练习破冰话题。',
      goal:'自然开启话题、回应对方并礼貌结束。',
      vocab:[{en:'how is it going',zh:'最近怎么样'},{en:'assignment',zh:'作业'},{en:'by the way',zh:'顺便说'},{en:'see you around',zh:'回头见'}],
      lines:[
        {n:"Hey! How's it going?", nz:"嘿！最近怎么样？",
         opts:[
           {e:"Pretty good, thanks! Just a bit swamped with assignments.", z:"挺好的，就是作业有点多。", ok:true},
           {e:"It is going somewhere.", z:"它正在去某个地方。", hint:"回应寒暄并自然引出话题。"},
           {e:"How is what going?", z:"什么东西在走？", hint:"How's it going? 回答近况即可。"}
         ]},
        {n:"Tell me about it. Did you finish the reading for today's class?", nz:"可不是嘛，今天课的阅读你完成了吗？",
         opts:[
           {e:"I did last night. It was longer than I expected!", z:"昨晚完成了，比我想的要长！", ok:true},
           {e:"Reading is for eyes.", z:"阅读是给眼睛用的。", hint:"回答完成情况并分享感受。"},
           {e:"I finished reading life.", z:"我读完了人生。", hint:"如实回答作业进度。"}
         ]},
        {n:"Right? By the way, what's your major again?", nz:"对吧！对了，你是什么专业来着？",
         opts:[
           {e:"I major in computer science, minor in design.", z:"我主修计算机，辅修设计。", ok:true},
           {e:"My major is major.", z:"我的专业是专业。", hint:"说明专业，也可反问对方。"},
           {e:"I major in sleeping.", z:"我主修睡觉。", hint:"认真回答专业问题。"}
         ]},
        {n:"Nice! I'm in business school. Do you enjoy the courses?", nz:"不错！我是商学院的，你喜欢你的课吗？",
         opts:[
           {e:"Mostly yes, especially the coding projects. How about you?", z:"挺喜欢的，尤其是编程项目，你呢？", ok:true},
           {e:"Courses enjoy me.", z:"是课程喜欢我。", hint:"分享感受并把话题抛回给对方。"},
           {e:"I endure them.", z:"我忍受它们。", hint:"积极回应并反问，让对话继续。"}
         ]},
        {n:"Same here. Oh, the professor's walking in — let's catch up later!", nz:"我也是。教授来了，我们回头再聊！",
         opts:[
           {e:"Sure thing! See you after class.", z:"好！下课见。", ok:true},
           {e:"Let's keep talking forever.", z:"我们永远聊下去。", hint:"配合结束对话，礼貌道别。"},
           {e:"Who is the professor?", z:"教授是谁？", hint:"上课了，简短道别即可。"}
         ]}
      ]
    },
    {
      id:'social4', type:'vocab', icon:'👾', title:'Social Boss Battle', titleZh:'社交 BOSS 战',
      bossEmoji:'👾', bossName:'Shy Sprite',
      intro:'击败害羞小精灵，社交词汇大通关！',
      questions:[
        {t:'match', word:'hang out', zh:'一起玩/闲逛', options:['一起玩','挂断电话','挂衣服','出门跑步']},
        {t:'listen', word:'free', zh:'有空的', options:['免费的/有空的','忙碌的','疲惫的','迟到的']},
        {t:'cloze', sentence:'What are you ___ to this weekend?', answer:'up', options:['up','on','in','off']},
        {t:'match', word:'assignment', zh:'作业/任务', options:['约会','作业','社团','学费']},
        {t:'cloze', sentence:'___ the way, what is your major?', answer:'By', options:['By','On','In','At']},
        {t:'listen', word:'see you around', zh:'回头见', options:['回头见','四处看看','围着你转','再见不到']}
      ]
    }
  ]
}
  ]
};
