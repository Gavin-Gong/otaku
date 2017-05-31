<template>
  <div id="app">
    <router-view></router-view>
    <x-footer></x-footer>
  </div>
</template>

<script>
import XFooter from '@/components/Footer'

export default {
  components: {
    XFooter
  },
  name: 'app'
}
</script>

<style lang="scss">

@import '~styles/index';
#app {
    font-family: "Hiragino Sans GB", sans-serif;
  * {
    font-family: "Hiragino Sans GB", sans-serif;
  }
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
