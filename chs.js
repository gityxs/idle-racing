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
    'Business exp': '商业经验',
    'Free': '免费',
    'Race': '比赛',
    'No sponsors': '无赞助商',
    'Home': '首页',
    'Garage': '车库',
    'go to Dealer': '前往经销商',
    'Dealer': '经销商',
    'Mechanic exp': '机械经验',
    'Race exp': '比赛经验',
    'IdleRacing': '赛车放置',
    'Compact': '紧凑型',
    'Family': '家庭',
    'Heavy': '重型',
    'Nascar': '纳斯卡',
    'No sponsor': '无赞助商',
    'Offroad': '越野车',
    'Prototype': '原型',
    'Racer': '赛车手',
    'Supercar': '超级跑车',
    'City': '城市',
    'BAD': '糟糕',
    'Basic': '基本',
    'Bought': '已购买',
    'Buy car slot': '买车位',
    'City Compact': '城市紧凑型',
    'Endurance': '续航',
    'EV Compact': 'EV紧凑型',
    'FREE': '免费',
    'Free no ups': '免费无UPS',
    'Free race': '免费比赛',
    'Free special': '免费特惠',
    'Free special no ups': '免费特惠无UPS',
    'Front-wheel-drive': '前轮驱动',
    'Garage Expanse': '车库扩建',
    'Garage Upgrades (Mechanics': '车库升级（机械师',
    'Lost': '失败',
    'Mechanic': '机械师',
    'Mechanics': '机械师',
    'Missing': '缺少',
    'Missing mechanics': '缺少机械师',
    'Not enough garage space': '车库空间不足',
    'Race 1 time': '比赛1次',
    'Race previous track to unlock': '完成前一场比赛以解锁',
    'Reward': '奖励',
    'Select car': '选择车辆',
    'Showoff': '炫耀',
    'Sponsors': '赞助商',
    'supercar': '超级跑车',
    'Tuning Center lvl': '调优中心等级',
    'Upgrade Center lvl': '升级中心等级',
    'Winning chances': '胜率',
    'Cars': '车辆',
    'About': '关于',
    'Money': '资金',
    'Sold': '售出',
    'Settings': '设置',
    'Races': '比赛',
    'Won': '获胜',
    'Spent': '花费',
    'Stars': '成就',
    'Earned': '赚取',
    'Canceled': '取消',
    'About Me': '关于我',
    'Clear notifications': '清除通知',
    'Libraries': '图书馆',
    '1 Mechanic': '1 机械师',
    'Download': '下载',
    'Download save data': '下载存档',
    'Load': '加载',
    'Reset': '重置',
    'Reset save data': '清除存档(慎点)',
    'Version': '版本',
    'Load save data': '导入存档',
    'Cancel': '取消',
    'Color picker': '颜色选择器',
    'Select an attribute to buy upgrades': '选择一个属性以购买升级',
    'Sell ($': '出售 ($',
    'SPD': '速度',
    'Tuning': '调优',
    '(exp upgrade': '(经验升级',
    '1st Prize': '一等奖',
    'All business exp upgrades': '所有商业经验升级',
    'All event sponsors (': '所有活动赞助商（',
    'All event sponsors (all': '所有活动赞助商（全部',
    'All garage upgrades': '所有车库升级',
    'Results': '结果',
    'Sell?': '出售？',
    'Shopping': '购物',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '"City showoff" car': '城市高尔夫汽车',
    'First car bought': '买的第一辆车',
    'All Race Events': '所有赛事',
    'Acquire all "': '获取所有”',
    ') car': ') 车',
    '" cars to unlock brand sponsor (': '“汽车去解锁品牌赞助商（',
    'You need to enable JavaScript to run this app.': '您需要启用JavaScript才能运行此游戏。',
    'and start racing!': '并开始赛车！',
    'Buy your first car': '购买你的第一辆车！',

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
    [/^(\d+)\/(\d+) cars$/, '$1\/$2 汽车'],
    [/^(\d+) reward cars$/, '$1 奖励汽车'],
    [/^(\d+) garage upgrades$/, '$1 车库升级'],
    [/^(\d+) money sponsor$/, '$1 资金赞助'],
    [/^Sell (\d+) car$/, '出售 $1 汽车'],
    [/^(\d+)h ago$/, '$1 小时前'],
    [/^(\d+)m ago$/, '$1 分钟前'],
    [/^(\d+)s ago$/, '$1 秒前'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);
