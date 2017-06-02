<template>
  <div id="music">
    <x-header :background="headerBg">
      <div class="music-banner">
        <ul>
          <li v-for="item in data.list" @click="$router.push({name: 'Detail', query: {id: 3}})">{{item}} <i class="icon-music-play"></i></li>
        </ul>
        <div class="desc-card">
          <p>{{data.intro}}</p>
          <div><i class="iconfont icon-chakan"></i></div>
        </div>
      </div>
    </x-header>
        <main class="music-main" role="main">
      <section class="playround">
        <section class="op-bar">
          <div class="status">
            <el-select v-model="slecVal" placeholder="请选择" @change="handleSort">
              <el-option
                v-for="item in slecOptions"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
            <i :class="['iconfont', `icon-${pageType}`]"></i>
            <!--<i class="iconfont icon-qiehuan"></i>-->
          </div>
          <ul class="cat-list">
            <li tabindex="-1"></li>
            <li @click="handleTabChange('card', $event)" tabindex="0"></li>
            <li @click="handleTabChange('video', $event)" tabindex="2"></li>
            <li @click="handleTabChange('image', $event)" tabindex="3"></li>
          </ul>
        </section>
        <section class="matrix-layout">
          <card-list>
            <card v-for="item in filterData" :data="item"></card>
          </card-list>
        </section>
        <section class="pagination-wrapper">
          <el-pagination
            class="pagination"
            layout="prev, pager, next"
            :total="10">
          </el-pagination>
        </section>
      </section>
    </main>
  </div>
</template>

<script>
import XHeader from '@/components/Header'
import Card from '@/components/Card'
import CardList from '@/components/CardList'
import _ from 'lodash'
import mixin from '../mixin'
import data from '../data'

