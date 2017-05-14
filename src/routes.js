import NotFound from './views/404.vue'
import Order from './views/elementUI/orderlist.vue'
import layOrderlist from './views/layUI/layOrderlist.vue'
import layAddOrder from './views/layUI/layAddOrder.vue'
import Vue from 'vue'

let routes = [
    {
        path: '/layOrderlist',
        component: layOrderlist,
        name: 'layOrderlist',
        hidden: true
    },
    {
      path: '/layAddOrder',
      component: layAddOrder,
      name: 'layAddOrder',
      hidden: true
    },
    {
        path: '/Order',
        component: Order,
        name: 'Order',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/Order' }
    }
];

export default routes;
