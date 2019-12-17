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
    //原路返回


}

//需处理的前缀
var cnPrefix = {
}

//需处理的后缀
var cnPostfix = {
    ' ':' '
}

//需排除的，正则匹配
var cnExcludeWhole= [
    /^[x+\-]?\d+(\.\d+)?(e[+\-]?\d+)?(\%)?\s*$/,                                          //12.34e+4
    /^\s*$/,                                                                //纯空格
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/,                                          //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/,  //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
var cnRegReplace = new Map([
	[/^You were gone for (\d+) Seconds.$/, '你离开了 $1 秒。'],
	[/^Amount of level (\d+) trees$/, '$1级树木的数量'],
	[/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
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

    if (cnItems._OTHER_.length < 500){
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
