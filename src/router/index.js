import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
// layout 布局
import layoutDemo from '@/components/layoutDemo'
// Container 布局容器
import containerDemo from '@/components/containerDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/layoutDemo',
      name: 'layoutDemo',
      component: layoutDemo
    }, {
      path: '/containerDemo',
      name: 'containerDemo',
      component: containerDemo
    }
  ]
})
