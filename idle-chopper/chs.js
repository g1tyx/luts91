console.log("加载汉化模块");

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    'Loading..': '加载中..',
    'Version:': '版本:',
    'Crit Chance': '暴击几率',
    'Crit Damage': '暴击伤害',
    'You stomp the ground': '你踩到了地面',
    'you can chuck better': '你可以扔得更好',
    'You chop trees': '你砍树',
    'You chop trees automaticly after one manual click': '只需手动点击一下，就可以自动砍树',
    'you have, Use it to': '你有，用它来',
    'Your helpers stomp': '你的助手跺脚',
    'your helpers so they': '你的助手,所以他们',
    'Your helpers stomp the ground while walking, which removes the grass so you can walk faster': '你的助手在走路的时候跺着地面，这样可以去除草坪，让你走得更快',
    'WoodMulti:': '木头加成：',
    'WoodMulti': '木头加成',
    'Amount of level': '数量关于等级',
    'Amount': '数量',
    'amount': '数量',
    'Automatic': '自动',
    'Automatic Levelprogression:': '自动等级进展:',
    'Automatic Tree Chopping': '自动砍树',
    'automatically': '自动',
    'axe:': '斧子',
    'axe': '斧子',
    'Axe': '斧子',
    'Chop': '砍',
    'Damage': '伤害',
    'Export': '导出',
    'helpers': '助手',
    'Import': '导入',
    'Increases': '增加',
    'Increases the strength': '力量',
    'Increases the walking': '提升移动',
    'Increases the walking speed of your helpers': '提高助手的移动速度',
    'Increases your': '提升你的',
    'Increases your walking speed': '提升你的移动速度',
    'Level': '等级',
    'level': '等级',
    'success': '成功',
    'Upgrades': '升级',
    'upgrade': '升级',
    'Upgrades the axe of your helpers so they can chuck better trees': '升级助手的斧头，这样他们就可以砍掉更好的树木了',
    'Use': '使用',
    'use': '使用',
    'Walk Speed': '移动速度',
    'Settings': '设置',
    'Seeds': '种子',
    'Reset': '重置',
    'Reset Bots': '重置机器人',
    'Restart):': '重启):',
    'Save': '存档',
    'screen': '屏幕',
    'Size': '大小',
    'Skills': '技能',
    'skills': '技能',
    'something...': '一些东西...',
    'max': '最大',
    'Multiplier': '倍数',
    'multiplier': '倍数',
    'Multiplies': '倍数',
    'Multiplies damage': '伤害倍数',
    'Multiplies walk speed': '移动速度倍数',
    'Multiplies walk Speed': '移动速度倍数',
    'Spring': '春天',
    'start': '开始',
    'new level': '新等级',
    'Next': '下一个',
    'next': '下一个',
    'Next Level': '下一级',
    'none': '无',
    'other': '其它',
    'Rage': '怒气',
    'active': '',
    'adds': '',
    'adds +100%': '',
    'After you chopped the boss, you can go to the next level, where the trees are harder but give more wood': '当你砍倒了boss之后，你可以去到下一等级，那里的树更坚硬，但是会给你更多木头',
    'all other trees while fall': '',
    'Amount of trees that spawn on start of a new level': '在新等级的地图生成的树的数量',
    'applied to all other trees': '',
    'are': '',
    'AutoChop': '',
    'AutoChop Multiplier': '',
    'automaticly': '',
    'automaticly after one': '',
    'BaseDef': '',
    'BaseDef:': '',
    'better': '',
    'bird': '',
    'boss': '',
    'boss,': '',
    'boss, you can go to the': '',
    'Boss:1/': '',
    'bots': '',
    'Bots': '',
    'Bots Chop Strength for': '',
    'but': '',
    'button': '',
    'buy': '',
    'By chopping a tree, a percentage of the damage gets also applied to all other trees': '砍树的时候，其他树也会受到一定百分比的伤害。',
    'can': '',
    'can chuck better trees': '',
    'certain': '',
    'Chance': '',
    'Chance to do a critical': '',
    'Chance to do a critical hit': '',
    'character': '',
    'chop': '',
    'Chop a certain amount of trees to let the boss spawn in the middle of the map': '砍倒一定数量的树，让boss出现在地图的中央',
    'Chop Helper': '',
    'Chop Speed': '',
    'Chop Speed of you and': '',
    'chop speed while': '',
    'Chop Strength': '',
    'chopped': '',
    'chopping': '',
    'Chopping': '',
    'chuck': '',
    'chuck better trees': '',
    'click': '',
    'Convert': '',
    'Convert a soulseed to': '',
    'Convert a soulseed to wood': '',
    'converted': '',
    'converted to': '',
    'Crit': '',
    'critical': '',
    'crow': '',
    'damage': '',
    'damage gets also': '',
    'Damage multiplier on a critical': '',
    'Damage multiplier on a critical hit': '',
    'defence': '',
    'desertwind': '',
    'do': '',
    'done': '',
    'drop': '',
    'each': '',
    'each hit': '',
    'each hit of your helpers': '',
    'every': '',
    'fall': '',
    'Fall': '',
    'Fall Duration': '',
    'Fall is active longer': '',
    'Fall Power': '',
    'faster': '',
    'Fertilize': '',
    'Fertilize Duration': '',
    'Fertilize is active': '',
    'Fertilize is active longer': '',
    'Fertilize Power': '',
    'for': '',
    'frequent': '',
    'get': '',
    'gets': '',
    'give': '',
    'give more wood': '',
    'go': '',
    'grass': '',
    'grass so you can walk': '',
    'ground': '',
    'ground while walking,': '',
    'harder': '',
    'haste': '',
    'Haste': '',
    'Haste Duration': '',
    'haste is active': '',
    'Haste is active longer': '',
    'Haste Power': '',
    'have': '',
    'have,': '',
    'have, Use it to upgrade': '',
    'hello': '',
    'helpers so they can': '',
    'Helps': '',
    'Helps you chop wood': '',
    'Helps you chop wood automatically': '',
    'hit': '',
    'How': '',
    'How much wood a': '',
    'How much wood a soolseed gets converted to': '',
    'if': '',
    'in': '',
    'Increases the strength of': '',
    'Increases the strength of each hit': '',
    'Increases the strength of each hit of your helpers': '',
    'Increases your walking': '',
    'Infinikeys': '',
    'ingame': '',
    'Initial Tree amount': '',
    'insects': '',
    'is': '',
    'is active': '',
    'it': '',
    'key.': '',
    'key. Also you can use': '',
    'let': '',
    'Level 1 Tree Amount': '',
    'Level 2 Tree Amount': '',
    'Level 3 Tree Amount': '',
    'Level 4 Tree Amount': '',
    'Level 5 Tree Amount': '',
    'Level 6 Tree Amount': '',
    'level,': '',
    'levelprogression': '',
    'levelprogression per': '',
    'levelup': '',
    'like': '',
    'longer': '',
    'manual': '',
    'manual click': '',
    'map': '',
    'Map Size': '',
    'middle': '',
    'monkey': '',
    'more': '',
    'much': '',
    'Multiplies chop strength': '',
    'Multiplies Chop strength and': '',
    'Multiplies Chop strength and Bots Chop Strength for some time': '',
    'Multiplies chop strength while rage is active': '',
    'Multiplies damage done to': '',
    'Multiplies damage done to all other trees while fall is active': '',
    'Multiplies the amount of trees': '',
    'Multiplies the amount of trees you can chop automatically': '',
    'Multiplies the wood of new': '',
    'Multiplies the wood of new spawned trees for some time': '',
    'Multiplies walk speed and': '',
    'Multiplies Walk Speed and': '',
    'Multiplies Walk Speed and Chop Speed of you and your bots for some time': '',
    'Multiplies walk speed and chop speed while haste is active': '',
    'Multiplies wood amount while': '',
    'Multiplies wood amount while haste is active': '',
    'Mutliplies': '',
    'Mutliplies the defence': '',
    'Mutliplies the defence that the trees have': '',
    'Mutliplies the wood': '',
    'Mutliplies the wood that the trees drop': '',
    'new': '',
    'next level, where the': '',
    'of': '',
    'of your helpers': '',
    'often': '',
    'on': '',
    'one': '',
    'per': '',
    'percentage': '',
    'percentage of the': '',
    'rage': '',
    'Rage Duration': '',
    'Rage is active longer': '',
    'Rage Power': '',
    'removes': '',
    'removes the grass so': '',
    'Size of the map': '',
    'snake': '',
    'so': '',
    'some': '',
    'some time': '',
    'soolseed': '',
    'soolseed gets': '',
    'Soul': '',
    'Soul Seeds drop more': '',
    'Soul Seeds drop more frequent': '',
    'soulseed': '',
    'Soulseed Drop Chance': '',
    'soulseeds': '',
    'spawn': '',
    'Spawn': '',
    'spawn in the middle of': '',
    'Spawn more trees': '',
    'Spawn new trees if': '',
    'Spawn new trees if there are none': '',
    'spawn on start of a': '',
    'spawned': '',
    'spawned trees for': '',
    'special': '',
    'special upgrades, like': '',
    'speed': '',
    'Speed': '',
    'speed of your helpers': '',
    'step': '',
    'stomp': '',
    'Stomping': '',
    'strength': '',
    'Strength': '',
    'Terraform': '',
    'text': '',
    'that': '',
    'that the trees drop': '',
    'that the trees have': '',
    'the': '',
    'The': '',
    'The amount of Infinikeys you have, every tree adds +100% levelprogression per key. Also you can use them for something...': '你拥有的无尽之匙的数量，每个无尽之匙为每棵树增加100%的等级进度，你也可以用它来做点什么...',
    'The amount of soulseeds you have, Use it to buy special upgrades, like bots': '你拥有的灵魂种子的数量，使用它来购买特殊升级，比如机器人',
    'The amount of wood you have, Use it to upgrade your character and skills': '你拥有的木头数量，使用它来升级你的角色和技能',
    'the map': '',
    'The wood chop speed': '',
    'The wood chop speed of your helpers': '',
    'there': '',
    'there are none': '',
    'they': '',
    'time': '',
    'to': '',
    'tree': '',
    'Tree': '',
    'Tree Spawn Interval': '',
    'tree,': '',
    'trees': '',
    'Trees': '',
    'trees are harder but': '',
    'Trees spawn more': '',
    'Trees spawn more often': '',
    'trees to let the boss': '',
    'ui': '界面',
    'Upgrades the axe of your': '',
    'Upgrades your axe so you': '',
    'Upgrades your axe so you can chuck better trees': '',
    'upgrades,': '',
    'Version: 1.': '',
    'walk': '走路',
    'Walk': '走路',
    'walking': '走路',
    'walking,': '走路',
    'walkspeed:': '行走速度',
    'where': '',
    'which': '',
    'which removes the': '',
    'while': '',
    'while rage is active': '',
    'while walking, which': '',
    'wood': '',
    'x:': '',
    'x: 4 y': '',
    'x: 5 y': '',
    'y:': '',
    'you': '',
    'You': '',
    'you can chop automatically': '',
    'you can walk faster': '',
    'you have, every tree': '',
    'you have, Use it to buy': '',
    'You stomp the ground while walking, which removes the grass so you can walk faster': '',
    'your': '',
    'Your': '',
    'your bots for some': '',
    'your character and': '',
    'Your helpers stomp the': '',
    '': '',
    //原路返回


}

