<template>
    
        <dl>
            <dt>
                <img :src='item.imgUrl' />
            </dt>
            <dd>
                <h3>{{item.title}}</h3>
                <p>
                    <span class="spa">￥{{item.pice}}</span>
                    <span>{{item.tit_text}}</span>
                </p>
            </dd>
        </dl>
    
</template>
<script>
export default {
    props:{
        item: Object
    },
    components:{

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


dl dt img {
    width: 4.2rem;
}

dl dd {
    padding-left: 0.2rem;
}

dl dd h3{
    font-size: 0.4rem;
    font-weight: 500;
    height: 0.79rem;
    display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
}



dl dd p span{
    font-size: 0.35rem;
    padding-left: 0.1rem;
}

.spa {
    color: red;
    font-size: 0.45rem;
}
</style>