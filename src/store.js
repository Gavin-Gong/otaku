import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuth: false,
    userAvatar: require('img/avatar.jpg')
  },
  mutations: {
    login (state) {
      state.isAuth = true
    },
    logout (state) {
      state.isAuth = false
    }
  }
})
