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
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>
        <section class="matrix-layout">
          <card-list>
            <card v-for="n in 9"></card>
          </card-list>
        </section>
        <section class="pagination-wrapper">
          <ul class="pagination">
            <li><button> 第一页 </button></li>
            <li><button> 01 </button></li>
            <li><button> 02 </button></li>
            <li><button> 03 </button></li>
            <li><button> 下一页 </button></li>
          </ul>
        </section>
      </section>
    </main>
  </div>
</template>

<script>
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
      slecVal: '最新'
    }
  }
}
</script>

<style>
</style>
