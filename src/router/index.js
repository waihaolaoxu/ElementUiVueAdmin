import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// import Form from '@/components/Form'
// import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      meta:{
        title:'首页'
      },
      component: Hello
    },
    {
      path: '/list',
      name: 'list',
      meta:{
        title:'列表'
      },
      component: () => import('@/components/List')
    },
    {
      path: '/form',
      name: 'form',
      meta:{
        title:'编辑'
      },
      component: () => import('@/components/Form')
    },
    {
      path: '/foo2',
      name: 'foo2',
      component: {
        template:'<div>sdfsdfsdfsdf</div>'
      }
    }
  ]
})
