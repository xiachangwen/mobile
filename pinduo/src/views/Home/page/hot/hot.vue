<template>
    <div class="ment">
        <Swiper :swiperList='swiperList' />
        <Iconft :iconList='iconList' />

        <div class="list">
            <!-- <List :shopList='shopList' /> -->
            <List  v-for='(item,index) in shopList' :key='index' :item=item />
        </div>
        
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import Swiper from './hotpage/swiper'
import Iconft from './hotpage/iconft'
import List from '@/components/list'
export default {
    props:{

    },
    components:{
        Swiper,
        Iconft,
        List
    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState(['swiperList','shopList','iconList'])
    },
    methods:{
        ...mapActions(['getSwiperList','getShopList','getIconfontList'])
    },
    created(){

    },
    mounted(){
        this.getSwiperList()
        this.getShopList()
        this.getIconfontList()
    }
}
</script>
<style scoped lang="stylus">
.ment{
    width: 100%;
    height: 100%;
}

.list{
    width: 100%;
    background: #fff;
    margin-top: 0.2rem;
    padding: 0.3rem;
}

.list dl{
    width: 100%;
    display: flex;
    padding-top: 0.2rem;
}

.list >>> dl dd p {
    margin-top: 2rem;
}


</style>