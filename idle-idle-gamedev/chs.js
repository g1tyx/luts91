/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Playtime': '游戏时长',
    'Shop': '商店',
    'Settings': '设置',
    'Skills': '技能',
    'Research': '研究',
    'Research all': '研究全部',
    'Researching Power': '研究力量',
    'Reset': '重置',
    'Shop Cost Multi': '商店成本倍数',
    'Statistics': '统计',
    'Upgrade +': '升级 +',
    'Upgrade': '升级',
    'Active Playtime': '在线游戏时间',
    'Achievements': '成就',
    'Auto Delete': '自动删除',
    'Basic': '基本',
    'Bank Account': '银行账户',
    'Buy': '购买',
    'button': '按钮',
    'Buy all': '全部购买',
    'Bonus': '奖励',
    'Copy': '复制',
    'Copy this and save it somewhere.': '复制此并将其保存在某处。',
    'Daily Reward': '日常奖励',
    'EXp Multi': '经验倍数',
    'EXP Multi': '经验倍数',
    'Export': '导出',
    'Font Loaded': '字体已加载',
    'Import': '导入',
    'Marketing Speed': '营销速度',
    'Marketing Power': '营销力量',
    'Making a name': '做个名字',
    'Get More': '获取更多',
    'Get your first fan': '得到你的第一个粉丝',
    'Get your games played 1 K times in total': '让您的游戏被玩的次数累计达到1000次',
    'Good Game': '好游戏',
    'Hard Reset': '硬复位',
    'Ideas': '想法',
    'Level': '等级',
    'Load': '加载',
    'My first game!': '我的第一个游戏！',
    'Pause on Load': '暂停加载',
    'Pause on Recursion': '暂停递归',
    'Tapper GameDev Miner': '点击游戏开发矿工',
    'Version': '版本',
    'Bonus Shop': '奖励商店',
    'Bonus Points': '奖励点',
    'Bugs': '错误',
    'Free Stuff': '免费的东西',
    'Learn to Code': '学习编码',
    'Learn to Count': '学习计数',
    'Logician': '逻辑学家',
    'Logic Exp Multi': '逻辑经验倍数',
    'Max. Retention': '最大保留',
    'Init.Players': '初始玩家',
    'Retention': '保留',
    'Tier': '层',
    'Think': '思考',
    'Ideas are needed to create game features': '创建游戏功能需要创意',
    'World Domination': '统治世界',
    'Wash your hair': '洗头发',
    'Unlocks Marketing': '解锁营销',
    'Unlocks Shop': '解锁商店',
    'Unlocks Features': '解锁功能',
    'Unlocks contracts': '解锁合同',
    'Unlocks butchering': '解锁屠宰',
    'Unlocks Bug fixing': '解锁错误修复',
    'Unlocks at level': '解锁等级',
    'Achievement Unlocked: I have an idea for a game': '成就解锁：我有一个游戏的想法',
    'Auto Release Threshold': '自动释放阈值',
    'Bug Fixing Power': '错误修复力量',
    'Bug Fixing Speed': '错误修复速度',
    'Enable Game Plot': '启用游戏情节',
    'Enable Music': '启用音乐',
    'Earn your first cent': '赚取你的第一分钱',
    'Done!': '完成！',
    'Dev': '开发',
    'Exp Multi': '经验倍数',
    'Features': '功能',
    'Fans': '粉丝',
    'Fan gain per player': '每位玩家获得粉丝',
    'Fan gain per hour': '每小时粉丝获得',
    'Fan Expectations': '粉丝预期',
    'Finally it pays out!': '最后它付出了代价！',
    'Power': '力量',
    'Program': '编程',
    'Program 2 features': '编程 2 个功能',
    'Quality': '质量',
    'Quality Game': '优质游戏',
    'Reach Charisma Level': '达到魅力等级',
    'Release': '发布',
    'Reward: Unlocks Features; 5 Bonus Points': '奖励：解锁功能; 5奖励点',
    'Logic Points': '逻辑点',
    'Logic': '逻辑',
    'Need more ideas!': '需要更多想法！',
    'Changelog': '更新日志',
    'Charisma Exp Multi': '魅力经验加成',
    'Contractor': '承包商',
    'Charismatic': '超凡魅力Creative',
    'Creative': '创意',
    'Creativity': '创造力',
    'Creativity Exp Multi': '创造力经验加成',
    'Creativity Points': '创意点',
    'Credits': '鸣谢',
    'Day': '天',
    'Enable Sound': '启用声音',
    'Feature Programming': '功能编程',
    'Bulk Thinking': '整体思维',
    'Disclaimer': '免责声明',
    'Donations': '捐赠',
    'Great Ideas': '伟大的想法',
    'Holiday': '假日',
    'Holiday Discount': '假日折扣',
    'Reach Logic Level': '达到逻辑级别',
    'Reach Creativity Level': '达到创造力水平',
    'Reach Intelligence Level': '达到智力水平',
    'Replayability': '可玩性',
    'Thinking Power': '思考力量',
    'Thinking Speed': '思考速度',
    'Total Ideas': '想法总数',
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
    '\n                               You got 1 Bonus Points! Come back tomorrow for more!                          ': '你得到1点奖励点！ 明天再来可以获得更多！',

    //原样
    '': '',
    '': '',

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
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
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
    [/^Cost: (\d+) Bonus Points$/, '成本: $1 奖励点'],
    [/^Get ([\d\.]+)(.+) fans$/, '获得 $1$2 粉丝'],
    [/^Have ([\d\.]+) money$/, '有 $1 钱'],
    [/^Level: (\d+) \/$/, '等级：$1 \/'],
    [/^(\d+) Money$/, '$1 钱'],
    [/^(\d+) Bonus Points$/, '$1 奖励点'],

]);