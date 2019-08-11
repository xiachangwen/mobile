<template>
    <div class="main">
        
        <div class="home">
            <Naver />

            <!-- {{swiperList}} -->
        </div>


        <Footer></Footer>
    </div>
</template>
<script>
import Naver from '../../components/naver'
export default {
    props:{

    },
    components:{
        Naver
    },
    data(){
        return {

        }
    },
    computed:{
        
    },
    methods:{
        
    },
    created(){
      
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.main{
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   overflow: hidden;
}

.home{
    flex: 1;
    overflow-y: auto;
}
</style>