<template>
    <div class="main">
        <div class="recom">

            <div class="list">
                <!-- <List :shopList='shopList' /> -->
                <List  v-for='(item,index) in shopList' :key='index' :item=item />
            </div>

        </div>
        
        <Footer></Footer>
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import List from '@/components/list'
export default {
    props:{

    },
    components:{
        List
    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState(['shopList'])
    },
    methods:{
        ...mapActions(['getShopList'])
    },
    created(){

    },
    mounted(){
        this.getShopList()
    }
}
</script>
<style scoped lang="stylus">
.main{
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   overflow: hidden;
}

.recom{
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction:column;
    overflow-y: auto;
}

.list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background #fff
}

.list dl{
    width: 50%;
    flex-shrink: 0;
    margin-top 0.2rem
}

.list >>> dl dt {
    text-align center

}

.list >>> dl img{
    width 97%
}

.list >>> dl dd {
    padding-left 0
}

.list >>> dl dd h3{
    font-size: 0.4rem;
    font-weight: 500;
    height 0.39rem
    margin-top 0.2rem
    display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1 ;
            overflow: hidden;
}

.list >>> dl dd p{
    padding-top 0
}
</style>