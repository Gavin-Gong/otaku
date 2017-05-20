<template>
  <div id="profile">
    <x-header>
      <ul class="profile-card-list">
        <li>
          <img src="~img/avatar.jpg" alt="" class="avatar">
          <div class="info-wrapper">
            <h3>my name <x-icon type="man" color="#f44336"></x-icon></h3>
            <p>忍受不了变得毫无用处的人是我</p>
          </div>
        </li>
        <li>
          <ul>
            <li v-for="n in 6" class="tag"><x-icon type="tag"></x-icon> 天然黑</li>
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
                <img src="~img/avatar.jpg" alt="" class="avatar">
                <span>
                  <h4>name</h4>
                  <p>低头吧</p>
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
                  <img src="~img/avatar.jpg" alt="" class="avatar">
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
            <ul class="star-nav">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div class="star-card">
              <card-list class="starCard-list">
                <x-card v-for="n in 6"></x-card>
              </card-list>
              <div class="pagination-wrapper">
                <el-pagination
                  layout="prev, pager, next"
                  :total="50">
                </el-pagination>
              </div>
            </div>
          </div>
        </section>
        <section class="follow">
          <div class="title-bar">
            <x-icon type="like"></x-icon> 我的关注
          </div>
           <div class="follow-content">
             <ul class="following-list">
               <li v-for="n in 9">
                 <img src="~img/avatar.jpg" class="avatar">
                 <div class="info-wrapper">
                  <h4>my name</h4>
                  <p>less is morw</p>
                 </div>
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

export default {
  components: {
    XHeader,
    XCard,
    CardList,
    XIcon
  },
  data () {
    return {
      slecOptions: [ '最新', '最热' ],
      slecVal: '最新',
      replyList: [
        { body: 'fhiushdfui', is_me: false },
        { body: 'fsdfds', is_me: true },
        { body: 'fdsf', is_me: false },
        { body: 'fsdfsd', is_me: true }
      ],
      replyList2: [
        { body: 'dddd', created_at: '2017-02-19', avatar: '', name: 'GG' },
        { body: 'dddd', created_at: '2017-02-19', avatar: '', name: 'GG' },
        { body: 'dddd', created_at: '2017-02-19', avatar: '', name: 'GG' },
        { body: 'dddd', created_at: '2017-02-19', avatar: '', name: 'GG' },
        { body: 'dddd', created_at: '2017-02-19', avatar: '', name: 'GG' },
        { body: 'dddd', created_at: '2017-02-19', avatar: '', name: 'GG' }
      ],
      replyField: '',
      fakeReplyField: ''
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
      this.$message.success('回复成功!')
      document.getElementById(`reply-bar-${index}`).style.display = 'none'
      this.fakeReplyField = ''
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
.avatar {
  @include avatar();
}
.reply-bar {
  padding: 6px;
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
  }
}
#profile {
  .header {
    min-height: 600px;
    overflow: hidden;
    background: url(~img/music-header.png) center top/contain no-repeat, url(~img/recommend.png) center bottom/cover no-repeat;
    .profile-card-list {
      @include reset-list;
      position: absolute;
      top: 300px;
      left: 50%;
      transform: translateX(-50%);
      min-width: 820px;
      overflow: hidden;
      >li {
        @include radius-card();
        width: 400px;
        margin-left: 20px;
        float: left;
        .avatar {
          @include avatar;
        }
      }
      >li:first-child {
        margin-left: 0;
        padding: 20px;
        .info-wrapper {
          display: inline-block;
          margin-left: 20px;
          h3 {
            margin-top: 0;
          }
        }
      }
      >li:last-child {
        ul {
          @include reset-list;
          li.tag {
            padding: 10px;
            border-radius: 5px;
          }
        }
      }
    }
  }
  main {
    .inner-wrapper {
      width: 1200px;
      margin: 0 auto;
      padding: 40px;
      color: $white;
      background: $deepBlue;

      // common style
      .title-bar {
        border-bottom: 3px solid $green;
        width: 120px;
        padding-bottom: 10px;
        margin-bottom: 20px;
        font-size: 20px;
        i {
          font-size: 22px;
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
            padding: 20px 0;
            // min-width: 600px;
            >li {
              margin-bottom: 10px;
              cursor: pointer;
              .avatar {
                vertical-align: top;
                float: left;
                margin-left: 10px;
              }
              .content-wrapper {
                // display: inline-block;
                margin-left: 80px;
                h4 {
                  margin-bottom: 4px;
                }
                .bottom-bar {
                  @include reset-list;
                  padding-right: 10px;
                  margin-bottom: 10px;
                  width: 100%;
                  .deleteMsg, .replyMsg {
                    float: right;
                    margin-left: 10px;
                  }
                  .deleteMsg {
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
              &:nth-child(1) {
                background: url(~img/music-filter.png) center / contain no-repeat;
              }
              &:nth-child(2) {
                background: url(~img/music-ctx-bar.png) center / contain no-repeat;
              }
              &:nth-child(3) {
                background: url(~img/music-matrix.png) center / contain no-repeat;
              }
              &:nth-child(4) {
                background: url(~img/music-play-bar.png) center / contain no-repeat;
              }
            }
          }
          .star-card {
            @include radius-card;
            margin-left: 160px;
            .starCard-list {
              list-style: none;
              overflow: hidden;
              padding: 20px 30px;
              // padding: 0px;

              background: transparent;
              >ul {
                overflow: hidden;
                margin-left: -30px;
              }
              >ul>li {
                width: calc((100% - 60px) / 2);
                margin-left: 30px;
                margin-bottom: 30px;
              }
            }
          }

        }
      }
      .follow {
        .follow-content {
          @include radius-card;
          .following-list {
            @include reset-list;
            >li {
              width: calc((100% - 60px) / 3);
              margin-left: 20px;
              margin-bottom: 20px;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 6px;
              color: #000;
              cursor: pointer;
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
