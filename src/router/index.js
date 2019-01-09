import Vue from 'vue'
import Router from 'vue-router'
// 首页
import home from '@/pages/home'
// layout 布局
import layoutDemo from '@/pages/layoutDemo'
// Container 布局容器
import containerDemo from '@/pages/containerDemo'
// Container 布局容器实例
import containerCase from '@/pages/containerCase'

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
    }, {
      path: '/containerCase',
      name: 'containerCase',
      component: containerCase
    }
  ]
})
