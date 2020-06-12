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
    'a': '一个',
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
    'Combomultiplier': '组合加成',
    'Combomultiplier ': '组合加成 ',
    'Combomultiplier +10%': '组合加成 +10%',
    'Combomultiplier +20%': '组合加成 +20%',
    'Combomultiplier +30%': '组合加成 +30%',
    '': '',
    '': '',
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
    'Convert your deck to a golden card and your prestige multiplier to luck': '将你的牌组转换为一张金卡，将你的声望倍数转换为运气',
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
}

//需处理的后缀
var cnPostfix = {

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