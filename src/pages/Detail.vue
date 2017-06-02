<template>
  <div id="detail">
    <x-header>
      <div class="info-wrapper">
        <div class="video-detail">
          <h3>{{detailData.title}}</h3>
          <ul class="info-bar">
            <li>{{detailData.play_count}}</li>
            <li>{{detailData.star_count}}</li>
            <li>{{detailData.created_at}}</li>
          </ul>
          <p>主页 -- 漫评</p>
        </div>
        <div class="author-detail">
          <img :src="detailData.avatar" alt="" class="avatar">
          <div class="right-box">
            <h4>{{detailData.name}} <x-icon type="female" color="#ff67a0"></x-icon></h4>
            <p>{{detailData.bio}}</p>
          </div>
        </div>
      </div>
    </x-header>
    <main>
      <div class="inner-wrapper">
        <!--TODO: video link-->
        <div class="text-detail" v-if="detailData.type === 'text'">
          <p v-html="detailData.body"></p>
        </div>
        <div v-html="detailData.type === 'video' && detailData.body"></div>
        <div class="comment-wrapper">
          <div class="reply-bar">
            <div class="icon-wrapper">
              <x-icon type="share"></x-icon>
              <x-icon type="star1" @click.native="handleStar($event)"></x-icon>
              <x-icon type="lahei" @click.native="handleStar($event)"></x-icon>
            </div>
            <input type="text" v-model="topCommentField">
            <button @click="handleTopReply">评论</button>
          </div>
          <ul class="comment-list">
            <li class="comment-item" v-for="(comment, index) in detailData.commentList">
              <img :src="comment.avatar" alt="" class="avatar">
              <div class="comment-content">
                <h3>{{comment.name}}</h3>
                <p class="time">{{comment.created_at}}</p>
                <div class="comment-card">
                  <p>{{comment.body}}</p>
                  <div class="reply-bar">
                    <button @click="handleReply(index)">回复</button>
                    <input type="text" v-model="comment.model">
                  </div>
                </div>
                <ul class="child-comment" v-if="comment.children && comment.children.length">
                  <li v-for="item in comment.children">
                    <img :src="item.avatar" alt="" class="avatar">
                    <div class="childComment-content">
                      <h4>{{item.name}}</h4>
                      <p>{{item.body}}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import XHeader from '@/components/Header'
import XCard from '@/components/Card'
import CardList from '@/components/CardList'
import XIcon from '@/components/Icon'
import faker from 'faker'

