<template>
  <div id="profile">
    <x-header>
      <ul class="profile-card-list">
        <li>
          <img src="~img/avatar.jpg" alt="" class="avatar">
          <h3>my name</h3>
          <p>忍受不了变得毫无用处的人是我</p>
        </li>
        <li>
          <ul>
            <li v-for="n in 10"><x-icon type="tag"></x-icon> 天然黑</li>
          </ul>
        </li>
      </ul>
    </x-header>
    <main>
      <div class="inner-wrapper">
        <section class="msg">
          <div class="title-bar">
            <x-icon type="message"></x-icon>对对对
          </div>
          <div class="message">
            <h3>私信</h3>
            <div>
              <img src="~img/avatar.jpg" alt="">
              <h4>name</h4>
              <p>低头吧</p>
            </div>
            <div class="reply-box">
              <ul>
                <li>reply</li>
                <li>reply</li>
                <li>reply</li>
              </ul>
              <div class="reply-bar">
                <input>
                回复
              </div>

            </div>
          </div>
          <div class="reply">
            <ul class="reply-list">
              <li>
                <img src="~img/avatar.jpg" alt="">
                <div>
                  <h4>name</h4>
                  <p>content</p>
                  <ul class="bottom-bar">
                    <li>2016-2-1</li>
                    <li>删除</li>
                    <li>回复</li>
                  </ul>
                  <el-pagination
                    layout="prev, pager, next"
                    :total="50">
                  </el-pagination>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section class="star">
          <div class="title-bar">
            <x-icon type="star"></x-icon> My star
          </div>
          <div class="star-content">
            <ul class="star-nav">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div class="star-card">
              <x-card v-for="n in 9"></x-card>
              <el-pagination
                layout="prev, pager, next"
                :total="50">
              </el-pagination>
            </div>
          </div>
        </section>
        <section class="follow">
          <div class="title-bar">
            <x-icon type="like"></x-icon> 我的关注
          </div>
           <div class="follow-content">
             <ul class="following-list">
               <li>
                 <img src="~img/avatar.jpg" alt="">
                 <h4>my name</h4>
                 <p>less is morw</p>
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
import Card from '@/components/Card'
import CardList from '@/components/CardList'
import XIcon from '@/components/Icon'

export default {
  components: {
    XHeader,
    Card,
    CardList,
    XIcon
  },
  data () {
    return {
      slecOptions: [ '最新', '最热' ],
      slecVal: '最新'
    }
  }
}
</script>

<style lang="scss">
@import '~styles/modules/vars';
@mixin radius-card($color: $beige) {
  border-radius: 6px;
  background: $color;
  padding: 16px;
}

#profile {
  .header {
    min-height: 600px;
    overflow: hidden;
    background: url(~img/music-header.png) center top/contain no-repeat, url(~img/recommend.png) center bottom/cover no-repeat
  }

}
</style>
