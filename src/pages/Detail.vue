<template>
  <div id="detail">
    <x-header>
      <div class="info-wrapper">
        <div class="video-detail">
          <h3>title</h3>
          <ul class="info-bar">
            <li>1236</li>
            <li>1.2k</li>
            <li>2017-03-21</li>
          </ul>
        </div>
        <div class="author-detail">
          <img src="~img/avatar.jpg" alt="" class="avatar">
          <h4>name</h4>
          <p>desc</p>
        </div>
      </div>
    </x-header>
    <main>
      <div class="inner-wrapper">
        <!--TODO: video link-->
        <div class="comment-wrapper">
          <div class="reply-bar">
            <x-icon type="share"></x-icon>
            <x-icon type="star"></x-icon>
            <input type="text">
            <button>评论</button>
          </div>
          <ul class="comment-list">
            <li class="comment-item">
              <img src="~img/avatar.jpg" alt="" class="avatar">
              <div class="comment-content">
                <h3>name</h3>
                <p>2016-1-2</p>
                <div class="comment-card">
                  <p>contetn</p>
                  <div class="reply-bar">
                    <input type="text">
                    <button>回复</button>
                  </div>
                </div>
                <ul class="child-comment">
                  <li>
                    <img src="~img/avatar.jpg" alt="">
                    <div class="childComment-content">
                      <h4>name</h4>
                      <p>content</p>
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
    return {}
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import '~styles/modules/vars';
@import '~styles/mixins';


#detail {
  .header {
    background: url(~img/search-header.png) center top/contain no-repeat;
  }
}
</style>
