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
import store from './store'

Vue.config.productionTip = false
Vue.use(Element)
Vue.mixin({
  methods: {
    avatar: faker.image.avatar
  },
  data () {
    return {
      bannerList$: [
        'http://opazkqh2d.bkt.clouddn.com/17-5-31/86690592.jpg',
        'http://opazkqh2d.bkt.clouddn.com/17-5-31/25497058.jpg',
        'http://opazkqh2d.bkt.clouddn.com/17-5-31/47659813.jpg',
        'http://opazkqh2d.bkt.clouddn.com/17-5-31/78458734.jpg',
        'http://opazkqh2d.bkt.clouddn.com/17-5-31/53134716.jpg',
        'http://opazkqh2d.bkt.clouddn.com/17-5-31/43447571.jpg'
      ]
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
