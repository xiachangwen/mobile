<template>
    <div class="swip">
        <swiper :options="swiperOption" >
            <!-- slides -->
            <swiper-slide v-for="(item,index) in swiperList" :key='index'>
                <img :src='item.imgUrl' />
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
         
        </swiper>
    </div>
</template>
<script>
export default {
    props:{
        swiperList: Array
    },
    components:{

    },
    data(){
        return {
            swiperOption: {
                loop:true,
                autoplay:true,
                pagination: {
                    el: '.swiper-pagination'
                }
            },
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
<style scoped lang="stylus">
.swip{
    width: 100%;
}

.swiper-container{
    width: 100%;

    img{
        width 100%
    }
}

.swiper-container >>> .swiper-pagination-bullet-active {
    background red
}
</style>