export default {
  components: {
    XHeader,
    XCard,
    CardList,
    XIcon
  },
  created () {
    if (this.$route.query && this.$route.query.id) {
      this.detailData = this[`detailData_${this.$route.query.id}`]
    }
    window.scrollTo(0, 0)
  },
  data () {
    return {
      /*eslint-disable*/
      detailData: {
        commentList: [
          { avatar: this.avatar(60,60), name: '阿尔托利亚', created_at: '2017-01-11', body: '鲁鲁修这部作品，我大致应该是在七年前补的番当时非常喜欢这部作品，反复的温；C.C甚至可以说是我的初代“女神”七年前所观的对这部作品的印象早已模糊 在写这份影评之前，我事先写了一份过去所受到的感触评价；写完之后才进行的重温，并且是以吹毛求疵的角度去苛求品味着两份不同的感想互相参照之下，发现过去所喜爱，所赞扬的地方在现今的目光之下反而成为了作品的缺点所在不得不感慨，时间会令人成长，成长令人改变世界观，价值观早已不同，也不知如此，是好还是坏这次的重温，我看到了过去自己所不明的，过去所误知的并且明白了缺点有时候，可能也正是优点所在去所见的优异之处，在现今的审美观之下，属于糟粕现今的感触之处，则是过去所难以理解，甚至无法理解的地方,《叛逆的鲁鲁修》这部作品给了我很好的体验，它值得细细的去反复品味。', model: '', children: [
            { avatar: this.avatar(60,60), name: '迪罗木多', body: '反正我感觉要出续作很不明智 看大河内怎么写了 写不好又要背锅' },
            { avatar: this.avatar(60,60), name: '红A', body: '其实蛮心疼朱雀的，虽然确实有不对的地方，但是他只是一个高中生。' }
          ]},
          { avatar: this.avatar(60,60), name: '虚荣', created_at: '2017-04-22', body: '我用了5分28秒看完了叛逆的鲁鲁修并且知道了所有伏笔 ', model: '', children: [] }
        ],
        avatar: this.avatar(60,60),
        name: '琉璃',
        bio: '授人以鱼不如授人以渔，那么人人会渔之后，原渔夫会如何？世界又会如何？',
        title: '宅语漫谈 细品《Code Geass 反叛的鲁路修》-混沌与秩序',
        body: '<embed height="615" width="100%" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="//static.hdslb.com/miniloader.swf" flashvars="aid=372233&page=1" pluginspage="//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>7',
        play_count: '222',
        star_count: '3333',
        created_at: '2017-02-03',
        type: 'video',
      },
      detailData_2: {
        commentList: [
          { avatar: this.avatar(60,60), name: '杀马特高中生', created_at: '2017-04-11', body: '这个Re:CREATORS的主题曲可能是下一个要血洗全站的神曲那么来给这个神曲起个简单的名字吧', model: '', children: [
            { avatar: this.avatar(60,60), name: '五个黑子', body: '飞剑神曲' },
            { avatar: this.avatar(60,60), name: '御坂美琴', body: '破壁神曲' },
            { avatar: this.avatar(60,60), name: '小天使', body: '飞剑飞剑(▔□▔)/' }
          ]},
          { avatar: this.avatar(60,60), name: '拒绝键盘侠', created_at: '2017-02-24', body: '弑主神曲 降临！！！！！！ ', model: '', children: [] }
        ],
        avatar: this.avatar(60,60),
        name: '浊世之蓝',
        bio: '荣耀存于心，而非流于形',
        title: 'Re-CREATORS 「gravity wall」 Sawano Hiroyuki [nZk] ',
        body: '<embed height="615" width="100%" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="//static.hdslb.com/miniloader.swf" flashvars="aid=10635700&page=1" pluginspage="//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>',
        play_count: '4.2K',
        star_count: '2.3K',
        created_at: '2017-01-03',
        type: 'video',
      },
      detailData_3: {
        commentList: [
          { avatar: this.avatar(60,60), name: '亲自谈墨', created_at: '2017-04-11', body: '蕾丝已经进入了一本正经讲视频然后一本正经插入广告后又若无其事的一本正经的讲视频剧情的境界了，是广告区up主的豪杰', model: '', children: [
            { avatar: this.avatar(60,60), name: '沉默是金', body: '防不胜防' },
            { avatar: this.avatar(60,60), name: '月下', body: '还有这种操作' },
            { avatar: this.avatar(60,60), name: '不管了', body: '你还是会总结' }
          ]},
          { avatar: this.avatar(60,60), name: '不愿透露姓名的我', created_at: '2017-02-24', body: '真心安利弹丸论破，无论是剧情还是人物设定亦或是游玩方式，都是十分杰出的一部作品，真的是不玩游戏就可惜了。 ', model: '', children: [] }
        ],
        avatar: this.avatar(60,60),
        name: 'LexBurner',
        bio: '新浪微博：http://weibo.com/lexburner',
        title: '【Lex】不懂去玩原作！？浅谈那些游戏改编动画',
        body: '<embed height="615" width="100%" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="//static.hdslb.com/miniloader.swf" flashvars="aid=10859510&page=1" pluginspage="//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>',
        play_count: '50W',
        star_count: '23W',
        created_at: '2017-04-28',
        type: 'video',
      },
      detailData_4: {
        commentList: [
          { avatar: this.avatar(60,60), name: '天涯难端', created_at: '2017-04-11', body: 'BGM作者，是位说唱歌手，这是他专门为水门男神写的RAP。详情可以去访问网址：https://goo.gl/jLRG12', model: '', children: [
            { avatar: this.avatar(60,60), name: '沉默是金', body: '他是不是还给海贼王的写过 声音耳熟' },
          ]},
          { avatar: this.avatar(60,60), name: '法门落叶', created_at: '2017-02-24', body: '波风水门,作为一个火影,他用自己和老婆的性命换来了全木叶村村民的的安全,作为一位丈夫和父亲,在危险时刻他拼尽全力保护老婆和孩子,换来了儿子的安全,却未能换来老婆的安全… ', model: '', children: [] }
        ],
        avatar: this.avatar(60,60),
        name: '存在の印记',
        bio: '每个人都带着面具，我只不过是自制了一幅而已',
        title: '【AMV/RAP/四代目火影】波风水门 - "帅"破天际的男人',
        body: '<embed height="615" width="100%" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="//static.hdslb.com/miniloader.swf" flashvars="aid=10810438&page=1" pluginspage="//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>d>',
        play_count: '9.2W',
        star_count: '0.3K',
        created_at: '2017-01-28',
        type: 'video',
      },
      detailData_5: {
        commentList: [
          { avatar: this.avatar(60,60), name: '就是这样', created_at: '2017-04-11', body: '本編映像と並んで高い評価を受けた、劇場版「空の境界」の音楽世界。作曲家・梶浦由記自身によるベスト&リアレンジアルバムとして、全七章の旋律がここに甦る!映像に合わせて作曲された劇伴音楽を再編曲&新規録音し、独立した音楽作品として新たなるオリジナルマスターを制作。新作映像『劇場版「空の境界」終章 / 空の境界』のBGMも初収録!\n本专辑收录了《空之境界》8部剧场版“主要”BGM的mix版，每一首都是精品，敬请欣', model: '', children: [
            { avatar: this.avatar(60,60), name: '我是乖乖生', body: '顺序是小说的顺序，是乱序' },
          ]},
          { avatar: this.avatar(60,60), name: '凤凰园凶针', created_at: '2017-02-24', body: '愿化御姐刀下鬼，不作萝莉裙下臣 ', model: '', children: [] }
        ],
        avatar: this.avatar(60,60),
        name: '那得糊涂',
        bio: '日暮酒醒人已远',
        title: '空之境界·未来福音：不确定的才是未来',
        body: '<h3>空之境界·未来福音：不确定的才是未来</h3><p>我们都曾幻想如果自己能预测未来，将是如何的奇妙和有趣。而《空之境界·未来福音》就告诉我们，能预测的，就不叫做未来。</p><p>影片告诉我们，未来视有两种：简单的看到未来（未来预测）和能看到未来以及到达未来的途径（未来测定）。</p><p>前者无非是一种信息高速处理能力，即通过当前的信息判断未来可能会发生的事情，其实说起来就是一种推演。逻辑思维其实也能做到，只是拥有这种未来视的人省略或者说快速跳过了逻辑思考的环节，直接将结果呈现在自己眼前，仿佛自己看到了未来，其实看到的只是自己推想的结果。</p><p>而关于后者，橙子小姐的原话：“如果前者是一种特权，后者就是一种越权了。”这种预测未来并且能真的将事件带到未来的行为就像开了上帝之眼，等于不但能一眼看到推演的结果还能一瞬间明白推演的全过程，甚至将每个人的每个细节都能预测清楚。影片中有一段比较明确的表现预测行为的镜头：预测者右眼看到两仪式被炸弹炸得血肉模糊的场景，左眼看着两仪式现在的行为，当左右两眼的两仪式重合时，预测者按下了炸弹按钮。正如他自己所说，就像数学公式一般，填入正确的数字自然会出现正确的结果。未来预测是看到了所有可能的未来的其中一种，这种未来测定，通过自己的行为排除了大部分可能的结果，只留下自己看见的结果。</p><p>如果仅仅到这里，影片最多是一种科普，因为这两种能力本身，都只不过是人自身能力的延伸罢了。而空之境界的境界所在，就在于用“空”去看待这些能力。</p><p>影片中有两个例子：拥有简单未来视的小女孩和拥有特别未来视的炸弹魔。两个人都认为自己很特殊，而黑桐干也和两仪式这一对分别告诉他们：其实你们只是正常人。</p><p>在小女孩那里，她既害怕自己能看见未来本身，也害怕自己改变不了未来（主要因为她看到的未来大多是悲伤的事）。黑桐告诉她，这不是什么特殊的事情，每个人都是看着未来，活在当下的。悲伤的事情就是一种警告，意思是：“请为了不要出现这些悲伤的事情而努力。”试着去看更远的事情，虽然这会很辛苦。其实这样说，就是一种解脱。比如我们高中时候想象自己坐在大学课堂，这为什么不是一种预测呢？我们努力上了大学，自然就会坐在课堂。</p><p>对小女孩很温柔，不代表对炸弹魔也如此。两仪式杀死了炸弹魔看到的未来，也杀死了他的能力。“未来正因为不存在而可怕，而一旦被测定，也就有了形状，也就可以杀死。”式姐因为自己能杀死一切有形状的东西而干掉了炸弹魔，这也许不大好理解，因为无论我们怎么解释，都会落入时间的悖论之中。比如炸弹魔要杀掉你，这个未来被测定了，而你知道了这个结果，很难说“你知道”这件事在不在被测定的范围中。所以，对于这种类似于初等物理无法理解的高等物理题，合理的办法就是用高等物理去干掉他：就是式姐的能力。对于异能，就要用异能去攻克，我们只能于情感上大致理解，而不能从现有逻辑水平上去推理。</p><p>从这里引申一点，这很类似于算卦，道家所讲的推演、金口玉言，佛家的天眼、闭口禅之类的。其实所谓推演，就是未来预测，只是在推演中能把种种细节考虑到所以格外准确。但是，有一种说法是，这种推演有一个前提：不牵扯自己。当自己置身事外的时候，推演才是准确的，而当自己受到牵连，推演只是一片混沌。毕竟，自己客观的推演自己主观会怎么样，这就是一种妄心了。也从来没听说过金口玉言说自己怎么样的。</p><p>忽略掉最后一点逻辑上的问题，《未来福音》为我们展现的就是：未来因不确定而美丽，我们因憧憬未来而珍惜现在。对我们自己，抛弃无端的妄想，把握我们的现在，预测才会成真。</p>',
        play_count: '2.3W',
        star_count: '0.5K',
        created_at: '2017-01-28',
        type: 'text',
      },
      topCommentField: '',
      childCommentField: '',
      avatar_1: faker.image.avatar(60, 60),
      avatar_2: faker.image.avatar(60, 60),
      avatar: faker.image.avatar
    }
  },
  methods: {
    handleStar (e) {
      e.currentTarget.style.color = '#ff709f'
    },
    handleTopReply() {
      this.detailData.commentList.unshift({
        avatar: this.$store.state.userAvatar,
        name: '毕业后你不是我的',
        body: this.topCommentField,
        created_at: '刚刚',
      })
      this.topCommentField = '';
    },
    handleReply(index) {
      this.detailData.commentList[index].children.push({
        avatar: this.$store.state.userAvatar,
        name: '毕业后你不是我的',
        body: this.detailData.commentList[index].model
      })
      this.detailData.commentList[index].model = ''
    },
  }
}
</script>