export default {
  components: {
    XHeader,
    Card,
    CardList
  },
  mixins: [mixin],
  data () {
    return {
      slecOptions: [ '最新', '最热', '排行' ],
      slecVal: '最新',
      cardListData: _.shuffle(data.cardListData).slice(0, 9),
      data: {
        list: [
          '钢琴版',
          'Fate UBW 现场版 ',
          'MAD 手书',
          'pinao cover'
        ],
        intro: 'Aimer第3张全长专辑《DAWN》是“不眠之夜物语”的最终章，穿越不眠之夜，遇见午夜的太阳，然后，终于迎来真'
      },
      music_data: {
        list: [
          '钢琴版',
          'Fate UBW 现场版 ',
          'MAD 手书',
          'pinao cover'
        ],
        intro: 'Aimer第3张全长专辑《DAWN》是“不眠之夜物语”的最终章，穿越不眠之夜，遇见午夜的太阳，然后，终于迎来真'
      },
      comment_data: {
        list: [
          '完结有槽点，完美石头门',
          'Fate zero ',
          '命运石之门音乐合集',
          '命运石之门0'
        ],
        intro: '【石头门】非常巧妙的编剧把如此庞大而且繁杂的线索整合，又在情绪流上牢牢的把控住读者，是不可多得的好作品'
      },
      mad_data: {
        list: [
          '虐心向/MAD',
          '燃向-为谁而战 ',
          '言叶之庭的前世今生',
          '新海诚'
        ],
        intro: '【四月谎】人只有在最伤心的时候，才知道真正需要的是谁的陪伴。只是很多时候，意识到时已为时已晚'
      },
      tongren_data: {
        list: [
          '信仰是为了虚幻的人',
          '此生无悔入东方',
          '来世愿生幻想乡',
          '东方/MMD'
        ],
        intro: '东方同人音乐嘉年华（17/03/20）网易云→music.163.com/#/playlist?id=52804225'
      },
      type: 'music'
    }
  },
  created () {
    console.log('here')
  },
  computed: {
    headerBg () {
      if (this.pageType === 'music') {
        return `background: url(${require('img/music-header.png')}) center top/contain no-repeat, url(${require('img/music-banner.png')}) center bottom/cover no-repeat`
      } else if (this.pageType === 'comment') {
        return `background: url(${require('img/music-header.png')}) center top/contain no-repeat, url(http://opazkqh2d.bkt.clouddn.com/17-6-2/8059730.jpg) center bottom/cover no-repeat`
      } else if (this.pageType === 'mad') {
        return `background: url(${require('img/music-header.png')}) center top/contain no-repeat, url(http://opazkqh2d.bkt.clouddn.com/17-6-2/2036231.jpg) center bottom/cover no-repeat`
      } else if (this.pageType === 'tongren') {
        return `background: url(${require('img/music-header.png')}) center top/contain no-repeat, url(http://opazkqh2d.bkt.clouddn.com/17-6-2/55416091.jpg) center bottom/cover no-repeat`
      } else {
        return ''
      }
    },
    pageType () {
      if (this.$route.query.type) {
        return this.$route.query.type
      } else {
        return 'music'
      }
    }
  },
  watch: {
    $route () {
      // this.$forceUpdate()
      console.log('update')
      this.cardListData = _.shuffle(data.cardListData).slice(0, 9)
      if (this.$route.query.type) {
        if (this.$route.query.type === 'mad') {
          this.data = this.mad_data
        } else if (this.$route.query.type === 'tongren') {
          this.data = this.tongren_data
        } else if (this.$route.query.type === 'comment') {
          this.data = this.comment_data
        } else if (this.$route.query.type === 'music') {
          this.data = this.music_data
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '~styles/mixins';
@import '~styles/modules/vars';
#music {
  // background: #ccc;
  .header {
    background: url(~img/music-header.png) center top / contain no-repeat,
    url(~img/music-banner.png) center bottom / cover no-repeat;
    min-height: 700px;
    text-align: center;
    .music-banner {
      margin-top: 240px;
      >ul {
        display: inline-block;
        @include reset-list;
        margin: 0;
        li {
          display: block;
          color: $white;
          width: 250px;
          padding: 14px 20px;
          border: 1px solid rgba(255,255,255,.3);
          cursor: pointer;
          transition: all .5s ease-in-out;
          .icon-music-play {
            float: right;
            background: url('~img/music-play.png') center center / contain no-repeat;
          }
          &:hover {
            background: $orange;
            box-shadow: 0 5px 10px rgba(0,0,0,.5);
            transition: all .2s ease-out;
            border: none;
          }
        }
      }
    }
    .desc-card {
      width: 250px;
      // max-height: 172px;
      margin-left: 40px;
      display: inline-block;
      vertical-align: top;
      text-align: left;
      background: $white;
      padding: 20px;
      p {
        margin-bottom: 0;
      }
      div {
          height: 40px;
          width: 40px;
          float: right;
          background: $green;
          border-radius: 50%;
          text-align: center;
          box-shadow: 0 5px 10px $green;
          cursor: pointer;
        i {
          font-size: 18px;
          vertical-align: top;
          color: #fff;
          line-height: 40px;
        }
      }
    }
  }
  .music-main {
    position: relative;
    .playround {
      position: relative;
      // min-height: 1100px;
      margin: auto;
      width: 1300px;
      background: $deepBlue;
      padding-bottom: 40px;
    }
    .op-bar {
      position: absolute;
      top: -28px;
      width: 100%;
      overflow: hidden;
      .status {
        display: inline-block;
        position: relative;
        // background: #fff;
        // border-radius: 100px;
        padding: 12px 40px;
        height: 50px;
        margin-left: 60px;
        vertical-align: middle;
        span {
          font-size: 22px;
          line-height: 1;
        }
        i {
          position: absolute;
          top: 20px;
          vertical-align: middle;
          color: $blue;
          font-size: 20px;
          background: transparent;
          text-shadow: 0 5px 10px rgba(0,0,0,.5);
        }
        i:nth-child(2) {
          left: 60px;
        }
        i:last-child {
          right: 60px;
          // z-index: -1;
        }
      }
      ul.cat-list {
        @include reset-list;
        float: right;
        margin-right: 60px;
        li {
          background: url(~img/music-play-bar.png) center / contain no-repeat;
          width: 60px;
          height: 60px;
          margin-left: 20px;
          &:focus {
            background: url(~img/music-play-bar.png) center / contain no-repeat;
            border: none;
            outline: none;
          }
          cursor: pointer;
        }
        li:nth-child(1) {
          background: url(~img/music-filter.png) center / contain no-repeat;
        }
        li:nth-child(2) {
          background: url(~img/card-blue.png) center / 35% no-repeat, url(~img/opbar-bg-white.png) center / contain no-repeat;
          &:focus {
            background: url(~img/card-white.png) center / 35% no-repeat, url(~img/opbar-bg-blue.png) center / contain no-repeat;
          }
        }
        li:nth-child(3) {
          background: url(~img/play-blue.png) center / 35% no-repeat, url(~img/opbar-bg-white.png) center / contain no-repeat;
          &:focus {
            background: url(~img/play-white.png) center / 35% no-repeat, url(~img/opbar-bg-blue.png) center / contain no-repeat;
          }
        }
        li:nth-child(4) {
          background: url(~img/image-blue.png) center / 35% no-repeat, url(~img/opbar-bg-white.png) center / contain no-repeat;
          &:focus {
            background: url(~img/image-white.png) center / 35% no-repeat, url(~img/opbar-bg-blue.png) center / contain no-repeat;
          }
        }
      }
    }
    .matrix-layout {
      padding-top: 30px;
      // height: 1000px;
      overflow: hidden;
      margin: 0 auto;
      .card-collection {
        background: transparent;
        >ul {
          margin-left: -30px;
        }
        >ul>li {
          margin-left: 30px;
          margin-bottom: 30px;
        }
      }
    }
    .pagination-wrapper {
      margin-bottom: 40px;
    }
  }
}

</style>
