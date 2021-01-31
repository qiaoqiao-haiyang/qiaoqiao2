import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    children:[
      {
        path:"childone",
        name:"Childone",
        component:()=>import("../views/Child1.vue")
      },{
        path:"childtwo",
        name:"Childtwo",
        component:()=>import("../views/Child2.vue")
      }
    ]
  },
  {
    path: '/pageone',
    name: 'PageOne',
    component: () => import('../views/Page1.vue'),//懒加载
    beforeEnter: (to, from, next) => {
      // console.log(to,from,next);
      next()
    },
  },{
    path: '/pagetwo',
    name: 'PageTwo',
    alias:'/detail',
    component: () => import('../views/Page2.vue')//懒加载
  },{
    path:'/pagethree/:username',
    name:'PageThree',
    component:() =>import('../views/Page3.vue')
  },{
    path:'/pagefour',
    name:'PageFour',
    component:() =>import('../views/Page4.vue')
  },{
    path:'/pagefive',
    name:'PageFive',
    component:() =>import('../views/Page5.vue')
  },{
    path:'/pagesix',
    name:'PageSix',
    component:() =>import('../views/Page6.vue')
  },{
    path:'/pageseven',
    name:'PageSeven',
    component:() =>import('../views/Page7.vue')
  },
  {
    path:'/tvdetail/:id',
    name:'Detail',
    component:() =>import('../views/Detail.vue')
  },{
    path:'/redirect/:username',
    redirect:'/pagethree/:username',
  },{
    path:'*',
    component:()=>import('../views/Error.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
