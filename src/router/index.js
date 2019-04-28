import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import App from '../App'
const long = resolve =>require(["../components/long"],resolve);
// import long from '@/components/long'
const zhuluyou = resolve =>require(["../components/zhuluyou"],resolve);
const denglu = resolve =>require(["../components/denglu"],resolve);
const shouye = resolve =>require(["../components/shouye"],resolve);
const shopList = resolve =>require(["../components/shopList"],resolve);
const footList = resolve =>require(["../components/footList"],resolve);
const orderList = resolve =>require(["../components/orderList"],resolve);
const adminList = resolve =>require(["../components/adminList"],resolve);
const addShop = resolve =>require(["../addData/addShop"],resolve);





export default new VueRouter({
  routes: [
    {
      path:'/',
      redirect:'/denglu'
    },
    {
      path:'/denglu' ,
      component:denglu,
    },
    {
    path:'/zhuluyou',
    component:zhuluyou,
    children:[
      {
        path:'/long',
        name:'Long',
        component: long
      },

      {
        path:'/shouye',
        name:'Shouye',
        component: shouye,

      },
      {
        path:'/shopList',
        name:'Shop',
        component: shopList
      },
      {
        path:'/footList',
        name:'Food',
        component: footList
      },
      {
        path:'/orderList',
        name:'Order',
        component: orderList
      },
      {
        path:'/adminList',
        name:'Admin',
        component: adminList
      },
      {
        path:'/addShop',
        name:'addShop',
        component: addShop
      }

    ]

  }]
})
