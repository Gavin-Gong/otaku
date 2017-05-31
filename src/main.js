// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import iView from 'iview'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import faker from 'faker'

import App from './App'
import router from './router'
import './modules'

Vue.config.productionTip = false
Vue.use(Element)
Vue.mixin({
  methods: {
    avatar: faker.image.avatar
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
