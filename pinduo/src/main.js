// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.axios = axios

//解决300ms
import FastClick from 'fastclick'
FastClick.attach(document.body)

//自适应
import 'js/font'

///全局样式
import 'css/reset.css'

// 字体图标
import '@/fonts/iconfont.css';

// 二级导航
import LyTab from 'ly-tab'
Vue.use(LyTab)

//全局底部
import Footer from './components/footer'
Vue.component('Footer',Footer)

//scroll


//swiper 
import Swiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
Vue.use(Swiper)


/// vuex
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
