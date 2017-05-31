<template>
  <div id="music">
    <x-header>
      <div class="music-banner">
        <ul>
          <li>Piano cover <i class="icon-music-play"></i></li>
          <li>Piano cover <i class="icon-music-play"></i></li>
          <li>Piano cover <i class="icon-music-play"></i></li>
          <li>Piano cover <i class="icon-music-play"></i></li>
        </ul>
        <div class="desc-card">
          <p>Aimer第3张全长专辑《DAWN》是“不眠之夜物语”的最终章，穿越不眠之夜，遇见午夜的太阳，然后，终于迎来真</p>
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
            <i class="iconfont icon-music"></i>
            <!--<i class="iconfont icon-qiehuan"></i>-->
          </div>
          <ul class="cat-list">
            <li tabindex="-1"></li>
            <li @click="handleTabChange('card')" tabindex="1"></li>
            <li @click="handleTabChange('video')" tabindex="2"></li>
            <li @click="handleTabChange('image')" tabindex="3"></li>
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
            :total="50">
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
import mixin from '../mixin'

export default {
  components: {
    XHeader,
    Card,
    CardList
  },
  mixins: [mixin],
  data () {
    return {
      slecOptions: [ '最新', '最热' ],
      slecVal: '最新',
      cardListData: [
        { type: 'card', title: 'xx', desc: 'xx', star_count: 'xx', play_count: 'xx', created_at: 'xx', banner: require('img/card.png') },
        { type: 'card', title: 'x333', desc: 'xx', star_count: 'xx', play_count: 'xx', created_at: 'xx', banner: require('img/card.png') },
        { type: 'video', title: 'x4444', desc: 'xx', star_count: 'xx', play_count: 'xx', created_at: 'xx', banner: require('img/card.png') },
        { type: 'image', title: 'x555', desc: 'xx', star_count: 'xx', play_count: 'xx', created_at: 'xx', banner: require('img/card.png') },
        { type: 'video', title: '7777x', desc: 'xx', star_count: 'xx', play_count: 'xx', created_at: 'xx', banner: require('img/card.png') },
        { type: 'image', title: 'x88', desc: 'xx', star_count: 'xx', play_count: 'xx', created_at: 'xx', banner: require('img/card.png') },
        { type: 'card', title: '999x', desc: 'xx', star_count: 'xx', play_count: 'xx', created_at: 'xx', banner: require('img/card.png') },
        { type: 'image', title: '000x', desc: 'xx', star_count: 'xx', play_count: 'xx', created_at: 'xx', banner: require('img/card.png') },
        { type: 'card', title: 'x', desc: 'xx', star_count: 'xx', play_count: 'xx', created_at: 'xx', banner: require('img/card.png') }
      ]
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
