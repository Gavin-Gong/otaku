<template>
  <i :class="['iconfont', `icon-${type}`]" :style="colorStyle"></i>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: 'inherit'
      }
    },
    computed: {
      colorStyle () {
        return `color: ${this.color}`
      }
    }
  }
</script>

<style lang="scss">
</style>
