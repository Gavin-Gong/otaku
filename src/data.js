const data = {
  cardListData: [
    { type: 'image', title: '夏目友人帐第六季  OP片头曲 ...', author: '天使动漫', desc: '夏目友人帐第六季  OP片头曲  超级燃', star_count: '1.1W', play_count: '1.1K', created_at: '2017-04-05', banner: 'http://opazkqh2d.bkt.clouddn.com/17-6-1/42493422.jpg' },
    { type: 'image', title: 'Fate/stay night UBW - OP2', author: 'Animenzzz', desc: 'Fate/stay night UBW - OP2', star_count: '3.6W', play_count: '3.2W', created_at: '2017-04-07', banner: 'http://opazkqh2d.bkt.clouddn.com/17-6-1/64955157.jpg' },
    { type: 'video', title: '剧情伪燃系/剑鞘神曲', author: '记忆Angel欠片', desc: '剧情伪燃系/剑鞘神曲', star_count: '3.5K', play_count: '5.5K', created_at: '2017-04-08', banner: 'http://opazkqh2d.bkt.clouddn.com/17-6-1/11685503.jpg' },
    { type: 'image', title: '演唱会 - Live Tour D...', author: '似猫不是喵', desc: '演唱会 - aimer为数不多的歌曲', star_count: '2.6W', play_count: '3.1W', created_at: '2017-02-15', banner: 'http://opazkqh2d.bkt.clouddn.com/17-6-1/73762791.jpg' },
    { type: 'video', title: 'GALGAME 音乐推荐 鉴赏', author: '七二姐姐', desc: 'GALGAME 音乐推荐 鉴赏', star_count: '3.6K', play_count: '9.2K', created_at: '2017-04-05', banner: 'http://opazkqh2d.bkt.clouddn.com/17-6-1/58229559.jpg' },
    { type: 'image', title: '甲铁城的卡巴内瑞第4集ED-nine...', author: '拉西美代子', desc: '甲铁城的卡巴内瑞第4集ED-ninelie_OP/ED/OST', star_count: '23W', play_count: '45W', created_at: '2017-03-12', banner: 'http://opazkqh2d.bkt.clouddn.com/17-6-1/83188970.jpg' },
    { type: 'image', title: '锦鲤抄/银临【少年锦衣卫ED】', author: '领居家的余生男', desc: '锦鲤抄/银临【少年锦衣卫ED】', star_count: '2.3K', play_count: '3.3K', created_at: '2016-03-12', banner: 'http://opazkqh2d.bkt.clouddn.com/17-6-1/88747732.jpg' },
    { type: 'image', title: '開始的印記【Chima】', author: 'to79817', desc: '開始的印記【Chima】', star_count: '2.1W', play_count: '4.2W', created_at: '2017-03-11', banner: 'http://opazkqh2d.bkt.clouddn.com/17-6-1/570793.jpg' },
    { type: 'image', title: '95年UP主带你回顾童年', author: 'DarkKnight-7', desc: '95年UP主带你回顾童年', star_count: '2.9K', play_count: '9.9K', created_at: '2017-01-12', banner: 'http://opazkqh2d.bkt.clouddn.com/17-6-1/32501078.jpg' },
    { type: 'image', title: '【3酱@四谎】樱雨星尘化作你am Lu', author: '3酱', desc: '【3酱@四谎】樱雨星尘化作你', star_count: '9.2W', play_count: '12W', created_at: '2016-08-22', banner: 'http://opazkqh2d.bkt.clouddn.com/17-6-1/31714379.jpg' },
    { type: 'video', title: '【钢琴】那些年QQ空间里的背景...', author: '3酱', desc: '【钢琴】那些年QQ空间里的背景音乐', star_count: '1.2K', play_count: '2.4K', created_at: '2017-11-02', banner: 'http://opazkqh2d.bkt.clouddn.com/17-6-1/16482897.jpg' },
    { type: 'video', title: '【Re:CREATORS】向世界送上...', author: '花粉回家', desc: '【Re:CREATORS】向世界送上军服', star_count: '6.9K', play_count: '1.2W', created_at: '2017-01-23', banner: 'http://opazkqh2d.bkt.clouddn.com/17-6-1/35000942.jpg' },
    { type: 'image', title: '诚实吐槽Fate/Zero', author: '瓶子君152', desc: '诚实吐槽Fate/Zero', star_count: '2.8K', play_count: '8.2K', created_at: '2016-08-02', banner: 'http://opazkqh2d.bkt.clouddn.com/17-6-1/9672701.jpg' },
    { type: 'video', title: '关于童年的过去', author: 'leec', desc: '关于童年的描写，回忆杀', star_count: '7.5W', play_count: '8.2W', created_at: '2014-10-31', banner: 'http://opazkqh2d.bkt.clouddn.com/17-6-1/95690368.jpg' },
    { type: 'video', title: '火影盘点向', author: '中二傻猫', desc: '【盘点】火影动画中晓抓捕各个人柱力场面', star_count: '2.1K', play_count: '3.2K', created_at: '2017-01-12', banner: 'http://opazkqh2d.bkt.clouddn.com/17-6-1/27823180.jpg' },
    { type: 'video', title: '【东方手书】一首花蝴蝶真情...', author: '针鼠修罗', desc: '【东方手书】一首花蝴蝶真情讲述东方辉针城的故事', star_count: '2.2K', play_count: '3.6K', created_at: '2016-12-02', banner: 'http://opazkqh2d.bkt.clouddn.com/17-6-1/84849512.jpg' },
    { type: 'image', title: '未曾消逝的光芒', author: '神奇的我们', desc: '【四月是你的谎言·初见】那是你未曾消逝的光芒', star_count: '4.6W', play_count: '8.5W', created_at: '2016-06-12', banner: 'http://opazkqh2d.bkt.clouddn.com/17-6-1/42432828.jpg' },
    { type: 'video', title: '【Doridori】五彩斑斓的梦想', author: '按秒的祝福', desc: '【Doridori】五彩斑斓的梦想', star_count: '3.3K', play_count: '4.9K', created_at: '2017-05-10', banner: 'http://opazkqh2d.bkt.clouddn.com/17-6-1/65983705.jpg' },
    { type: 'video', title: '时之雨，最终战争', author: '夜雨闻铃', desc: '【凹凸世界手书】时之雨，最终战争', star_count: '9.5K', play_count: '2.3W', created_at: '2016-06-23', banner: 'http://opazkqh2d.bkt.clouddn.com/17-6-1/51672819.jpg' },
    { type: 'image', title: '【洛天依】桃源恋歌', author: '受不了', desc: '这可能是B站第一个中文版', star_count: '2.8W', play_count: '3.6W', created_at: '2017-11-17', banner: 'http://opazkqh2d.bkt.clouddn.com/17-6-1/96791860.jpg' },
    { type: 'video', title: '7月新番抢先看', author: '梦魇君', desc: '【新番预热】2017年7月新番抢先看！有生之年系列！', star_count: '1.3K', play_count: '9.1K', created_at: '2017-07-19', banner: 'http://opazkqh2d.bkt.clouddn.com/17-6-1/89691978.jpg' }
  ]
}

export default data
