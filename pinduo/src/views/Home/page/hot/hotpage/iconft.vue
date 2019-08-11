<template>
    <div class="iont">
        <div class="iconft">
            <ul>
                <li v-for="(item,index) in getIcon" :key='index'>
                     <div class='item' v-for="(item1,index) in item" :key='index'>
                        <img :src='item1.icont' />
                        <p>{{item1.title}}</p>
                    </div>
                </li>

            </ul>
            <!-- {{getIcon}} -->
        </div>
            
         <div class="moce">
                <div class="mont" :style='activeStyle'>

                </div>
         </div>
    </div>
</template>
<script>
export default {
    props:{
        iconList: Array
    },
    components:{

    },
    data(){
        return {
            screen: document.documentElement.clientWidth || document.body.clientWidth, //可视区域的宽度
            dawidth: 675, // 大盒子的宽度
            xawidth: 75, // 灰色条纹
            minMask:0, ///紫色条纹
            startX:0, // 开始的位置
            leftMask:0, //移动距离
            endx:0 // 离开的距离
        }
    },
    computed:{
       activeStyle(){
            return {
                width: this.minMask + 'rem',
                left: this.leftMask + 'px'
            }
        },

        //分组 二维数组
        getIcon(){
            let page = []
            this.iconList.forEach((item,index) => {
                let ind = Math.floor(index/9)
                if(page[ind]){
                    page[ind].push(item)
                } else {
                    page[ind] = []
                    page[ind].push(item)
                }
            })
            return page
        }
    },
    methods:{
        getbottomMask(){
            // 紫色条长度 = 视图宽度 / 大盒子宽度 * 灰色条
            this.minMask = (this.screen / this.dawidth * this.xawidth) / 37.5
        },

        touchStart(e){
            // console.log(e.targetTouches[0])
            this.startX = e.targetTouches[0].pageX
        },

        touchMove(e){
            let left = e.targetTouches[0].pageX
            //起始距离 - 移动距离 = 移动长度
            let movex = left - this.startX
            // left距离 = 灰色条长度 / 大盒子的长度 * 移动距离
            this.leftMask = - ( this.xawidth / this.dawidth  * movex) + this.endx

            if (this.leftMask < 0) {
                this.leftMask = 0
            } else if (this.leftMask > this.xawidth - this.minMask * 37.5 ) {
                // 如果left 距离 大于 灰色条 - 紫色条 * 37.5
                this.leftMask = this.xawidth - this.minMask * 37.5
            }
            
        },

        touchEnd(){
           this.endx = this.leftMask
        //    console.log(this.xawidth - this.minMask,this.leftMask)
        },
    },
    created(){

    },
    mounted(){
        this.getbottomMask(),
        this.$el.addEventListener('touchstart',this.touchStart,false)
        this.$el.addEventListener('touchmove',this.touchMove,false)
        this.$el.addEventListener('touchend',this.touchEnd,false)

    }
}
</script>
<style scoped lang="">
.iont {
    width: 100%;
    position: relative;
}

.iconft{
    width: 100%;
    height: 4rem;
    overflow-x: auto;
    background: #fff;
}
.iconft::-webkit-scrollbar{
    display: none;
}

ul {
    width: 18rem;
    height: 96%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

li {
    width: 100%;
    display: flex;
}

.item{
    width: 2rem;
    height: 1.6rem;
    text-align: center;
    margin-top: 0.2rem;
}

.item img {
    width: 1.05rem;
    height: 1.05rem;
}

.item p{
    font-size: 0.32rem;
    margin-top: 0.1rem;
}

.moce{
    width: 2rem;
    height: 2px;
    background: #ccc;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%)
}

.mont{
    height: 100%;
    /* width: 0rem; */
    background: #f0f;
    position: absolute;
    left: 0;
}
</style>