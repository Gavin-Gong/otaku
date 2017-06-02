<template>
  <div id="profile">
    <x-header>
      <ul class="profile-card-list">
        <li>
          <img src="~img/avatar.jpg" alt="" class="avatar">
          <div class="info-wrapper">
            <h3>毕业后你不是我的 <x-icon type="man" color="#f44336"></x-icon></h3>
            <p>忍受不了变得毫无用处的人是我</p>
          </div>
        </li>
        <li>
          <ul>
            <li v-for="item in tagList" class="tag" :style="{color: item.color}"><x-icon type="tag"></x-icon> {{item.title}}</li>
          </ul>
        </li>
      </ul>
    </x-header>
    <main>
      <div class="inner-wrapper">
        <section class="msg">
          <div class="title-bar">
            <x-icon type="message"></x-icon> &nbsp;&nbsp;我的消息
          </div>
          <div class="msg-content">
            <div class="message">
              <h3>私信</h3>
              <div class="reply-user">
                <img :src="leftAvatar" alt="" class="avatar">
                <span>
                  <h4>樱满集</h4>
                  <p>向大佬低头</p>
                </span>
              </div>
              <div class="reply-box">
                <ul>
                  <li v-for="item in replyList" :class="[item.is_me ? 'is-me' : '']">{{ item.body }}</li>
                </ul>
                <div class="reply-bar">
                  <input v-model="replyField">
                  <button @click="replyMsg">回复</button>
                </div>
              </div>
            </div>
            <div class="reply">
              <h3>回复</h3>
              <ul class="reply-list">
                <li v-for="(item, index) in replyList2">
                  <img :src="item.avatar" alt="" class="avatar">
                  <div class="content-wrapper">
                    <h4>{{item.name}}</h4>
                    <p>{{item.body}}</p>
                    <ul class="bottom-bar">
                      <li>{{item.created_at}}</li>
                      <li class="replyMsg" @click="showReplyBar(index)">回复</li>
                      <li class="deleteMsg" @click="deleteMsg(index)">删除</li>
                    </ul>
                  </div>
                  <div class="reply-bar" :id="`reply-bar-${index}`" style="display: none">
                    <input v-model="fakeReplyField">
                    <button @click="fakeReplyMsg(index)">回复</button>
                  </div>
                </li>
                <div class="pagination-wrapper">
                  <el-pagination
                    class="pagination"
                    layout="prev, pager, next"
                    :total="50">
                  </el-pagination>
                </div>
              </ul>
            </div>
          </div>
        </section>
        <section class="star">
          <div class="title-bar">
            <x-icon type="star"></x-icon> &nbsp;&nbsp;我的收藏
          </div>
          <div class="star-content">
            <ul class="cat-list star-nav">
              <li></li>
              <li @click="handleTabChange('card')" tabindex="1"></li>
             <li @click="handleTabChange('video')" tabindex="2"></li>
              <li @click="handleTabChange('image')" tabindex="3"></li>
            </ul>
            <div class="star-card">
              <card-list class="starCard-list">
                <x-card v-for="data in filterData" :data="data"></x-card>
              </card-list>
              <div class="pagination-wrapper">
                <el-pagination
                class="pagination"
                  layout="prev, pager, next"
                  :total="10">
                </el-pagination>
              </div>
            </div>
          </div>
        </section>
        <section class="follow">
          <div class="title-bar">
            <x-icon type="following"></x-icon>   &nbsp;&nbsp;&nbsp;我的关注
          </div>
           <div class="follow-content">
             <ul class="following-list">
               <li v-for="(fuck, index) in followList">
                 <img :src="fuck.avatar" class="avatar">
                 <div class="info-wrapper">
                  <h4>{{ fuck.name }}</h4>
                  <p>{{ fuck.bio }}</p>
                 </div>
                 <el-popover
                  ref="morebtn"
                  placement="bottom"
                  width="60"
                  v-model="showPop"
                  trigger="click">
                  <i class="iconfont icon-caidan more-btn" slot="reference"></i>
                  <ul class="pop-menu">
                    <li><i class="iconfont icon-sixin"></i> <span>私信</span></li>
                    <li @click="handleUnfollow(index)"><i class="iconfont icon-guanbi"></i> <span>移除</span></li>
                  </ul>
                </el-popover>
               </li>
             </ul>
           </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import XHeader from '@/components/Header'
import XCard from '@/components/Card'
import CardList from '@/components/CardList'
import XIcon from '@/components/Icon'
import mixin from '../mixin'

