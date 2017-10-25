import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/foo1',
      name: 'foo1',
      component: Hello
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
