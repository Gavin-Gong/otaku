<template>
  <div id="home">
    <x-header>
      <!--<img src="assets/img/header.png" alt="">-->
      <div class="btns-wrapper" v-if="!$store.state.isAuth">
        <button class="ot-btn" @click="$router.push({name: 'Login'})">登陆</button><br>
        <button class="ot-btn signup-btn">注册</button>
      </div>
      <section class="gallery">
        <h2>热门推荐</h2>
        <ul>
          <li>
            <h3>诚实吐槽Fate/Zero</h3>
            <p>
              不知道为什么这个视频提前了~这期我花了很多功夫却还有很多不尽人意之处，也许是因为关于FZ还有太多想说以至于一个视频根本不够，但我最后总得取舍，但根据历史规律我不满意的视频大家往往看的很开心</p></li><li>
            <h3>gravityWall</h3>
            <p>
              前作「Into the Sky」公信榜单曲周榜取得第六位的人气剧伴作家泽野弘之，SawanoHiroyuki[nZk] Project通算第五张单曲主打歌曲《gravityWall》（春季动画《Re:CREATORS》片头曲）TV版开始配信。</p></li><li>
            <h3>盗墓笔记同人动画</h3>
            <p>
              自制 盗墓笔记同人动画，<br>原作：南派三叔<br>配乐：吉田洁《祭》热风<br>工具：FlashCS3，PS，AE，premiere，cubase7，protools等<br>制作：好传摸鱼小组及很多很多朋友</p></li><li @click="$router.push({name: 'Detail'})">
            <h3>细品反叛的鲁路修</h3>
            <p>
              最近生活琐事越来越多，压力也是持续增大，年纪越来越大叔了就越来越不能随心所欲了，因此我自己对自己啥时候更新都不会清楚，只能说尽力吧...<br>by：阿拉垃圾垃圾君</p></li><li>
            <h3>细雨星辰化作你</h3>
            <p>
              素材：四月是你的谎言 ；<br>音乐：横山克-《挫けそうになる私を支えてください》<br>lafur Arnalds-《3055》`</p></li>
        </ul>
      </section>
    </x-header>

    <!--main-->

    <main class="main" role="main">
      <section class="playround">
        <div class="bg-card">

        </div>
        <div class="inner-wrapper">
          <section data-cat="music" class="cat">
            <h2>音&nbsp;&nbsp;&nbsp;&nbsp;乐 &nbsp;&nbsp;/<span class="more-link">&nbsp;&nbsp; GET &nbsp;&nbsp;MORE</span></h2>
            <div class="divider"></div>
            <div class="banner">
              <div class="banner-left">
                <h3>gravity Wall</h3>
                <p>SawanoHiroyuki[nZk] Project通算第五张单曲主打歌曲春季动画《Re:CREATORS》片头曲</p>
                <div class="banner-btns">
                  <button class="ot-btn">泽野弘之</button>&nbsp;
                  <button class="ot-btn">新番op</button>
                </div>
              </div><div class="banner-right" @click="$router.push({name: 'Detail', query:{ id: 2 }})">
                <div class="mask">
                  <i class="iconfont icon-bofang"></i>
                </div>
              </div>
            </div>
            <div class="card-collections">
              <div class="label">
                <span>
                  音&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;乐</span>/<span>
                  推&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;荐
                </span>
              </div>
              <div class="card-collection">
                <ul>
                  <li>
                    <div class="inner-card">
                      <div class="slide">
                        <p>【MORA自购】<br>转载原贴:http://www.tsdm.me/forum.php?mod=viewthread&tid=815236</p>
                        <p>2017-05-05</p>
                      </div>
                      <div class="footer-bar">
                        <h4>夏目友人帐第六季  OP片头曲 ...</h4>
                        <ul>
                          <li><i class="icon-play"></i> 1.1W</li>
                          <li><i class="icon-star"></i> 1.1W</li>
                          <li>天使动漫</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="inner-card">
                      <div class="slide">
                        <p>GALGAME 音乐推荐 鉴赏</p>
                        <p>2016-01-20</p>
                      </div>
                      <div class="footer-bar">
                        <h4>GALGAME 音乐推荐 鉴赏</h4>
                        <ul>
                          <li><i class="icon-play"></i> 1.1K</li>
                          <li><i class="icon-star"></i> 3.3K</li>
                          <li>七二姐姐</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="inner-card">
                      <div class="slide">
                        <p>罪恶王冠 tab by Tam Lu</p>
                        <p>2016-04-20</p>
                      </div>
                      <div class="footer-bar">
                        <h4>罪恶王冠 tab by Tam Lu</h4>
                         <ul>
                          <li><i class="icon-play"></i> 2.5K</li>
                          <li><i class="icon-star"></i> 2.5K</li>
                          <li>everrygreen</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section data-cat="comment" class="cat">
            <h2>漫&nbsp;&nbsp;&nbsp;&nbsp;评 &nbsp;&nbsp;/<span class="more-link">&nbsp;&nbsp; GET &nbsp;&nbsp;MORE</span></h2>
            <div class="divider"></div>
            <div class="banner">
              <div class="banner-left">
                <h3>诚实吐槽Fate/Zero</h3>
                <p>这期我花了很多功夫却还有很多不尽人意之处，也许是因为关于FZ还有太多想说以至于一个视频根本不够，但我最后总得取舍，但根据历史规律我不满意的视频大家往往看的很开心，不知道这次会不会例外。</p>
                <div class="banner-btns">
                  <button class="ot-btn">fate</button>&nbsp;
                  <button class="ot-btn">瓶子</button>
                </div>
              </div><div class="banner-right">
                <div class="mask">
                  <i class="iconfont icon-bofang"></i>
                </div>
              </div>
            </div>
            <div class="card-collections">
              <div class="label">
                <span>
                  漫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;评</span>/<span>
                  推&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;荐
                </span>
              </div>
              <div class="card-collection">
                <ul>
                  <li>
                    <div class="inner-card">
                      <div class="slide">
                        <p>剧情伪燃系/剑鞘神曲</p>
                        <p>2017-03-20</p>
                      </div>
                      <div class="footer-bar">
                        <h4>剧情伪燃系/剑鞘神曲</h4>
                        <ul>
                          <li><i class="icon-play"></i> 6.6K</li>
                          <li><i class="icon-star"></i> 5.6K</li>
                          <li>记忆Angel欠片</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li @click="$router.push({name: 'Detail', query: {id: 5}})">
                    <div class="inner-card">
                      <div class="slide">
                        <p>空之境界【Chima】</p>
                        <p>2016-08-20</p>
                      </div>
                      <div class="footer-bar">
                        <h4>空之境界</h4>
                        <ul>
                          <li><i class="icon-play"></i> 23W</li>
                          <li><i class="icon-star"></i> 17W</li>
                          <li>to79817</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="inner-card">
                      <div class="slide">
                        <p>锦鲤抄/银临【少年锦衣卫ED】</p>
                        <p>2017-11-24</p>
                      </div>
                      <div class="footer-bar">
                        <h4>锦鲤抄/银临【少年锦衣卫ED】</h4>
                        <ul>
                          <li><i class="icon-play"></i> 9.6K</li>
                          <li><i class="icon-star"></i> 2.3K</li>
                          <li>领居家的余生男</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section data-cat="exhibition" class="cat">
            <h2>MAD & MAV / <span class="more-link">GET &nbsp;&nbsp;MORE</span></h2>
            <div class="divider"></div>
            <div class="banner">
              <div class="banner-left">
                <h3>樱雨星尘化作你</h3>
                <p>素材：四月是你的谎言 ；音乐：横山克-《挫けそうになる私を支えてください》、lafur Arnalds-《3055》 </p>
                <div class="banner-btns">
                  <button class="ot-btn">3055</button>&nbsp;
                  <button class="ot-btn">TOS MAD CLUB</button>
                </div>
              </div><div class="banner-right">
                <div class="mask">
                  <i class="iconfont icon-bofang"></i>
                </div>
              </div>
            </div>
            <div class="card-collections">
              <div class="label">
                <span style="letter-spacing: 0px;">
                  MAD & MAV</span>&nbsp;&nbsp;/<span>
                  推&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;荐
                </span>
              </div>
              <div class="card-collection">
                <ul>
                  <li>
                    <div class="inner-card">
                      <div class="slide">
                        <p>秒速五厘米</p>
                        <p>2017-01-20</p>
                      </div>
                      <div class="footer-bar">
                        <h4>秒速五厘米</h4>
                        <ul>
                          <li><i class="icon-play"></i> 2.6K</li>
                          <li><i class="icon-star"></i> 1.9K</li>
                          <li>西宫硝硝子</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="inner-card">
                      <div class="slide">
                        <p>d纳米核心</p>
                        <p>2016-01-20</p>
                      </div>
                      <div class="footer-bar">
                        <h4>纳米核心</h4>
                        <ul>
                          <li><i class="icon-play"></i> 1.8k</li>
                          <li><i class="icon-star"></i> 1.8k</li>
                          <li>淡淡的忧伤</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="inner-card">
                      <div class="slide">
                        <p>昭和元禄落语心中</p>
                        <p>2016-10-11</p>
                      </div>
                      <div class="footer-bar">
                        <h4>昭和元禄落语心中</h4>
                        <ul>
                          <li><i class="icon-play"></i> 12K</li>
                          <li><i class="icon-star"></i> 10K</li>
                          <li>渔太郎</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section data-cat="tongren" class="cat">
            <h2>同&nbsp;&nbsp;&nbsp;&nbsp;人 &nbsp;&nbsp;/<span class="more-link">&nbsp;&nbsp; GET &nbsp;&nbsp;MORE</span></h2>
            <div class="divider"></div>
            <div class="banner">
              <div class="banner-left">
                <h3>盗墓笔记同人动画</h3>
                <p>自制 盗墓笔记同人动画<br>原作：南派三叔<br>配乐：吉田洁《祭》热风</p>
                <div class="banner-btns">
                  <button class="ot-btn">盗墓笔记</button>&nbsp;
                  <button class="ot-btn">同人逼死官方</button>
                </div>
              </div><div class="banner-right">
                <div class="mask">
                  <i class="iconfont icon-bofang"></i>
                </div>
              </div>
            </div>
            <div class="card-collections">
              <div class="label">
                <span>
                  同&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人/</span>
                  <span>推&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;荐
                </span>
              </div>
              <div class="card-collection">
                <ul>
                  <li>
                    <div class="inner-card">
                      <div class="slide">
                        <p>魔道祖师同人歌+广播剧</p>
                        <p>2017-08-10</p>
                      </div>
                      <div class="footer-bar">
                        <h4>魔道祖师同人歌+广播剧</h4>
                        <ul>
                          <li><i class="icon-play"></i> 1.8k</li>
                          <li><i class="icon-star"></i> 1.8k</li>
                          <li>谁知道呢</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="inner-card">
                      <div class="slide">
                        <p>空之境界矛盾螺旋</p>
                        <p>2016-01-20</p>
                      </div>
                      <div class="footer-bar">
                        <h4>空之境界矛盾螺旋</h4>
                        <ul>
                          <li><i class="icon-play"></i> 3.3K</li>
                          <li><i class="icon-star"></i> 2.4K</li>
                          <li>whom</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="inner-card">
                      <div class="slide">
                        <p>去月球</p>
                        <p>2016-01-20</p>
                      </div>
                      <div class="footer-bar">
                        <h4>去月球</h4>
                        <ul>
                          <li><i class="icon-play"></i> 6.7K</li>
                          <li><i class="icon-star"></i> 2.9K</li>
                          <li>如此虚伪</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
    <x-nav></x-nav>
  </div>
</template>

<script>
import XHeader from '@/components/Header'
import Card from '@/components/Card'
import CardList from '@/components/CardList'
import XNav from '@/components/Nav'

export default {
  name: 'hello',
  components: {
    XHeader,
    Card,
    CardList,
    XNav
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
@import '~styles/partials/_main.scss';
#home + .footer {
   padding-top: 400px;
}
#home {
  .card-collection {
    >ul>li {
      width: calc((100% - 180px) / 3);
    }
  }
  .icon-bofang {
    font-size: 60px;
  }
  .more-link {
    color: #fa9d4c;
  }
  [data-cat=music] .card-collection>ul>li {
    &:nth-child(1) {
      background: url(http://opazkqh2d.bkt.clouddn.com/17-6-1/58229559.jpg) top/contain no-repeat;
    }
    &:nth-child(2) {
      background: url(http://opazkqh2d.bkt.clouddn.com/17-6-1/83188970.jpg) top/contain no-repeat;
    }
    &:nth-child(3) {
      background: url(http://opazkqh2d.bkt.clouddn.com/17-6-1/31714379.jpg) top/contain no-repeat;
    }
  }
  [data-cat=comment] .card-collection>ul>li {
    &:nth-child(1) {
      background: url(http://opazkqh2d.bkt.clouddn.com/17-6-1/88747732.jpg) top/contain no-repeat;
    }
    &:nth-child(2) {
      background: url(http://opazkqh2d.bkt.clouddn.com/17-6-1/570793.jpg) top/contain no-repeat;
    }
    &:nth-child(3) {
      background: url(http://opazkqh2d.bkt.clouddn.com/17-6-1/32501078.jpg) top/contain no-repeat;
    }
  }
  [data-cat=exhibition] .card-collection>ul>li {
    &:nth-child(1) {
      background: url(http://opazkqh2d.bkt.clouddn.com/17-6-1/16482897.jpg) top/contain no-repeat;
    }
    &:nth-child(2) {
      background: url(http://opazkqh2d.bkt.clouddn.com/17-6-1/9672701.jpg) top/contain no-repeat;
    }
    &:nth-child(3) {
      background: url(http://opazkqh2d.bkt.clouddn.com/17-6-1/27823180.jpg) top/contain no-repeat;
    }
  }
  [data-cat=tongren] .card-collection>ul>li {
    &:nth-child(1) {
      background: url(http://opazkqh2d.bkt.clouddn.com/17-6-1/84849512.jpg) top/contain no-repeat;
    }
    &:nth-child(2) {
      background: url(http://opazkqh2d.bkt.clouddn.com/17-6-1/96791860.jpg) top/contain no-repeat;
    }
    &:nth-child(3) {
      background: url(http://opazkqh2d.bkt.clouddn.com/17-6-1/51672819.jpg) top/contain no-repeat;
    }
  }
}
</style>
