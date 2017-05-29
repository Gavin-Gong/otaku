<template>
  <div id="search">
    <x-header>
      <div class="search-box">
        <h3>OTAKU</h3>
        <input type="text">
        <button>搜索</button>
      </div>
    </x-header>
    <main class="search-main" role="main">
      <section class="playround">
        <section class="op-bar">
          <div class="status">
            <el-select v-model="slecVal" placeholder="请选择">
              <el-option
                v-for="item in slecOptions"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
            <i class="iconfont icon-music"></i>
            <i class="iconfont icon-qiehuan"></i>
          </div>
          <ul class="cat-list">
            <li></li>
            <li @click="handleTabChange('card')" tabindex="1"></li>
            <li @click="handleTabChange('video')" tabindex="2"></li>
            <li @click="handleTabChange('image')" tabindex="3"></li>
          </ul>
        </section>
        <section class="matrix-layout">
          <card-list>
            <card v-for="(data, index) in filterData" :data="data" :key="index"></card>
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
import { reverse } from 'lodash'
import XHeader from '@/components/Header'
import Card from '@/components/Card'
import CardList from '@/components/CardList'

export default {
  components: {
    XHeader,
    Card,
    CardList
  },
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
      ],
      filterKey: '',
      sortKey: ''
    }
  },
  created () {
    console.log(reverse(this.cardListData))
  },
  methods: {
    handleTabChange (type) {
      this.filterKey = type
    },
    handleSort () {
      this.sortKey = Math.random()
    }
  },
  computed: {
    filterData () {
      const filterKey = this.filterKey
      /*eslint-disable*/
      const sortKey = this.sortKey // just make is reactive
      return reverse(this.cardListData).filter(item => item.type === filterKey || this.filterKey === '')
    }
  }
}
</script>

<style lang="scss">
@import '~styles/mixins';
@import '~styles/modules/vars';
#search {
  // background: #ccc;
  .header {
    background: url(~img/search-header.png) center top / contain no-repeat;
    min-height: 455px;
    text-align: center;
    .search-box {
      margin-top: 220px;
      * {
        display: inline-block
      }
      h3 {
        font-weight: normal;
        color: $white;
      }
      input {
        margin: 0 20px;
        border: 1px solid #fff;
        background: transparent;
        padding: 6px;
        border-radius: 5px;
        width: 250px;
        color: $white;
        &:focus {
          outline: none;
        }
      }
      button {
        outline: none;
        border: none;
        background: $teal;
        color: $white;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
  .search-main {
    position: relative;
    margin-top: -3px;
    .playround {
      position: relative;
      margin: auto;
      width: 1300px;
      padding-bottom: 30px;
      background: $deepBlue;
    }
    .op-bar {
      position: absolute;
      top: -28px;
      width: 100%;
      overflow: hidden;
      user-select: none;
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
      ul {
        @include reset-list;
        float: right;
        margin-right: 60px;
        li {
          background: url(~img/music-play-bar.png) center / contain no-repeat;
          width: 60px;
          height: 60px;
          margin-left: 20px;
          cursor: pointer;
          &:focus {
            border: none;
            outline: none;
            background: $blue;
          }
        }
        li:nth-child(1) {
          background: url(~img/music-filter.png) center / contain no-repeat;
        }
        li:nth-child(2) {
          background: url(~img/music-matrix.png) center / contain no-repeat;
        }
        li:nth-child(3) {
          background: url(~img/music-play-bar.png) center / contain no-repeat;
        }
        li:nth-child(4) {
          background: url(~img/music-ctx-bar.png) center / contain no-repeat;
        }
      }
    }
    .matrix-layout {
      padding-top: 30px;
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
  }
}
</style>