export default {
  components: {
    XHeader,
    XCard,
    CardList,
    XIcon
  },
  mixins: [mixin],
  data () {
    return {
      slecOptions: [ '最新', '最热' ],
      slecVal: '最新',
      leftAvatar: this.avatar(60, 60),
      replyList: [
        { body: '向泽野势力低头', is_me: false },
        { body: '别低头了要老虚快跑吧', is_me: true },
        { body: '他跑不掉的QAQ', is_me: false },
        { body: '反水了', is_me: true }
      ],
      replyList2: [
        { body: '反正我感觉要出续作很不明智 看大河内怎么写了 写不好又要背锅', created_at: '2017-04-03', name: '迪罗木多', avatar: this.avatar(60, 60) },
        { body: '前一季，有些平淡无味。后一季，导火索点燃，铺垫接连引爆', created_at: '2017-04-02', name: '克里斯蒂娜', avatar: this.avatar(60, 60) },
        { body: '虽然确实有不对的地方，但是他只是一个高中生', created_at: '2017-04-02', name: '红A', avatar: this.avatar(60, 60) },
        { body: 'EL PSY CONGROO！！！', created_at: '2017-04-02', name: '嘟嘟噜', avatar: this.avatar(60, 60) },
        { body: '荣耀存于心，而非留于形', created_at: '2017-04-01', name: '你看到什么', avatar: this.avatar(60, 60) },
        { body: '我就想要个妖刀', created_at: '2017-04-01', name: 'gavin', avatar: this.avatar(60, 60) }
      ],
      followList: [
        { name: '瑞文', bio: '阅剑，知其主', avatar: this.avatar(60, 60) },
        { name: '疾风剑豪', bio: '长路漫漫，唯剑做伴', avatar: this.avatar(60, 60) },
        { name: '卢锡安', bio: '死亡在敲门，不，敲门的人是我', avatar: this.avatar(60, 60) },
        { name: '卫宫士郎', bio: '正义的伙伴', avatar: this.avatar(60, 60) },
        { name: '御坂美琴', bio: '常台盘中学lv4', avatar: this.avatar(60, 60) },
        { name: '白井黑子', bio: 'ou nei sa ma ', avatar: this.avatar(60, 60) },
        { name: '烬', bio: '这个舞台被我踩在脚下', avatar: this.avatar(60, 60) },
        { name: '薇恩', bio: '陷入黑暗中的人们', avatar: this.avatar(60, 60) }
      ],
      tagList: [
        { color: '#f44336', title: '天然黑' },
        { color: '#543210', title: '中二' },
        { color: '#f72532', title: '星月厨' },
        { color: '#fe7395', title: '钉宫理惠' },
        { color: '#0073f3', title: '休闲党' },
        { color: '#22cc33', title: 'saber' },
        { color: '#2233ff', title: '车夫党' }
      ],
      cardListData: [
        { type: 'card', author: 'orign', title: '95年UP主带你回顾童年', desc: '95年UP主带你回顾童年', star_count: '2.2K', play_count: '3.3K', created_at: '2017-03-06', banner: 'http://opazkqh2d.bkt.clouddn.com/17-6-1/16482897.jpg' },
        { type: 'card', author: '3酱', title: '【3酱@四谎】樱雨星尘化作你', desc: '【3酱@四谎】樱雨星尘化作你', star_count: '2.6W', play_count: '6.2W', created_at: '2017-02-07', banner: 'http://opazkqh2d.bkt.clouddn.com/17-5-31/43447571.jpg' },
        { type: 'video', author: '谁知道呢', title: '【钢琴】那些年QQ空间里的背景...', desc: '【钢琴】那些年QQ空间里的背景音乐', star_count: '1.9W', play_count: '3.6W', created_at: '2017-03-15', banner: 'http://opazkqh2d.bkt.clouddn.com/17-5-31/53134716.jpg' },
        { type: 'image', author: 'leec', title: '诚实吐槽Fate/Zero', desc: '诚实吐槽Fate/Zero', star_count: '0.3K', play_count: '1.2K', created_at: '2017-04-06', banner: 'http://opazkqh2d.bkt.clouddn.com/17-5-31/53134716.jpg' },
        { type: 'video', author: 'gavin', title: '【Re:CREATORS】向世界送上...', desc: '【Re:CREATORS】向世界送上军服', star_count: '1.6W', play_count: '4.2W', created_at: '2016-05-06', banner: 'http://opazkqh2d.bkt.clouddn.com/17-5-31/47659813.jpg' },
        { type: 'image', author: '阿诺', title: '最好的过去', desc: '最好的过去', star_count: '12W', play_count: '23W', created_at: '2016-08-12', banner: 'http://opazkqh2d.bkt.clouddn.com/17-5-31/25497058.jpg' },
        { type: 'card', author: 'renqianhan', title: '原来,你已经不在我身旁', desc: '【虐心】原来,你已经不在我身旁', star_count: '1.2K', play_count: '2.6K', created_at: '2016-11-06', banner: 'http://opazkqh2d.bkt.clouddn.com/17-5-31/86690592.jpg' },
        { type: 'image', author: '你猜', title: '距离与错过【秒五】', desc: '距离与错过，秒速五厘米', star_count: '2.9K', play_count: '1.2W', created_at: '2017-02-16', banner: 'http://opazkqh2d.bkt.clouddn.com/17-6-1/51672819.jpg' },
        { type: 'card', author: '红A', title: 'd区点击最高的10个视频', desc: '【排行向】d区点击最高的100个视频', star_count: '1.6W', play_count: '7.8W', created_at: '2017-04-06', banner: require('img/card.png') }
      ],
      replyField: '',
      fakeReplyField: ''
      // showPop: true
    }
  },
  methods: {
    replyMsg () {
      this.replyList.push({
        body: this.replyField, is_me: true
      })
      this.replyField = ''
    },
    deleteMsg (index) {
      this.replyList2.splice(index, 1)
    },
    showReplyBar (index) {
      let barStyle = document.getElementById(`reply-bar-${index}`).style
      if (barStyle.display === 'none') {
        barStyle.display = 'block'
      } else {
        barStyle.display = 'none'
      }
    },
    fakeReplyMsg (index) {
      this.$message.success('回复成功')
      document.getElementById(`reply-bar-${index}`).style.display = 'none'
      this.fakeReplyField = ''
    },
    handleUnfollow (index) {
      this.followList.splice(index, 1)
      this.showPop = false
    }
  }
}
</script>

