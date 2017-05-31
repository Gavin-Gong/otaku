import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Music from '@/pages/Music'
import Profile from '@/pages/Profile'
import Detail from '@/pages/Detail'
import Search from '@/pages/Search'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
