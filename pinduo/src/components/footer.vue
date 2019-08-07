<template>
    <footer>
        <router-link to='/home' >
            <i class="iconfont icon-shouye"></i>
            <p>首页</p>
        </router-link>
        <router-link to='/recom' >
            <i class="iconfont icon-tianbiao"></i>
            <p>推荐</p>
        </router-link>
        <router-link to='/serch' >
             <i class="iconfont icon-fangdajing"></i>
             <p>搜索</p>
        </router-link>
        <router-link to='/chat' >
             <i class="iconfont icon-xinxi"></i>
             <p>聊天</p>
        </router-link>
        <router-link to='/my' >
            <i class="iconfont icon-icongerenzhongxin-01"></i>
            <p>个人中心</p>
        </router-link>
    </footer>
</template>
<script>
export default {
    props:{

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
footer{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

a{
    flex: 1;
    text-align: center;
    padding: 0.2rem 0;
}

a p {
    font-size: 0.3rem;
    padding-top: 0.1rem;
}

a i {
    font-size: 0.7rem;
}

.router-link-active p{
    color: red;
}

.router-link-active i {
    color: red;
}
</style>