//需处理的前缀
var cnPrefix = {}

//需处理的后缀
var cnPostfix = {
    ' ': ' '
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^[x+\-]?\d+(\.\d+)?(e[+\-]?\d+)?(\%)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
var cnRegReplace = new Map([
    [/^You were gone for (\d+) Seconds.$/, '你离开了 $1 秒。'],
    [/^Amount of level (\d+) trees$/, '$1级树木的数量'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],
    [/^walkspeed: 50%$/, '行走速度：$1'],


    // 'ui (5/34)': '',
    // 'text (1/34)': '',
    // 'step (19/34)': '',
    // 'success (21/34)': '',
    // 'snake (30/34)': '',
    // 'bird1 (22/34)': '',
    // 'bird2 (23/34)': '',
    // 'button (16/34)': '',
    // 'chop1 (2/34)': '',
    // 'chop11 (14/34)': '',
    // 'chop13 (15/34)': '',
    // 'chop2 (3/34)': '',
    // 'chop4 (6/34)': '',
    // 'chop5 (10/34)': '',
    // 'chop7 (9/34)': '',
    // 'chop8 (12/34)': '',
    // 'chop9 (13/34)': '',
    // 'crow1 (32/34)': '',
    // 'crow2 (24/34)': '',
    // 'desertwind (29/34)': '',
    // 'fall (18/34)': '',
    // 'get (20/34)': '',
    // 'levelup (28/34)': '',
    // 'ingame (7/34)': '',
    // 'insects (27/34)': '',
    // 'insects2 (33/34)': '',
    // 'monkey1 (26/34)': '',
    // 'monkey2 (25/34)': '',

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
