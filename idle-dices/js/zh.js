console.log("加载汉化模块");

//1.汉化杂项
var cnItems = {
    _OTHER_: [],
    '-20%; Chip Multi': '-20%; 筹码加成',
    '(Change': '(改变',
    '(Change the order ': '(改变顺序',
    '(Space)': '(空格键)',
    '(Space) ': '(空格键) ',
    '[roll]': '[投掷]',
    '+1 max multiplier ': '+1 最大加成倍数 ',
    '+1 max multiplier dice': '+1 最大骰子加成倍数',
    '1st dice multiplier': '1号骰子加成',
    '1st dice multiplier ': '1号骰子加成 ',
    '2 BP': '2 BP',
    '2nd dice multiplier': '2号骰子加成',
    '2nd dice multiplier ': '2号骰子加成 ',
    '3rd dice multiplier': '3号骰子加成',
    '3rd dice multiplier ': '3号骰子加成 ',
    '4th dice multiplier': '4号骰子加成',
    '4th dice multiplier ': '4号骰子加成 ',
    '52 cards ': '52 纸牌 ',
    '5th dice multiplier': '5号骰子加成',
    '5th dice multiplier ': '5号骰子加成 ',
    'Achievements': '成就',
    'Active Playtime': '有效的游戏时间',
    'afford': '承受',
    'after': '之后',
    'After': '之后',
    'After each convert ': '每次转换后',
    'After each convert luck upgrades will be bought automatically in a chosen order': '每次转换后，运气升级将按选定的顺序自动购买',
    'airhorn': '气笛',
    'all': '全部',
    'All': '全部',
    'All Combo ': '所有组合 ',
    'All Combo Multiplier': '所有组合加成',
    'All Combo multipliers': '所有组合加成',
    'All dice': '所有骰子',
    'all dice ': '所有骰子',
    'All dice x3 multiplier': '所有骰子加成 x3',
    'andre onate': '安德烈奥尼亚特',
    'Animation': '动画',
    'Animation duration ': '动画持续时间',
    'Animation duration -20%; Chip Multi': '动画持续时间 -20%；筹码加成',
    'ascend': '转生',
    'Ascend': '转生',
    'ascend a dice, you ': '提升一个骰子，你',
    'ascension': '转生',
    'ascension +4% ': '转生 +4%',
    'Auto Ascend:': '自动转生',
    'Auto Convert:': '自动转换',
    'Auto Draw': '自动抽取',
    'Auto Draw Card:': '自动抽取纸牌',
    'Auto Draw:': '自动抽取：',
    'Auto Gild Card:': '自动镀金纸牌：',
    'Auto Gild:': '自动镀金：',
    'Auto Invest:': '自动投资：',
    'Auto Luck': '自动幸运',
    'Auto Roll': '自动投掷',
    'Auto Roulette Focus:': '自动对焦轮盘：',
    'Auto Roulette Prestige:': '自动轮盘声望：',
    'Auto Roulette Upgrade:': '自动轮盘升级：',
    'Auto Slot Spin:': '自动插槽旋转：',
    'Auto Spend Luck:': '自动支出运气：',
    'Auto Spin:': '自动轮盘：',
    'Auto Upgrade Interval': '自动升级间隔',
    'Auto Upgrade:': '自动升级：',
    'automatically': '自动',
    'Automatically': '自动',
    'automatically ': '自动 ',
    'Automatically ': '自动 ',
    'automatically after a ': '在之后自动',
    'Automatically convert when having 52 cards': '当拥有52张纸牌时自动转换',
    'automatically if you ': '自动的如果你',
    'automatically in a ': '自动的 在',
    'Automatically invest ': '自动投资 ',
    'Automatically invest when you have 52 golden cards': '当拥有52张金色纸牌时自动投资',
    'Automatically prestige the roulette': '自动声望轮盘赌',
    'Automatically set ': '自动设置 ',
    'Automatically set the focus to card on prestige': '用声望自动设置焦点到卡片',
    'Automatically spin ': '自动轮盘',
    'Save': '保存',
    'Buy': '购买',
    'buy': '购买',
    'Buy all': '购买全部',
    'Buy all Upgrades ': '购买全部升级 ',
    'Buy: ': '购买：',
    'can': '可以',
    'can afford it ': '可以负担得起 ',
    'changelog': '更新日志',
    'Changelog': '更新日志',
    'changelog (4/17) ': '更新日志 (4/17) ',
    'chips': '筹码',
    'chips ': '筹码 ',
    'Chip': '筹码',
    'Chip Multi': '筹码加成',
    'chosen': '选择',
    'chosen order ': '选择排序 ',
    'Collect': '收集',
    'Collect all kings ': '收集所有的王牌 ',
    'Collect all kings for x10000 multiplier for all dice': '收集所有的王牌，所有骰子将获得x10000的加成',
    'combo': '组合',
    'Combo': '组合',
    'Combo Increase': '组合提升',
    'combo multiplier ': '组合加成',
    'Combo multiplier ': '组合加成',
    'Combo Multiplier ': '组合加成',
    'Combo multiplier +50%': '组合加成 +50%',
    'Combo Multiplier +50%': '组合加成 +50%',
    'Normal': '正常',
    'numbers': '数字',
    'Auto Upgrade': '自动升级',
    'Chance': '几率',
    'damage': '伤害',
    'Export': '导出',
    'Forward': '向前',
    'Game Version': '游戏版本',
    'Get More': '获取更多',
    'Shop': '商店',
    'Yes': '是',
    'No': '否',
    'level': '等级',
    'Level': '等级',
    'Level +': '等级 +',
    'Loading..': '加载中..',
    'Locked': '未解锁',
    'Mage': '法师',
    'multi': '倍数',
    'Multi': '倍数',
    'displayed': '已显示',
    'FAST FORWARD!': '快进！',
    'Shorten Magnitude': '缩短幅度',
    'skill': '技能',
    'Skill Point Multi': '技能点倍数',
    'Skill Points Multi': '技能点倍数',
    'Skill Points': '技能点',
    'Sound Volume': '音量',
    'Sounds used': '使用的声音',
    'successful': '成功',
    'Straight Multiplier': '直接倍数',
    'Increases your card': '',
    'Hard Reset': '硬复位',
    'interval': '时间间隔',
    'Enable Screenshake': '启用屏幕震动',
    'Enabled': '已启用',
    'Enable Sound': '启动声音',
    'engineering': '工程',
    'Everytime': '每次',
    'Everytime you ascend a': '每次你转生一个',
    'Enable confirmation': '启用确认',
    'Dice multiplier per ascension': '每次转生提升的骰子倍数',
    'Casino City': '城市赌场',
    'Casino Country': '国家赌场',
    'Casinos': '赌场',
    'Casino Town': '小镇赌场',
    'An actual registered small casino': '实际注册的小型赌场',
    'Auto Ascend': '自动转生',
    'Auto Convert': '自动转换',
    'Auto Draw Card': '自动抽牌',
    'Auto Gild': '自动镀金',
    'Auto Gild Card': '自动镀金牌',
    'Auto Invest': '自动投资',
    'Auto Roulette Focus': '自动轮盘聚焦',
    'Auto Roulette Prestige': '自动轮盘声望',
    'Auto Roulette Upgrade': '自动轮盘升级',
    'Auto Slot Spin': '自动旋转插槽',
    'Auto Spend Luck': '自动花费幸运',
    'Auto Spin': '自动旋转',
    'AUTOMATICALLY': '自动地',
    'Buy all Upgrades (B': '购买所有升级（B',
    'Times Prestiged': '声望次数',
    'Total Decks': '总计整副牌',
    'Pair Multiplier': '一对 倍数',
    'Four Multiplier': '四连相同 倍数',
    'Two Pair Multiplier': '两对 倍数',
    'Triplet Multiplier': '三连 倍数',
    'Five Multiplier': '五连 倍数',
    'Straight Multiplier': '顺子 倍数',
    'Full House Multiplier': '满堂红 倍数',
    'Total Score': '总分',
    'Copy': '复制',
    'Close': '关闭',
    'Total Pair Combos': '总计对子组合',
    'Total Rolled': '总计投掷',
    'YOU': '你',
    'achievements': '成就',
    'achievement': '成就',
    'Add column': '添加列',
    'After each convert luck': '在每一次运气转换之后',
    'already': '已经',
    'Automatically convert when having': '拥有时自动转换',
    'automatically in a chosen order': '自动按选定的顺序',
    'Automatically invest when you': '自动投资当您',
    'Autoroll': '自动投掷',
    'Autoroll interval': '自动投掷时间间隔',
    'available': '可用',
    'Bonus Shop': '奖励商店',
    'BP available!': 'BP可用！',
    'Card available!': '纸牌可用！',
    'Card progress per Ascension': '',
    'Card': '纸牌',
    'Cardprogress /': '纸牌进度 /',
    'Import': '导入',
    'Epic': '史诗',
    'epic': '史诗',
    'Everytime you ascend a dice,': '每次你转生一个骰子，',
    'Everytime you ascend a dice, you get 1 progress to the next card': '每次你转生一个骰子，你得到1个进度到下一张牌',
    'Paste the savedata here and click load.': '将存档粘贴到这里，然后单击载入。',
    'Load': '载入',
    'Earn BP!': '赚取 BP!',
    'Chip': '筹码',
    'Chips': '筹码',
    'Chip multi per card': '每张牌筹码倍数',
    'Dia Cards': '方块纸牌',
    'House': '房子',
    'Only possible once per investment!': '每笔投资只能一次！',
    'PRESTIGE BUT KEEP': '声望但保留',
    'Quality': '质量',
    'Quick Match': '快速匹配',
    'Reshuffle': '重新洗牌',
    'common': '常见',
    'tutorial': '教程',
    'triggered': '已触发',
    'Total Prestige Multiplier': '累计声望倍数',
    'Total Five Combos': '累计五连',
    'Total Four Combos': '累计四连',
    'Total Triplet Combos': '累计三连',
    'Total Straight Combos': '累计顺子',
    'Total Two Pair Combos': '累计两对',
    'Total Full House Combos': '累计满堂红',
    'upgrades.': '升级.',
    'upgrading': '升级',
    'The whole universe filled with casinos': '整个宇宙都是赌场',
    'the upgrade': '升级',
    'The points of this dice': '骰子点数',
    'the order under cards': '根据牌的顺序',
    'the layout with it': '它的布局',
    'Free Spin': '自由旋转',
    'Free Stuff': '免费的东西',
    'George Street Shuffle': '乔治街洗牌',
    'Gild card': '镀金牌',
    'Gildings available': '镀金可用',
    'Golden Cards': '金色牌',
    'Golden cards persist': '金色牌持续',
    'Hit your focus next spin': '下一个旋转击中你的焦点',
    'import': '导入',
    'importing': '导入',
    'Just a normal dice': '只是一个普通的骰子',
    'KEEP': '保留',
    'Kevin MacLeod': '凯文·麦克劳德',
    'kings': '国王',
    'Layout': '布局',
    'Least Preferred': '最不看好',
    'level+': '等级+',
    'linear': '线性',
    'Luck': '幸运',
    'Luck kept after investment': '投资后运气保持',
    'Machine': '机器',
    'Join the discord channel for +10% 4th multiplier': '加入discord，获得+ 10％的第四倍数',
    'Prestige Multi': '声望倍数',
    'Prestige without reset': '非重置声望',
    'Rate the game on the playstore': '在playstore上给游戏打分',
    'Reset your upgrades (P': '重置你的升级 (P',
    'Reseting': '重置',
    'reseting': '重置',
    'Reseting is only possible': '重置是唯一可能的',
    'Reseting is only possible once per convert': '每次转换只能重置一次',
    'reseting your prestige.': '重置你的声望。',
    'point multi by': '点数倍数',
    'overlapping': '重叠',
    'Multiplier': '倍数',
    'multiplier': '倍数',
    'Multiplicative': '乘以',
    'MULTIPLIER': '倍数',
    'Merge all': '全部合并',
    'MAX': '最大',
    'Mars Casino': '三月赌场',
    'New Enemy': '新敌人',
    'Next Card': '下一张牌',
    'next Card': '下一张牌',
    'Next Daily Reward': '下个日常奖励',
    'None': '无',
    'none': '无',
    'Cards': '纸牌',
    'Draw Card': '抽牌',
    'Draw cards automatically': '自动抽牌',
    'Draw cards automatically (Change the order under cards': '自动抽牌(更改牌下的顺序)',
    'Dia Card Points': '方块纸牌牌点数',
    'Diamonds': '钻石',
    'Diamond': '钻石',
    'diamond': '钻石',
    'God of strategy': '战略之神',
    'Godlike': '超神',
    'goldcards': '金卡',
    'golden': '金色',
    'golden cards without': '金色纸牌没有',
    'Golden deck': '金色整副牌',
    'Every': '每',
    'every': '每',
    'Every 2 Dices in your': '每2个骰子在你的',
    'Every 2 Dices in your inventory of the same type and same level will be merged to the next level. If 2 D100 get merged, the resulting Dice will become a level 1 Dice again, with power multiplied by 10. This can lead to a weaker dice. (D100 -> D6 * 10 =': '你的库存中每2个相同类型和级别的骰子都将被合并到下一个级别。如果2个D100被合并，得到的骰子将再次变成1级骰子，幂乘以10。这可能导致一个较弱的骰子。(D100 -> D6 * 10 =',
    'everything': '一切',
    'everytime': '每次',
    'everytime you roll a': '每当你投掷一个',
    'Expert': '专家',
    'Expert Spinner': '专家转轮',
    'explaination': '解释',
    'Automatically prestige the': '自动声望',
    'Automatically set the focus to card': '自动将焦点设置到纸牌',
    'Automatically spin the slot': '自动旋转插槽',
    'Automatically spin the slot machine if you can afford it': '如果负担得起，自动旋转老虎机',
    'Automatically try to upgrade a': '自动尝试升级',
    'Automatically try to upgrade a dice or combo every few seconds': '每隔几秒钟自动尝试升级骰子或组合',
    'autoroll': '自动投掷',
    'Autoroll interval -': '自动投掷间隔 -',
    'autospin': '自动旋转',
    'Backdoor of pizza place': '比萨店的后门',
    'be merged to the next': '合并到下一个',
    'become': '成为',
    'Bet on': '下注',
    'Billionaire': '亿万富翁',
    'Chances': '几率',
    'chances': '几率',
    'Change': '改变',
    'change': '改变',
    'Duration': '持续时间',
    'duration': '持续时间',
    'duration -': '持续时间 -',
    'Equality': '平等',
    'export': '导出',
    'everytime you roll a combo': '每次你投掷出一个组合',
    'Fast': '快速',
    'fast': '快速',
    'exporting/importing': '导出/导入',
    'few': '很少',
    'Fidget Spinner': '指尖陀螺',
    'Fifth Dice': '第五个骰子',
    'First Dice': '第一个骰子',
    'First Steps': '第一步',
    'Five': '五',
    'Five Master': '五连大师',
    'Focus': '聚焦',
    'focus': '聚焦',
    'Focus on': '聚焦到',
    'Focus on Card': '聚焦到纸牌',
    'Focus the roulette automatically if': '自动聚焦轮盘如果',
    'Focus the roulette automatically if you can afford it': '自动聚焦轮盘如果你负担得起',
    'Advanced': '高级',
    'advanced': '高级',
    'after a investment': '投资后',
    'after prestiging': '声望后',
    'again': '再次',
    'All on one': '一对一',
    'Almost done': '快完成了',
    'about': '关于',
    'Addicted': '上瘾',
    'always': '经常',
    'Always winning': '总是赢',
    'amount': '数量',
    'Artificial Casino Galaxy': '人造银河赌场',
    'Artificial Casino Planet': '人造赌场星球',
    'Artificial Casino Star': '人造赌场明星',
    'ascending': '转生',
    'Ascension': '转生',
    'Ascension multiplier +': '转生倍数 +',
    'Ascension Multiplier +': '转生倍数 +',
    'Auto Prestige': '自动声望',
    'Auto': '自动',
    'auto': '自动',
    'autodraw': '自动抽牌',
    'autoluck': '自动幸运',
    'autogild': '自动镀金',
    'AUTOMATICALLY PRESTIGE BUT': '自动声望但',
    'available!': '可用!',
    'Avg. Offline Gain per Second': '每秒平均离线增益',
    'Basic': '基础',
    'Blackjack': '21点',
    'Black': '黑',
    'Bonus': '奖励',
    'bonus': '奖励',
    'bought': '已购买',
    'Buy 50 of every slot item': '每个老虎机项目购买50个',
    'buying': '购买',
    'buys': '购买',
    'buyamount': '购买量',
    'Envy': '羡慕',
    'Every card gives a powerful bonus!': '每张纸牌都有强大的奖励！',
    'Everytime you ascend dice you get': '每次你转生骰子，你都会得到',
    'exploit': '利用',
    'Fast Forward 10 minutes': '快进10分钟',
    'Faster!!': '更快！！',
    'Fifth': '第五个',
    'Focus Chance': '聚焦几率',
    'focus without spending': '免费聚焦',
    'Follow me on Kongregate for +10% 2nd multiplier': '在Kongregate上关注我，获得 +10％的第二倍数',
    'forgetting': '遗忘',
    'Fourth': '第四个',
    'Fourth Dice': '第四个骰子',
    'Free': '免费',
    'Fulfilment': '实现',
    'Full deck': '整副牌',
    'Full Hand': '满堂红',
    'Full House': '满堂红',
    'Full House Master': '满堂红大师',
    'Full Power': '全力以赴',
    'Getting Lazy': '变得懒惰',
    'Gild': '镀金',
    'Gild cards automatically (Change the order under cards': '自动给卡片镀金(更改卡片下面的顺序)',
    'Gildings per convert': '镀金每次转换',
    'God of Luck': '幸运之神',
    'golden cards without reseting': '金色纸牌没有重置',
    'Hexadecagonal Chips': '六角形筹码',
    'If you hit the same item in multiple columns, the reward gets multiplied by (item hits) power': '如果你在多个列中击中相同的物品，奖励将乘以(物品击中)能量',
    'If your roulette is at least level 34, you can reset it to level 1 and lose your chips + roulette upgrades. You will get Slot Machine Spins equal to your number of casinos /': '如果您的轮盘至少达到34级，则可以将其重置为1级，并失去筹码和轮盘升级。 您将获得与您的赌场数量相等的老虎机旋转次数/',
    'improved': '改善',
    'Increase the level of the roulette': '增加轮盘的等级',
    'Multiplies points of rolls': '乘以投掷点数',
    'Multiplies the prestige': '乘以声望',
    'Multiplies the prestige multiplier': '乘以声望倍数',
    'multipliers': '倍数',
    'mutliplier': '倍数',
    'Need more Names': '需要更多名称',
    'Name': '名称',
    'need to prestige your': '需要声望你的',
    'needed': '需要',
    'needing': '需要',
    'next card': '下一张牌',
    'Fill the slot machine layout completely with cup points': '用杯子点完全填充老虎机布局',
    'Fine, go double as far as it was ever intended': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    'Table under a bridge': '桥下的桌子',
    'Triplet': '三连',
    'Upgrade!!': '升级!!',
    'Upgrade': '升级',
    'Upgrades': '升级',
    'Use Engineering Notation': '使用工程符号',
    'Version': '版本',
    'Watch Ad': '看广告',
    'WIN!': '胜利!',
    'wrong with the save': '保存错误',
    'you can afford it': '你负担得起',
    'YOUR MULTIPLIER': '你的倍数',
    'YOUR': '你的',
    'YOU WILL AUTOMATICALLY': '您将自动',
    'you already unlocked, reach the requirement for it and refresh the game': '您已经解锁，达到要求并刷新游戏',
    'will multiply the total': '将乘以总数',
    'Welcome to the dice duels, where you battle other people to determine who is the best. Beat enemies to get more and better duel dice! (This is like a seperate game, your duel dice are not affected by any multipliers or prestige.': '欢迎来到骰子决斗，在这里你和其他人战斗，以决定谁是最好的。击败敌人获得更多更好的决斗骰子!(这就像一个单独的游戏，你的决斗骰子不受任何乘数或声望的影响。',
    '1st Dice Multiplier ': '1号骰子加成 ',
    '1st Dice Multiplier +10%': '1号骰子加成 +10%',
    '2nd Dice Multiplier ': '2号骰子加成 ',
    '2nd Dice Multiplier +20%': '2号骰子加成 +20%',
    '3rd Dice Multiplier ': '3号骰子加成 ',
    '3rd Dice Multiplier +30%': '3号骰子加成 +30%',
    '4th Dice Multiplier ': '4号骰子加成 ',
    '4th Dice Multiplier +40%': '4号骰子加成 +40%',
    '5th Dice': '5号骰子',
    '5th Dice Multiplier ': '5号骰子加成 ',
    '5th dice multiplier +50%': '5号骰子加成 +50%',
    '5th Dice Multiplier +50%': '5号骰子加成 +50%',
    '1st Dice': '1号骰子',
    '1st dice multiplier +10%': '1号骰子加成 +10%',
    '2nd Dice': '2号骰子',
    '2nd dice multiplier +20%': '2号骰子加成 +20%',
    '3rd Dice': '3号骰子',
    '3rd dice multiplier +30%': '3号骰子加成 +30%',
    '4th Dice': '4号骰子',
    '4th dice multiplier +40%': '4号骰子加成 +40%',
    'convert': '转换',
    'Convert': '转换',
    'Convert your deck to a golden card and your prestige multiplier to luck': '将你的整副牌转换为一张金卡，将你的声望倍数转换为运气',
    'Copy': '复制',
    'Credits': '鸣谢',
    'Current Prestige Score': '当前声望分数',
    'Daily Reward available!': '每日奖励可用!',
    'dice': '骰子',
    'dice ': '骰子 ',
    'Dice': '骰子',
    'Dice 1 Multi': '骰子1 加成',
    'Dice 2 Multi': '骰子2 加成',
    'Dice 3 Multi': '骰子3 加成',
    'Dice 4 Multi': '骰子4 加成',
    'Dice 5 Multi': '骰子5 加成',
    'Dice multiplier per ': '骰子加成每',
    'Dice multiplier per ascension +4%': '骰子加成每转生 +4%',
    'dice multiplier times ': '骰子加成次数',
    'dice will multiply the ': '骰子将会加成',
    'dice,': '骰子，',
    'roll': '掷骰子',
    'Roll': '掷骰子',
    'Settings': '设置',

}
//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    'Combomultiplier': '组合加成',
    "Combomultiplier ": "组合加成 ",
    "Level: ": "等级: ",
    "Rarity: ": "稀有度: ",
    "Multiplies points of rolls of ": "乘以投掷的点数关于",
    "All dice multiplier": "所有骰子倍数",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "\n": "",
    " dice multiplier": "倍数",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^(.+) Million$/, //纯空格
    /^changed: (.+)$/, //纯空格
    /^added: (.+)$/, //纯空格
    /^fixed: (.+)$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]


