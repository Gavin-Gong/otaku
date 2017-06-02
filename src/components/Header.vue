<template>
    <header class="header" role="banner" :style="background">
      <div class="logo">
        <a href="">
          <img src="~img/logo.png" alt="Logo">
        </a>
      </div>
      <div class="avatar" v-show="$store.state.isAuth" @click="$router.push({name: 'Profile'})">
          <img :src="$store.state.userAvatar" alt="Logo">
      </div>
      <div class="left-wrapper">
        <nav class="nav" role="navigation">
          <ul>
            <li>
              <router-link :to="{ name: 'Home' }">首页</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Music', query: {type: 'comment'}}">漫评</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Music', query: {type: 'music'} }">音乐</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Music', query: {type: 'mad'} }">MAD / AMV</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Music', query: {type: 'tongren'} }">同人</router-link>
            </li>
          </ul>
        </nav>
        <input type="text" class="ot-input" placeholder="搜索" @keyup.enter.self="$router.push({name: 'Search'})">
      </div>
      <slot></slot>
    </header>
</template>

<script>
  export default {
    props: {
      background: {
        type: String,
        default: ''
      }
    }
  }
</script>