<style lang="scss">
@import '~styles/modules/vars';
@import '~styles/mixins';
@mixin avatar {
  width: 60px;
  height: 60px;
  border-radius: 50px;
}

@mixin title-bar {

}
.pop-menu {
  @include reset-list;
  list-style: none;
  li {
    display: block;
    padding: 10px 10px;
    cursor: pointer;
    font-size: 16px;
    i {
      font-size: 20px;
      vertical-align: top;
      width: auto;
      height: auto;
      line-height: 1;
    }
    span {
      vertical-align: top;
    }
  }
}
.avatar {
  @include avatar();
}
.reply-bar {
  padding: 6px;
  // padding-left: 30px;
  background: $green;
  input {
    height: 30px;
    border-radius: 50px;
    border: none;
    background: #fff;
    padding: 0px 10px;
    &:focus {
      outline: none;
    }
  }
  [id^=reply-bar-] {
    display: none;
  }
  button {
    outline: none;
    border: none;
    background: transparent;
    color: #fff;
    cursor: pointer;
  }
}
.pagination-wrapper {
  text-align: center;
  margin-top: 20px;
  .pagination {
    display: inline-block;
    margin: auto;
    > * {
      margin-left: 10px;
      border-radius: 5px;
    }
    .number {
      margin-left: 10px;
      border-radius: 5px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
}
#profile + .footer {
  padding-top: 100px;
}
#profile {
  .header {
    min-height: 600px;
    overflow: hidden;
    z-index: 1;
    background: url(~img/music-header.png) center top/contain no-repeat, url(~img/recommend.png) center bottom/cover no-repeat;
    .profile-card-list {
      @include reset-list;
      position: absolute;
      top: 300px;
      left: 50%;
      transform: translateX(-50%);
      min-width: 1300px;
      padding: 0 50px;
      overflow: hidden;
      >li {
        @include radius-card();
        height: 140px;
        width: 580px;
        // height: 140px;
        margin-left: 40px;
        float: left;
        .avatar {
          @include avatar;
        }
      }
      >li:first-child {
        margin-left: 0;
        padding: 30px 20px;
        .avatar {
          width: 80px;
          height: 80px;
        }
        .info-wrapper {
          vertical-align: top;
          display: inline-block;
          margin-left: 20px;
          h3 {
            margin-top: 10px;
            margin-bottom: 30px;
          }
        }
      }
      >li:last-child {
        padding: 30px 20px;
        ul {
          @include reset-list;
          li.tag {
            padding: 10px;
            border-radius: 5px;
            &:nth-child(1) {
              color: #f44336;
            }
            i {
              font-weight: bold;
            }
          }
        }
      }
    }
  }
  main {
    .inner-wrapper {
      width: 1300px;
      position: relative;
      top: -100px;
      margin: 0 auto;
      padding: 60px 70px;
      color: $white;
      background: $deepBlue;
      z-index: 22;
      // common style
      .title-bar {
        border-bottom: 3px solid $green;
        width: 170px;
        padding-bottom: 10px;
        margin-bottom: 60px;
        font-size: 28px;
        i {
          font-size: 28px;
          vertical-align: baseline;
        }
      }
      .content-wrapper {

      }
      .msg {
        .message, .reply {
          display: inline-block;
          color: #000;
          h3 {
            color: $white;
            margin-bottom: 10px;
            font-size: 28px;
            font-weight: normal;
          }
        }
        .message {
          float: left;
          width: 300px;
          margin-right: 30px;
          .reply-user {
            @include radius-card();
            span {
              display: inline-block;
              margin-left: 14px;
              vertical-align: top;
              h4 {
                margin: 0;
                font-size: 28px;
                font-weight: normal;
              }
              p {
                margin: 10px 0 0;
              }
            }
          }
          .reply-box {
            @include radius-card(#fff);
            padding: 0;
            >ul {
              list-style: none;
              padding: 10px;
            }
            li {
              width: 100%;
              border-left: 3px solid $green;
              border-right: none;
              text-align: left;
              padding-left: 10px;
              margin-bottom: 10px;
            }
            li.is-me {
              border-right: 3px solid $green;
              border-left: none;
              text-align: right;
              padding-right: 10px;
            }
            .reply-bar {
              border-bottom-left-radius: 6px;
              border-bottom-right-radius: 6px;
              width: 100%;
              padding-left: 80px;
              // padding-right: 50px;
              * {
                text-align: center;
              }
            }

          }
        }
        .reply {
          marzgin-left: 300px;
          // width: 100%;
          // min-width: 600px;
          display: block;
          margin-left: 360px;
          .reply-list {
            @include radius-card();
            margin-top: 0;
            list-style: none;
            margin-left: 0;
            padding: 20px 0px;
            // min-width: 600px;
            >li {
              margin-bottom: 40px;
              // margin-left: 40px;
              // margin-right: 40px;
              cursor: pointer;
              .avatar {
                vertical-align: top;
                float: left;
                margin-left: 40px;
              }
              .reply-bar {
                padding-left: 190px;
                input {
                  width: 400px;
                }
              }
              .content-wrapper {
                // display: inline-block;
                margin-left: 120px;
                margin-right: 40px;
                h4 {
                  // margin-bottom: 4px;
                  font-weight: normal;
                  color: $blue;
                }
                >p {
                  display: block;
                  margin: 10px 0;
                  font-size: 18px;
                }
                .bottom-bar {
                  @include reset-list;
                  padding-right: 10px;
                  margin-bottom: 10px;
                  width: 100%;
                  color: #333;
                  font-size: 16px;
                  .deleteMsg, .replyMsg {
                    float: right;
                    margin-left: 10px;
                    user-select: none;

                  }
                  .replyMsg {
                    &:hover {
                      color: $blue;
                    }
                  }
                  .deleteMsg {
                    &:hover {
                      color: #f44336;
                    }
                  }
                }
              }
              [id^=reply-bar] {
                input {
                  // width: 700px;
                }
              }
            }
          }
        }
      }
      .star {
        .star-content {
          overflow: hidden;
          ul.star-nav {
            list-style: none;
            padding: 0;
            margin: 0;
            // margin-left: 20px;
            float: left;
            li {
              width: 60px;
              height: 60px;
              margin-bottom: 20px;
              display: block;
            }
          }
          .star-card {
            @include radius-card;
            padding-bottom: 40px;
            margin-left: 160px;
            .starCard-list {
              list-style: none;
              overflow: hidden;
              padding: 30px 40px;
              // padding: 0px;

              background: transparent;
              >ul {
                overflow: hidden;
                margin-left: -50px;
              }
              >ul>li {
                width: calc((100% - 105px) / 2);
                margin-left: 50px;
                margin-bottom: 30px;
                height: 168px;
                background-size: cover!important;
              }
            }
            .pagination-wrapper {
              margin-top: -20px;
            }
          }

        }
      }
      .follow {
        .follow-content {
          @include radius-card;
          padding: 10px;
          .following-list {
            @include reset-list;
            padding-top: 20px;
            .avatar {
              width: 40px;
              height: 40px;
            }
            >li {
              position: relative;
              width: calc((100% - 60px) / 3);
              margin-left: 20px;
              margin-bottom: 30px;
              padding: 10px;
              height: 70px;
              border: 1px solid #ccc;
              border-radius: 6px;
              color: #000;
              cursor: pointer;
              .more-btn {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 20px;
                font-size: 30px;
                // font-weight: bold;
                color: #333;
                width: auto;
                height: auto;
                cursor: pointer;
              }
              .info-wrapper {
                vertical-align: top;
                margin-left: 20px;
                display: inline-block;
              }
              &:hover {
                box-shadow: 0 5px 10px rgba(0,0,0,.3);
              }
            }
          }
        }
      }
      .msg-content, .star-content, .follow-content {
        margin: 0 auto;
        width: 90%;
      }
      .msg, .star {
        margin-bottom: 50px;
      }
    }
  }
}
</style>
