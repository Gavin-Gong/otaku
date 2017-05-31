<template>
<div>
  <div id="side-nav" v-show="isShow">
    <nav >
      <ul class="nav">
        <li @click="handleMoveto('music')">
          <i class="iconfont icon-fanhui"></i>
          <p>音乐</p>
        </li>
        <li @click="handleMoveto('comment')">
          <i class="iconfont icon-fanhui"></i>
          <p>漫评</p>
        </li>
        <li @click="handleMoveto('exhibition')">
          <i class="iconfont icon-fanhui"></i>
          <p>MAD/MAV</p>
        </li>
        <li @click="handleMoveto('tongren')">
          <i class="iconfont icon-fanhui"></i>
          <p>同人</p>
        </li>
      </ul>
    </nav>
  </div>
  <div class="toggle-arrow" @click="handleToggle" :style="arrowStyle">
      <i class="iconfont icon-fanhui"></i>
  </div>
</div>
</template>

<script>
import MoveTo from 'moveto'

export default {
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    handleMoveto (type) {
      const commentEle = document.querySelector(`[data-cat=${type}]`)
      // const commentEle = document.querySelector("[data-cat='music']")
      const Mt = new MoveTo()
      Mt.move(commentEle)
      this.isShow = true
    },
    handleToggle () {
      this.isShow = !this.isShow
    }
  },
  computed: {
    arrowStyle () {
      return {
        right: !this.isShow ? '20px' : '',
        transform: !this.isShow ? 'rotateZ(0) translateY(-50%)' : 'rotateZ(180deg) translateY(50%)'
      }
    }
  }
}
</script>

<style lang="scss">
@import '~styles/mixins';

#side-nav {
  position: fixed;
  z-index: 9999;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  border-radius: 6px;
  padding: 20px 40px 20px 40px;
  .nav {
    @include reset-list;
    li {
      overflow: hidden;
      cursor: pointer;
      display: block;
      padding: 6px 0;
      i {
        position: relative;
        top: 1px;
        margin-left: 10px;
        // line-height: 1;
        height: auto;
        width: auto;
      }
      * {
        font-size: 18px;
        float: right;
      }
    }
  }
}
.toggle-arrow {
  position: fixed;
  right: 210px;
  top: 50%;
  // transform: translateY(-50%);
  z-index: 10000;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fa9d4c;
  color: #fff;
  text-align: center;
  box-shadow: 0px 5px 10px rgba(0,0,0,.7);
  i {
    line-height: 50px;
    width: auto;
    height: auto;
    font-size: 22px;
    cursor: pointer;
  }
}
</style>
