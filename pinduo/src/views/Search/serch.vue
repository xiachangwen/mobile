<template>
    <div class="main">
        <div class="screath">
            <div class="screa-head">
                <p @click='InputFn'>搜索类型</p>
            </div>
            
            <div class="srech">
                <!-- 左侧 -->
                <div class="screa-left">
                   
                        <ul>
                            <li 
                                v-for="(item,index) in searchList" 
                                :key='index'
                                @click=headlick(index)
                                :class="{'active': index === couerllt}"
                                ref='lis'
                            >{{item.name}}</li>
                        </ul>
                   
                </div>

                <!-- 右侧 -->
                <div class="screa-right">
                    <div class="rigt" ref='col'>
                        <div class="iter" v-for="(item,index) in searchList" :key='index'>
                            <h3>{{item.name}}</h3>
                            <div class="dlie">
                                <dl v-for="(v,index) in item.items" :key='index'>
                                    <dt>
                                        <img :src='v.icon' />
                                    </dt>
                                    <dd>
                                        <p>{{v.title}}</p>
                                    </dd>
                                </dl>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <Searchent v-if='isflag' :flagent=flagent />

        </div>
        <!-- {{searchList}} -->
        <Footer></Footer>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapState, mapActions} from 'vuex'
import Searchent from './page/searchent'
export default {
    props:{

    },
    components:{
        Searchent
    },
    data(){
        return {
            num:0, //初始下标
            scrollT:[] ,//所有子元素距离顶部距离
            scrollY:0,
            isflag: false
        }
    },
    computed:{
        ...mapState(['searchList']),

        // 右侧滚动 左侧滚动至指定位置
        couerllt(index){
           return this.scrollT.findIndex((item,index) => {
               this.instscroll(index)
                return this.scrollY >= item && this.scrollY <this.scrollT[index + 1]
            })
        }
    },
    methods:{
        ...mapActions(['getSearchList']),

        //左侧滚动事件
        getBscroll(){
           this.leftcroll = new BScroll('.screa-left',{
                click:true
            })

        },
        //右侧滚动
        rerhtBscroll(){
          this.rigcroll =  new BScroll('.screa-right',{
              click:true,
              probeType:3
          })
        
        },
        //点击左侧右侧调至对应位置
        headlick(ind){
            this.num = this.scrollT[ind]
            this.rigcroll.scrollTo(0,-this.num,100)

        },

        //左右联调
        instscroll(index){
            // let dem = this.$refs.lis
           this.$nextTick(()=>{
                let eil = this.$refs.lis[index]
                this.leftcroll.scrollToElement(eil,100,0,-500)
           })
            // console.log(dem,index)
        },

        flagent(flag){
            this.isflag = flag
        },

        InputFn(){
            this.flagent(true)
        }
    },
    created(){

    },
    mounted(){
        this.getSearchList()
        this.getBscroll()
        this.rerhtBscroll()
    },
    watch:{
        searchList(){ /// 计算右侧每一个div的高度， 并放在this.scrollT里
            let top = 0
            this.scrollT.push(top)
            this.$nextTick(() => {
                let dom = Array.from(this.$refs.col.getElementsByClassName('iter')) 
                dom.map((item , index) => {
                    top += item.clientHeight
                    this.scrollT.push(top)
                })
               
            // console.log(dom , this.scrollT)
             /// 监听右边滚动事件
                this.rigcroll.on('scroll',(pos) => {
                    this.scrollY = Math.abs(pos.y)
                })
            })
        }
    }
}
</script>
<style scoped lang="stylus">
.main{
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   background #fff
   overflow hidden
}

.screath{
    flex: 1;
    width 100%
    height 100%
    display flex
    flex-direction column
    overflow hidden

    .screa-head{
        width 100%
        display flex
        align-items center
        justify-content center
        background #fff
        padding 10px 0
        border-bottom  0.01rem solid #ccc
        z-index 222
  

        p{
            width 90%
            padding 0.2rem 0
            border-radius 5px
            border 0
            background #f4f4f4
            text-align center
            font-size 0.5rem
        }
    }

    .srech{
        flex 1
        width 100%
        height 100%
        display flex

        .screa-left{
            width 25%
            height 100%
            background #f9f9f9

            ul{
                    width 100%
                    display flex
                    flex-direction column

                    li{
                        font-size 0.4rem
                        text-align center
                        padding 0.5rem 0
                    }
            }
        }

        .screa-right{
            flex 1
            width 100%
            height 100%
            overflow hidden

            .rigt{
                width 100%

                .iter{
                    width 100%
                    
                    h3{
                        font-size 0.4rem
                        padding 0.2rem
                    }

                    &>.dlie{
                        width 100%
                        display flex
                        flex-wrap wrap

                        dl {
                            width 33.333%
                            flex-shrink 0
                            text-align center
                            margin-top 0.2rem

                            img{
                                width 1.5rem
                            }

                            dd p{
                                font-size 0.4rem
                                margin-top 0.2rem
                            }
                        }
                    }

                    
                }
            }
        }
    }

    .active{
        background #fff
        border-left 0.1rem solid red
    }

}
</style>