<template>
    <div class="searchent" v-if='isblone'>
        <div class="inper">
            <input placeholder="搜索" />
            <button @click='btnon'>取消</button>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        flagent:Function
    },
    components:{

    },
    data(){
        return {
            isblone:true
        }
    },
    computed:{

    },
    methods:{
        btnon(){
          this.flagent(false)
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="stylus">
.searchent {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: #fff;
    z-index: 5555;
    display: flex;
    flex-direction: column;
}
.inper{
    width: 100%;
    display: flex;
    padding: 10px 0;
    justify-content center

    input{
        background #eee
        width 75%
        border 0
        height 1rem
        border-radius 0.2rem
        padding-left 0.2rem
    }

    button{
        border 0
        width 1.5rem
        background #fff
    }
}


</style>