//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^Have (.+) casinos$/, '拥有 $1 赌场'],
    [/^Have (.+) golden cards$/, '拥有 $1 金色纸牌'],
    [/^Draw (.+) cards in one run$/, '在一轮游戏里抽 $1 张牌'],
    [/^Draw (.+) Aces in one run$/, '在一轮游戏里抽 $1 张A'],
    [/^Draw (.+) Junkers in one run$/, '在一轮游戏里抽 $1 张J'],
    [/^Draw (.+) Kings in one run$/, '在一轮游戏里抽 $1 张K'],
    [/^Draw (.+) Queens in one run$/, '在一轮游戏里抽 $1 张Q'],
    [/^Gives (.+) Diamonds$/, '给 $1 钻石'],
    [/^Draw (\d+) (\d+)s in one run$/, '在一轮游戏里抽 $2次 $1'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);

//2.采集新词
//20190320@JAR

var cnItem = function () {

    //传参是否非空字串
    if (!arguments[0]) return;

    //检验传参是否对象
    let text = arguments[0],
        s = '';
    if (typeof (text) != "string")
        return text;
    else
        s = arguments[0].charCodeAt();

    //检验传参是否英文
    // if (
    //     s < 65 || (s > 90 && s < 97) || (s > 122)
    //
    // ) return text;

    //处理前缀
    let text_prefix = "";
    for(let prefix in cnPrefix){
        if (text.substr(0,prefix.length) === prefix){
            text_prefix = cnPrefix[prefix];
            text = text.substr(prefix.length);
        }
    }
    //处理后缀
    let text_postfix = "";
    for(let postfix in cnPostfix){
        if (text.substr(-postfix.length) === postfix){
            text_postfix = cnPostfix[postfix];
            text = text.substr(0,text.length-postfix.length);
        }
    }
    //处理正则后缀
    let text_reg_exclude_postfix = "";
    for(let reg of cnExcludePostfix){
        let result = text.match(reg);
        if (result){
            text_reg_exclude_postfix = result[0];
            text = text.substr(0, text.length-text_reg_exclude_postfix.length);
        }
    }

    //检验字典是否可存
    if (!cnItems._OTHER_) cnItems._OTHER_ = [];

    //检查是否排除
    for(let reg of cnExcludeWhole){
        if (reg.test(text)){
            return text_prefix + text + text_reg_exclude_postfix + text_postfix;
        }
    }
    
    //尝试正则替换
    for (let [key, value] of cnRegReplace.entries()) {
        if (key.test(text)) {
            return text_prefix + text.replace(key, value) + text_reg_exclude_postfix + text_postfix;
        }
    }

    //遍历尝试匹配
    for (let i in cnItems) {
        //字典已有词汇或译文、且译文不为空，则返回译文
        if (
            text == i || text == cnItems[i] &&
            cnItems[i] != ''
        )
            return text_prefix + cnItems[i] + text_reg_exclude_postfix + text_postfix;
    }

    //调整收录的词条，0=收录原文，1=收录去除前后缀的文本
    let save_cfg = 1;
    let save_text = save_cfg?text:arguments[0]
    //遍历生词表是否收录
    for (
        let i = 0; i < cnItems._OTHER_.length; i++
    ) {
        //已收录则直接返回
        if (save_text == cnItems._OTHER_[i])
            return arguments[0];
    }

    if (cnItems._OTHER_.length < 3000){
        //未收录则保存
        cnItems._OTHER_.push(save_text);
        cnItems._OTHER_.sort(
            function (a, b) {
                return a.localeCompare(b)
            }
        );
    }

    /*
        //开启生词打印
        //console.log(
            '有需要汉化的英文：', text
        );
    */

    //返回生词字串
    return arguments[0];
};

document.createElement = function(name,opt){
	if(name=='canvas'){
		let canvasElement = document.__proto__.createElement.bind(this)(name,opt);
		canvasElement.getContext('2d').fillText = function(text,x,y,max){
			return this.__proto__.fillText.bind(this)(cnItem(text),x,y,max);
		}
		canvasElement.getContext('2d').strokeText = function(text,x,y,max){
			return this.__proto__.strokeText.bind(this)(cnItem(text),x,y,max);
		}
		canvasElement.getContext('2d').measureText = function(text){
			return this.__proto__.measureText.bind(this)(cnItem(text));
		}
		return canvasElement;
	}
	else
		return document.__proto__.createElement.bind(this)(name,opt);
}