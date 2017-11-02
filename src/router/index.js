import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/list',
      name: 'list',
      component: Hello
    },
    {
      path: '/form',
      name: 'form',
      component: Form
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
