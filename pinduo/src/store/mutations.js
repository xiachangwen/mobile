import {HOME_SWIPER_LIST, HOME_SHOP_LIST, HOME_IDONFON_LIST, HOME_SEARCH_LIST} from './mutations-type'
const mutations = {
    [HOME_SWIPER_LIST](state,res){
        state.swiperList = res
    },

    [HOME_SHOP_LIST](state,res){
        state.shopList = res
    },

    [HOME_IDONFON_LIST](state,res){
        state.iconList = res
    },

    [HOME_SEARCH_LIST](state,res){
        state.searchList = res
    }
}

export default mutations