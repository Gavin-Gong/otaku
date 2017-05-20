<template>
  <div id="detail">
    <x-header>
      <div class="info-wrapper">
        <div class="video-detail">
          <h3>宅语漫谈 细品《Code Geass 反叛的鲁路修》-混沌与秩序</h3>
          <ul class="info-bar">
            <li>1236</li>
            <li>1.2k</li>
            <li>2017-03-21</li>
          </ul>
        </div>
        <div class="author-detail">
          <img src="~img/avatar.jpg" alt="" class="avatar">
          <div class="right-box">
            <h4>琉璃 <x-icon type="female" color="#ff67a0"></x-icon></h4>
            <p>授人以鱼不如授人以渔，那么人人会渔之后，原渔夫会如何？世界又会如何？</p>
          </div>
        </div>
      </div>
    </x-header>
    <main>
      <div class="inner-wrapper">
        <!--TODO: video link-->
        <embed height="615" width="100%" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="//static.hdslb.com/miniloader.swf" flashvars="aid=372233&page=1" pluginspage="//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>
        <div class="comment-wrapper">
          <div class="reply-bar">
            <div class="icon-wrapper">
              <x-icon type="share"></x-icon>
              <x-icon type="star1" @click.native="handleStar($event)"></x-icon>
            </div>
            <input type="text" v-model="topCommentField">
            <button @click="handleTopReply">评论</button>
          </div>
          <ul class="comment-list">
            <li class="comment-item" v-for="(comment, index) in commentList">
              <img src="~img/avatar.jpg" alt="" class="avatar">
              <div class="comment-content">
                <h3>{{comment.name}}</h3>
                <p class="time">{{comment.created_at}}</p>
                <div class="comment-card">
                  <p>{{comment.body}}</p>
                  <div class="reply-bar">
                    <button @click="handleReply(index)">回复</button>
                    <input type="text" v-model="childCommentField">
                  </div>
                </div>
                <ul class="child-comment" v-if="comment.children && comment.children.length">
                  <li v-for="item in comment.children">
                    <img src="~img/avatar.jpg" alt="" class="avatar">
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

export default {
  components: {
    XHeader,
    XCard,
    CardList,
    XIcon
  },
  data () {
    return {
      /*eslint-disable*/
      commentList: [
        { name: '阿尔', created_at: '2017-01-11', body: 'gydsgf ugd ygyfgd yugfu ygduy guyf guy', children: [
          { name: 'fd', body: 'fdfdfdfdfdfdd' },
          { name: 'fd', body: 'fdfdfdfdfdfdd' }
        ]},
        { name: 'fdsfd', created_at: '2017-01-22', body: 'dsuih gfg iud u gu ', children: [] }
      ],
      topCommentField: '',
      childCommentField: '',
    }
  },
  methods: {
    handleStar (e) {
      e.currentTarget.style.color = '#ff709f'
    },
    handleTopReply() {
      this.commentList.unshift({
        name: '我',
        body: this.topCommentField,
        created_at: '刚刚',
      })
      this.topCommentField = '';
    },
    handleReply(index) {
      this.commentList[index].children.push({
        name: '我',
        body: this.childCommentField
      })
      this.childCommentField = ''
    },
  }
}
</script>

<style lang="scss">
@import '~styles/modules/vars';
@import '~styles/mixins';


#detail {
  .header {
    min-height: 0;
    background: url(~img/search-header.png) center top/contain no-repeat;
    .info-wrapper {
      overflow: hidden;
      max-width: 800px;
      margin: 210px auto;
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
          font-size: 18px;
        }
        .info-bar {
          @include reset-list;
          margin-top: 10px;
          li {
            // background:
            // TODO: Icon
            margin-left: 10px;
            padding-left: 26px;
            &:nth-child(1) {
              margin-left: 0;
              background: url(~img/play-white.png) left center / contain no-repeat;
            }
            &:nth-child(2) {
              background: url(~img/star-white.png) left center / contain no-repeat;
            }
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
            font-size: 18px;
            margin-bottom: 10px;
          }
          p {
            font-size: 14px;
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
      width: 1000px;
      margin-top: -180px;
      padding-bottom: 20px;
      .comment-wrapper {
        width: 70%;
        margin: 30px auto;
        color: $white;
        // common
        .reply-bar {
          border-bottom-left-radius: 6px;
          border-bottom-right-radius: 6px;
        }
        >.reply-bar {
          border-radius: 6px;
          padding-left: 50px;
          padding-right: 50px;
          i {
            font-size: 19px;
            margin-left: 20px;
            vertical-align: middle;
            cursor: pointer;
            &:fisrt-child {
              margin-left: 0
            }
          }
          button {
            // float: right;
            // width: 100px;
            font-size: 16px;
          }
          .icon-wrapper {
            display: inline-block;
            position: relative;
            top: -5px;
            // float: left;
            width: 80px;
          }
          input {
            // width: 200px;
            width: calc(100% - 240px);
            margin-left: 50px;
            margin-right: 50px;
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
              .time {
                margin-top: 12px;
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
                    position: relative;
                    top: 3px;
                    margin-right: 20px;
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
