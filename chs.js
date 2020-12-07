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
    'Sponsor: $': '赞助商：$',
    'Sponsors ($': '赞助商（$',
    'Sponsors (max': '赞助商（最高',
    'Sponsors (unlocked': '赞助商（已解锁',
    'Stop race': '停止比赛',
    'Street racing': '街头赛车',
    'Street-racing': '街头赛车',
    'Super muscle': '超级肌肉',
    'Super round': '超级圆',
    'Super slim': '超薄',
    'Tiny world': '小世界',
    'Tiny-world': '小世界',
    'Tiny World': '小世界',
    'Town': '小镇',
    'Truck road': '卡车路',
    'Truck speed': '卡车速度',
    'Tuning car': '调整汽车',
    'Up hill': '上山',
    'Upgrade car attributes (': '升级汽车属性（',
    'While you were away': '在你离开的时候',
    'Van hippie': '凡嬉皮',
    'Win 1 race': '赢 1 次比赛',
    'Win all race': '全部比赛获胜',
    'Yes': '是的',
    'All maxed out': '所有刷爆',
    'All mechanics': '所有机械师',
    'All mechanic exp upgrades': '所有机械师经验升级',
    'All money sponsor': '所有赞助商',
    'All race exp upgrades': '所有比赛经验升级',
    'All reward cars': '所有奖励汽车',
    'AVERAGE': '平均',
    'Brands (max': '品牌（最高',
    'Buy 1 car': '购买 1 辆车',
    'Buy 1 exp upgrade': '购买 1 次经验升级',
    'Buy a reward car': '购买1辆奖励车',
    'Buy all exp upgrades': '购买所有经验升级',
    'Buy new car slot': '购买新车位',
    'CAR': '汽车',
    'Car tuning (': '汽车改装（',
    'Chakra UI': '脉轮UI',
    'Change car color (': '更改汽车颜色（',
    'City cars': '城市车',
    'City Coupé': '城市双门轿跑车',
    'City Hatchback': '城市掀背车',
    'City Sedan': '城市轿车',
    'City Showoff': '城市炫耀者',
    'City Speed': '城市速度',
    'City stroll': '城市漫步',
    'City SUV': '城市SUV',
    'City SW': '城市SW',
    'City SW Power': '城市SW动力',
    'Compact cars': '小型汽车',
    'Countryside': '农村',
    'Customize car': '定制车',
    'Desert cup': '沙漠杯',
    'Desert-cup': '沙漠杯',
    'Details': '详情',
    'Easy parking': '停车方便',
    'Empty slot': '空位',
    'EV cityboy': '电动都市男孩',
    'EV cleandirt': '电动汽车清洁',
    'EV supercar': '电动超级跑车',
    'EV SUV': '电动SUV',
    'Family cars': '家用车',
    'Family friendly': '家庭友好型',
    'Family-friendly': '家庭友好型',
    'Front-wheel-drive only': '仅前轮驱动',
    'Get all cars': '得到所有汽车',
    'Go to settings page': '转到设置页面',
    'Go to about page': '转到关于页面',
    'GOOD': '不错',
    'Mechanics (unlocked': '机械师（解锁',
    'Metropolis': '大都会',
    'Muddy': '马迪',
    'Muddy cup': '马迪杯',
    'Muddy-cup': '马迪杯',
    'No races': '无比赛',
    '"No upgrades': '无升级',
    'Offroad dirt': '越野污垢',
    'Offroad mud': '越野泥浆',
    'Packed': '盒装',
    'Pickup monster': '皮卡怪物',
    'Previous Races': '之前的比赛',
    'Race all': '全部比赛',
    'Race all races': '参加所有比赛',
    'Race event unlocked': '赛事已解锁',
    'React': '反应',
    'React Router': '反应路由器',
    'Rear-wheel-drive': '后轮驱动',
    'Redux': '终极版',
    'Success': '成功',
    '1 reward car': '1 辆奖励车',
    'Win all races': '赢得所有比赛',
    'You\'ve earned': '你得到了',
    'Attributes price': '属性价格',
    'Available points': '可用点数',
    'Buy reward cars': '购买奖励车',
    'Brand sponsors give a 100 exp bonus once unlocked': '品牌赞助商解锁后即可获得 100 经验奖励',
    'Earn exp by buying and selling cars': '通过买卖汽车赚取经验',
    'Earn exp by racing': '通过赛车赚取经验',
    'Earn exp by upgrading cars and expanding the garage': '通过升级汽车和扩大车库来赚取经验',
    'New cars price': '新车价格',
    'Old cars price': '旧车价格',
    'OFF': '关闭',
    'ON': '开启',
    'Race duration': '比赛时长',
    'Race price': '比赛价格',
    'Race prizes': '比赛奖品',
    'Pickup farmer': '皮卡农夫',
    'Fall': '秋季',
    'Spring': '春季',
    'Street Crazy': '疯狂街头',
    'Street Fast': '街头疾驰',
    'Street Furious': '街头狂怒',
    'Street Slow': '街头慢行',
    'Summer': '夏季',
    'Winter': '冬季',
    'ACC': '自动驾驶',
    'compact': '紧凑',
    'Up-hill': '上坡',
    'Pos': '排名',
    'offroad': '越野',
    'family': '家庭',
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
    "Time offline ": "离线时间 ",
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
    [/^(\d+)d (\d+)h (\d+)m$/, '$1天 $2小时 $3分钟'],
    [/^(\d+)\/(\d+) cars$/, '$1\/$2 汽车'],
    [/^(\d+) reward cars$/, '$1 奖励汽车'],
    [/^(\d+) Sponsor$/, '$1 赞助商'],
    [/^Race (\d+) times$/, '比赛 $1 次'],
    [/^Missing (\d+) exp to unlock$/, '还差 $1 经验解锁'],
    [/^Sell (\d+) cars$/, '出售 $1 辆车'],
    [/^Buy (\d+) cars$/, '购买 $1 辆车'],
    [/^Buy (\d+) exp upgrades$/, '购买 $1 次经验升级'],
    [/^Buy (\d+) garage slots$/, '购买 $1 车库插槽'],
    [/^Win (\d+) races$/, '赢 $1 次比赛'],
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
