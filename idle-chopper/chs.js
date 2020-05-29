/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //原路返回
        'WoodMulti:': '木头加成：',
    'WoodMulti': '木头加成',
    'Automatic Levelprogression:': '自动等级进展:',
    'Automatic Tree Chopping': '自动砍树',
    'Upgrades the axe of your helpers so they can chuck better trees': '升级助手的斧头，这样他们就可以砍掉更好的树木了',
    'After you chopped the boss, you can go to the next level, where the trees are harder but give more wood': '当你砍倒boss之后，你可以去到下一等级，那里的树木更坚硬，但你会得到更多木头。',
    'Amount of trees that spawn on start of a new level': '新的等级开始时生成的树木数量',
    'AutoChop': '自动砍伐',
    'AutoChop Multiplier': '自动砍伐倍数',
    'Chop a certain amount of trees to let the boss spawn in the middle of the map': '砍伐一定数量的树，让boss在出现在地图中央',
    'Chop Helper': '砍树助手',
    'Chop Speed': '砍伐速度',
    'Chop Strength': '砍伐力度',
    'The amount of Infinikeys you have, every tree adds +100% levelprogression per key. Also you can use them for something...': '你拥有的无尽钥匙数量，每个钥匙为每棵树增加100%等级进度，你也可以用它来做些什么...',
    'The amount of soulseeds you have, Use it to buy special upgrades, like bots': '你拥有的灵魂种子数量，用它来购买特殊的升级，比如机器人',
    'The amount of wood you have, Use it to upgrade your character and skills': '你拥有的木头数量，用它来升级你的角色和技能',
    'You stomp the ground while walking, which removes the grass so you can walk faster': '你在行走的时候踩踏地面，这会移除草皮，使你走得更快',
    'All your upgrades will reset. And you will be in level 0 again. You will keep your achievements and character upgrades. Are you sure to reset?': '你的所有升级将会重置，并且你会回到第0级。你会保留你的成就和角色升级，确定要重置吗？',
    'After finishing a level you get exp equal to the current level (level 10 > +10xp, level 11 > +11xp etc)': '当你完成一个等级，你会得到等价于当前等级数的经验（10级 > +10经验，11级 > +11经验 依此类推）',
    'By chopping a tree, a percentage of the damage gets also applied to all other trees': '砍一棵树的时候，也会对其他的所有树造成百分比的当前伤害。',
    'Are you sure? You will go back to level 0 (but keep all your upgrades)': '你确定吗？你会回到第0级（但会保留你的升级）',
    'Multiplies the damage you do to all other trees while fall is active': '当秋天激活时，倍增你对其他所有树木造成的伤害。',
    'Makes your current level of autospring available for every character': '使你当前的自动春天等级对所有角色可用。',
    'Multiplies damage done to all other trees while fall is active': '当秋天激活时，倍增对其他所有树木的伤害',
    'Gives Brutes Chop Strength Multiplier to every other character': '使Brutes的砍伐力度倍数作用于所有角色',
    'Multiplies Chop strength and Bots Chop Strength for some time': '一段时间内倍增砍伐力度和机器人砍伐力度',
    'Gives Swaplings Bots Strength Multiplier to every other character': '使Swaplings机器人的力度倍数作用于每个角色',
    'Multiplies walk speed and chop speed while haste is active': '当急速激活时，倍增你的行走速度和砍伐速度',
    'Multiplies the expierience you get after finishing a level': '倍增你完成一个等级之后获得的经验',
    'Multiplies the amount of wood you get from chopping trees': '倍增你从砍伐树木中获得的木头数量',
    'Gives Dessys Critical Multiplier to every other character': '使Dessys的暴击倍数作用于所有角色',
    'Are you sure? All of your progress will be lost forever.': '你确定吗？你所有的进度将会永远丢失',
    'Multiplies the wood of new spawned trees for some time': '一段时间内倍增新生成的树木的木头数量',
    'Gives Alaxes Rage Multiplier to every other character': '使Alaxes的愤怒倍数作用于所有角色',
    'Walk over a grass tile so often that it becomes dirt': '频繁地从一片草地走过，使其变成泥土。',
    'Makes pilz level skip available for every character': '使pilz的跳过等级技能对所有角色可用',
    'Upgrades your axe so you can chuck better trees': '升级你的斧头，使你可以砍更好的树。',
    'Multiplies chop strength while rage is active': '当愤怒激活时，倍增砍伐力度',
    'Multiplies the walkspeed of you and your bots': '倍增你和你的机器人的行走速度',
    'Like me on Facebook for 25% wood multiplier:': '在Facebook上关注我来获得25%的木头加成',
    'Multiplies wood amount while haste is active': '当haste激活时，倍增木头数量',
    'Increases the walking speed of your helpers': '提升你助手的行走速度',
    'Doubles Chop Strength of character and bots': '使角色和机器人的砍伐力度加倍',
    'Switch this if you have performance issues': '当你有性能问题时，开启这个',
    'Mutliplies the defence that the trees have': '倍增树木的防御',
    'Have 250 trees on the map at the same time': '地图上同时有250颗树',
    'Reach level 10 without buying any upgrades': '不购买任何升级达到10级',
    'Chop Strength x0.5; Bots Chop Strength x2': '砍伐力度 x0.5; 机器人砍伐力度 x2',
    'Have 50 trees on the map at the same time': '地图上同时有50颗树',
    'Unlocks the bots harvest strength upgrade': '解锁机器人收获强度升级',

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
    [/^You were gone for (\d+) Seconds.$/, '你离开了 $1 秒。'],
    [/^Amount of level (\d+) trees$/, '$1级树木的数量'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],
    [/^walkspeed: (\d+)%$/, '行走速度：$1%']

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
    for (let prefix in cnPrefix) {
        if (text.substr(0, prefix.length) === prefix) {
            text_prefix = cnPrefix[prefix];
            text = text.substr(prefix.length);
        }
    }
    //处理后缀
    let text_postfix = "";
    for (let postfix in cnPostfix) {
        if (text.substr(-postfix.length) === postfix) {
            text_postfix = cnPostfix[postfix];
            text = text.substr(0, text.length - postfix.length);
        }
    }
    //处理正则后缀
    let text_reg_exclude_postfix = "";
    for (let reg of cnExcludePostfix) {
        let result = text.match(reg);
        if (result) {
            text_reg_exclude_postfix = result[0];
            text = text.substr(0, text.length - text_reg_exclude_postfix.length);
        }
    }

    //检验字典是否可存
    if (!cnItems._OTHER_) cnItems._OTHER_ = [];

    //检查是否排除
    for (let reg of cnExcludeWhole) {
        if (reg.test(text)) {
            return text_prefix + text + text_reg_exclude_postfix + text_postfix;
        }
    }

    //尝试正则替换
    for (let [key, value] of cnRegReplace.entries()) {
        if (key.test(text)) {
            return text_prefix + text.replace(key, value) + text_reg_exclude_postfix + text_postfix;
        }
    }

    // 匹配字典
    if (cnItems[text]) {
        return text_prefix + cnItems[text] + text_reg_exclude_postfix + text_postfix;
    }

    //调整收录的词条，0=收录原文，1=收录去除前后缀的文本
    let save_cfg = 1;
    let save_text = save_cfg ? text : arguments[0]
    //遍历生词表是否收录
    for (
        let i = 0; i < cnItems._OTHER_.length; i++
    ) {
        //已收录则直接返回
        if (save_text == cnItems._OTHER_[i])
            return arguments[0];
    }

    if (cnItems._OTHER_.length < 500) {
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

document.createElement = function (name, opt) {
    if (name == 'canvas') {
        let canvasElement = document.__proto__.createElement.bind(this)(name, opt);
        canvasElement.getContext('2d').fillText = function (text, x, y, max) {
            return this.__proto__.fillText.bind(this)(cnItem(text), x, y, max);
        }
        canvasElement.getContext('2d').strokeText = function (text, x, y, max) {
            return this.__proto__.strokeText.bind(this)(cnItem(text), x, y, max);
        }
        canvasElement.getContext('2d').measureText = function (text) {
            return this.__proto__.measureText.bind(this)(cnItem(text));
        }
        return canvasElement;
    } else
        return document.__proto__.createElement.bind(this)(name, opt);
}
