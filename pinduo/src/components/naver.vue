<template>
    <div class="hoad">
        <ly-tab
            v-model="selectedId"
            :items="items"
            :options="options"
            @change='clickFn'
        >
        </ly-tab>
        

        <router-view></router-view>

    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            selectedId: 0,
            items: [
                {label: '热门', routerLink: '/home/hot'},
                {label: '女装', routerLink: '/home/woncat'},
                {label: '百货'},
                {label: '母婴'},
                {label: '手机'},
                {label: '钱包'},
                {label: '电器'},
                {label: '食品'},
                {label: '美妆'}
            ],
            options: {
                activeColor: 'red',
                // color : 'red'
                // 可在这里指定labelKey为你数据里文字对应的字段
            }
        }
    },
    computed:{

    },
    methods:{
        clickFn(item,index){
            // console.log(item,index)
            this.$router.push({path:item.routerLink})
        }
    },
    created(){

    },
    mounted(){
        switch(this.$route.path){
            case '/home/hot':
                this.selectedId = 0;
                break;
            case '/home/woncat':
                this.selectedId = 1;
                break;
        }

        // console.log(this.$route.path)
    }
}
</script>
<style scoped lang="">
.hoad{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>