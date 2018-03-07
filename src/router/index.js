import Vue from 'vue'
import Router from 'vue-router'
import homeMain from '@/components/homeMain/homeMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeMain',
      component: homeMain
    }
  ]
})
