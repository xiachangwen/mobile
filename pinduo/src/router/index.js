import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/Home/home')
const Recom = () => import('../views/Recommend/recom') //推荐
const Serch = () => import('../views/Search/serch') // 搜索
const Chat = () => import('../views/Chat/chat') // 聊天
const My = () => import('../views/My/my')
const Login = () => import('../views/login')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },{
      path: '/home',
      name: 'home',
      component: Home
    },{
      path: '/recom',
      name: 'recom',
      component: Recom
    },{
      path: '/serch',
      name: 'serch',
      component: Serch
    },{
      path: '/chat',
      name: 'chat',
      component: Chat
    },{
      path: '/my',
      name: 'my',
      component: My
    },{
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})
