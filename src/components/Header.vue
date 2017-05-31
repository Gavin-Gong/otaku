<template>
    <header class="header" role="banner">
      <div class="logo">
        <a href="">
          <img src="~img/logo.png" alt="Logo">
        </a>
      </div>
      <div class="avatar" v-show="$store.state.isAuth">
        <a href="">
          <img src="~img/avatar.jpg" alt="Logo">
        </a>
      </div>
      <div class="left-wrapper">
        <nav class="nav" role="navigation">
          <ul>
            <li>
              <router-link :to="{ name: 'Home' }">首页</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Detail' }">漫评</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Music' }">音乐</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Music' }">MAD / AMV</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Music' }">同人</router-link>
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

  }
</script>
