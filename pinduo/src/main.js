// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//解决300ms
import FastClick from 'fastclick'
FastClick.attach(document.body)

//自适应
import 'js/font'

///全局样式
import 'css/reset.css'

// 字体图标
import '@/fonts/iconfont.css';

//全局底部
import Footer from './components/footer'
Vue.component('Footer',Footer)

//axios
import axios from 'axios'
Vue.prototype.axios = axios

//swiper 
import Swiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
Vue.use(Swiper)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
