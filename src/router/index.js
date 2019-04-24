import Vue from 'vue'
import Router from 'vue-router'
import customers from '@/components/customers'
import about from '@/components/about'
import add from '@/components/add'
import customerDetails from '@/components/customerDetails'
import edit from '@/components/edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'customers',
      component: customers
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path: '/customers/:id',
      name: 'customerDetails',
      component: customerDetails
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: edit
    }
  ]
})