<style lang="scss">
@import '~styles/modules/vars';
@import '~styles/mixins';


#detail {
  &+.footer {
    padding-top: 100px;
  }
  .header {
    min-height: 0;
    background: url(~img/search-header.png) center top/contain no-repeat;
    .info-wrapper {
      overflow: hidden;
      padding-left: 150px;
      padding-right: 150px;
      margin: 200px auto;
      color: $white;
      .video-detail, .author-detail {
        width: calc((100% - 60px) / 2);
        float: left;
      }
      .video-detail {
        h3 {
          padding-bottom: 10px;
          border-bottom: 2px solid #999;
          font-weight: normal;
          font-size: 20px;
        }
        .info-bar {
          @include reset-list;
          margin-bottom: 20px;
          margin-top: 10px;
          li {
            // background:
            // TODO: Icon
            font-size: 16px;
            margin-left: 10px;
            padding-left: 26px;
            &:nth-child(1) {
              margin-left: 0;
              background: url(~img/icon-play-white.png) left center / contain no-repeat;
            }
            &:nth-child(2) {
              background: url(~img/icon-star-white.png) left center / contain no-repeat;
            }
          }
          p {
            display: block;
            margin-bottom: 40px;
          }
        }
      }
      .author-detail {
        margin-left: 60px;
        .avatar {
          // float: left;
        }
        .right-box {
          display: inline-block;
          vertical-align: top;
          margin-left: 10px;
          width: calc(100% - 80px);
          h4 {
            font-weight: normal;
            font-size: 20px;
            margin-bottom: 10px;
          }
          p {
            font-size: 16px;
          }
        }
      }
    }
  }
  main {
    position: relative;
    .inner-wrapper {
      margin: 0 auto;
      background: $deepBlue;
      width: 1200px;
      margin-top: -180px;
      padding-bottom: 20px;
      .text-detail {
        padding: 40px 116px;
        color: #bbb;
        h3 {
          margin: 20px 0;
          font-size: 24px;
        }
        p {
          display: block;
          margin: 10px 0;
        }
      }
      .comment-wrapper {
        width: 58%;
        margin: 30px auto;
        color: $white;
        // common
        .reply-bar {
          padding-top: 10px;
          padding-bottom: 10px;
          border-bottom-left-radius: 6px;
          border-bottom-right-radius: 6px;
        }
        >.reply-bar {
          border-radius: 6px;
          padding-left: 30px;
          padding-right: 30px;
          height: 56px;
          i {
            font-size: 20px;
            margin-left: 20px;
            vertical-align: middle;
            cursor: pointer;
            position: relative;
            top: -3px;
            &:first-child {
              margin-left: 0
            }
          }
          button {
            // float: right;
            // width: 100px;
            font-size: 18px;
            position: relative;
            top: 2px;
          }
          .icon-wrapper {
            display: inline-block;
            position: relative;
            top: -7px;
            // float: left;
            width: 100px;
          }
          input {
            // width: 200px;
            width: calc(100% - 240px);
            position: relative;
            top: -1px;
            height: 40px;
            min-width: 440px;
            margin-left: 20px;
            margin-right: 10px;
          }
        }
        .avatar {
          vertical-align: top;
        }

        .comment-list {
          list-style: none;
          margin-left: 0;
          padding: 0;
          .comment-item {
            margin: 25px 0 20px;
            .comment-content {
              display: inline-block;
              width: calc(100% - 79px);
              margin-left: 10px;
              h3 {
                font-size: 20px;
              }
              .time {
                margin-top: 12px;
                font-size: 16px;
                color: #ccc;
              }
              .comment-card {
                @include radius-card;
                padding: 0;
                margin-top: 20px;
                color: #000;
                >p {
                  padding: 20px;
                }
                .reply-bar {
                  overflow: hidden;
                  input, button {
                    float: right;
                  }
                  input {
                    width: 300px;
                    margin-right: 20px;
                  }
                  button {
                    // vertical-align: middle;
                    // float: right;
                    position: relative;
                    top: 4px;
                    margin-right: 20px;
                    font-size: 18px;
                  }
                }
              }
              .child-comment {
                list-style: none;
                margin-left: 0;
                margin-top: 15px;
                >li {
                  margin-bottom: 15px;
                }
                .avatar {
                  width: 40px;
                  height: 40px;
                }
                .childComment-content {
                  display: inline-block;
                  margin-left: 10px;
                  h4 {
                    color: $blue;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
