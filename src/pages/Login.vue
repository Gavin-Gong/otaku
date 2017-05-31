<template>
  <div id="login">
    <div class="center-box">
      <div class="bg-box">
        <img src="~img/logo-white.png" alt="">
        <h3>hello otaku</h3>
        <p>是否没有账号？ 请点击 <a href=""> 注册</a></p>
      </div>
      <div class="form-box">
        <h3>登录</h3>
        <div class="form-item">
          <input type="text" placeholder="请输入账号">
          <i class="iconfont icon-zhanghao"></i>
        </div>
        <div class="form-item">
          <input type="password" placeholder="请输入密码">
          <i class="iconfont icon-mima"></i>
        </div>

        <div class="bottom-bar">
          <a href="">忘记密码</a>
          <button @click="handleLogin">登 录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      filterKey: '',
      sortKey: ''
    }
  },
  methods: {
    handleLogin () {
      this.$store.commit('login')
      this.$router.push({name: 'Home'})
    }
  },
  computed: {

  }
}
</script>

<style lang="scss">
@import '~styles/mixins';
@import '~styles/modules/vars';
#login {
  width: 100%;
  height: 100%;
  height: 100vh;
  overflow: hidden;
  // padding: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #333 url(~img/login-bg.png) center / cover no-repeat;
  .center-box {
    width: 900px;
    min-height: 350px;
    background: rgba(0,0,0,.8);
    position: relative;
    .bg-box {
      color: #fff;
      width: 350px;
      text-align: center;
      padding-left: 80px;
      margin-top: 70px;
      h3 {
        padding-top: 30px;
        margin-top: 45px;
        margin-bottom: 20px;
        border-top: 3px solid $teal;
        text-transform: uppercase;
        text-align: left;
        font-size: 24px;
      }
      p {
        text-align: left;
      }
    }
    .form-box {
      position: absolute;
      top: -30px;
      right: 40px;
      background: #fff;
      // width: 100px;
      padding: 60px 30px;
      // height: 100px;
      border-radius: 6px;
      box-shadow: 0 5px 10px rgba(0,0,0,.8);
      h3 {
        margin-bottom: 70px;
        font-size: 24px;
        color: $teal;
      }
      .form-item {
        margin-bottom: 50px;
        font-size: 20px;
        position: relative;
        &:nth-child(3) {
          i {
            font-size: 22px;
          }
        }
        input {
          outline: none;
          width: 320px;
          border: none;
          border-bottom: 1px solid #333;
          font-size: 20px;
          padding-right: 30px;
        }
        i {
          font-size: 20px;
          position: absolute;
          right: 3px;
          top: 0;
        }
      }
      a {
        color: #666;
      }
      button {
        float: right;
        color: #fff;
        outline: none;
        border: none;
        background: $deepBlue;
        padding: 10px 20px;
        border-radius: 6px;
        cursor: pointer;
      }
    }
  }
}
#login + .footer {
  display: none;
}
</style>
