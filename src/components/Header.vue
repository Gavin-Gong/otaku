<template>
    <header class="header" role="banner">
      <div class="logo">
        <a href="">
          <img src="~img/logo.png" alt="Logo">
        </a>
      </div>
      <div class="avatar">
        <a href="">
          <img src="~img/avatar.jpg" alt="Logo">
        </a>
      </div>
      <div class="left-wrapper">
        <nav class="nav" role="navigation">
          <ul>
            <li>
              <a href="/">首页</a>
            </li>
            <li>
              <a href="/comment.html">漫评</a>
            </li>
            <li>
              <a href="/music.html">音乐</a>
            </li>
            <li>
              <a href="/mad.html">MAD / AMV</a>
            </li>
            <li>
              <a href="/tongren.html">同人</a>
            </li>
          </ul>
        </nav>
        <input type="text" class="ot-input" placeholder="搜索">
      </div>
      <slot></slot>
    </header>
</template>

<script>
  export default {

  }
</script>
