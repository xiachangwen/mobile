import {HOME_SWIPER_LIST, HOME_SHOP_LIST, HOME_IDONFON_LIST, HOME_SEARCH_LIST} from './mutations-type'
import axios from 'axios'
const actions = {

    //首页轮播图数据
    getSwiperList({commit}){
        axios.get('/api/swiper').then(res => {
        //    console.log(res.data.results)
           commit(HOME_SWIPER_LIST, res.data.results)
       })
    },

    // 推荐商品列表
    getShopList({commit}){
        axios.get('/api/shop').then(res => {
        //    console.log(res.data.results)
           commit(HOME_SHOP_LIST, res.data.results)
       })
    },

    //首页 icon图标
    getIconfontList({commit}){
        axios.get('/api/iconfon').then(res => {
        //    console.log(res.data.results)
           commit(HOME_IDONFON_LIST, res.data.results)
       })
    },

    // 搜索 接口
    getSearchList({commit}){
        axios.get('/api/search').then(res => {
            // console.log(res.data.data.data)
            commit(HOME_SEARCH_LIST, res.data.data.data)
        })
    }

}

export default actions