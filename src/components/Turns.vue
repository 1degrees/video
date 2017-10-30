<template>
    <el-row class="truns">
        <ul class="trun-contents">
            <template>
                <transition-group name="slideAnimat">
                    <li class="trun-node" v-for="(e,i) in contents" :key="i" v-show="i==current" :class="{active: i==current}" :style="{background: 'url(' + e.img +') center no-repeat'}">
                        <el-row class="node-item">
                            <el-col :xs="16" :sm="16" :md="15" :lg="14" class="node-content">
                                <ul class="node-detail">
                                    <div class="line-1">
                                        <span class="f-1-1">互联网+</span>
                                        <span class="f-1-2">影视资讯快播</span>
                                    </div>
                                    <div class="line-2">
                                        <span class="f-2-1">ONE-STOP SERVICE</span>
                                        <span class="f-2-2">咨询策划　创意设计　技术开发　运营维护　营销推广</span>
                                    </div>
                                    <div class="line-3">
                                        <p>
                                            <span class="f-3-1">技术优势</span>
                                            <span class="f-3-2">“互联网+”就是“互联网+各传统行业”，但这并不是简单相加</span>
                                        </p>
                                        <p>
                                            <span class="f-3-1">解决方案</span>
                                            <span class="f-3-2">资源中的优化和集成，将互联网的创新成果深度融合于经济</span>
                                        </p>
                                        <p>
                                            <span class="f-3-1">服务流程</span>
                                            <span class="f-3-2">它代表一种新的社会形态，让互联网与传统行业进行深度融合</span>
                                        </p>
                                    </div>
                                </ul>
                            </el-col>
                        </el-row>
                    </li>
                </transition-group>
            </template>
        </ul>
            <ul class="trun-line">
            <template>
                <li v-for="(e,i) in contents" :key="i" @click="trunPage($event,i)" :style="margin(i)" :class="{active: current==i, button:true}">
                    <span>
                    </span>
                </li>
            </template>
        </ul>
    </el-row>
</template>
<script>
import $ from "jquery"
export default {
  name: 'menus',
  data () {
    return {
        time:0,
        current:0,
        contents:[{img:require('@/assets/img/home1.jpg'),cont0:'2017',cont1:'',conte2:''},
                {img:require('@/assets/img/home2.jpg'),cont0:'2017',cont1:'',conte2:''},
                {img:require('@/assets/img/home3.jpg'),cont0:'2017',cont1:'',conte2:''}]
    }
  },
  computed : {},
  watch : {
    current :{
        handler:function(o,n){
            if(o != n){
                this.$nextTick(() =>{
                    this.fontAnimation();
                })
            }
        },
        deep:true
    }
  },
  methods:{
    margin(i){
         return !i ? `margin-left:calc(50% - ${32*this.contents.length}px)` : '';
    },
    trunPage(e,i){
        this.current = i;
    },
    fontAnimation(){
        $(this.$el).find('span.f-1-1').css('transform',' translate(-30px,-30px) scale(.8,.8)').eq(this.current).css('transform', 'none');
        $(this.$el).find('span.f-1-2').css('transform',' translate(30px,30px) scale(.8,.8)').eq(this.current).css('transform', 'none');
        $(this.$el).find('span.f-2-1').css('transform',' rotateX(90deg)').eq(this.current).css('transform', 'none');
        $(this.$el).find('span.f-2-2').css('transform',' rotateX(-90deg)').eq(this.current).css('transform', 'none');
        $(this.$el).find('div.line-3>p:nth-child(1)').css('transform',' translate(-50%,50%) rotateX(-90deg)').eq(this.current).css('transform', 'none');
        $(this.$el).find('div.line-3>p:nth-child(2)').css('transform',' translate(0,50%) rotateX(-90deg)').eq(this.current).css('transform', 'none');
        $(this.$el).find('div.line-3>p:nth-child(3)').css('transform',' translate(50%,50%) rotateX(-90deg)').eq(this.current).css('transform', 'none');
    }
  },
  mounted(){
    setTimeout(() => {
        this.fontAnimation();
    },200);
    setInterval(() => {
        this.time++
        this.current= this.time % this.contents.length;
    },8000)
  }
}
</script>
<style scoped>
@media (min-width: 1200px){
    div.node-item .node-content{
        margin-left: 25%;
    }
    span.f-1-1{
        font-size: 82px;
    }
    span.f-1-2{
        font-size: 60px;
    }
    span.f-2-1{
        font-size: 40px;
    }
    span.f-2-2{
        font-size: 24px;
    }
    span.f-3-1{
        font-size: 28px;
    }
    span.f-3-2{
        font-size: 17px;
        text-align: justify;
        text-align-last: center;
        max-width: 270px;
    }
}
@media (min-width: 992px) and (max-width:1200px){
    div.node-item .node-content{
        margin-left: 20%;
    }
    span.f-1-1{
        font-size: 66px;
    }
    span.f-1-2{
        font-size: 56px;
    }
    span.f-2-1{
        font-size: 32px;
    }
    span.f-2-2{
        font-size: 20px;
    }
    span.f-3-1{
        font-size: 23px;
    }
    span.f-3-2{
        font-size: 14px;
        text-align: justify;
        text-align-last: center;
        max-width: 270px;
    }
}
@media (min-width: 768px) and (max-width: 992px) {
    div.node-item .node-content{
        margin-left: 16%;
    }
    span.f-1-1{
        font-size: 50px;
    }
    span.f-1-2{
        font-size: 44px;
    }
    span.f-2-1{
        font-size: 32px;
    }
    span.f-2-2{
        font-size: 20px;
    }
    span.f-3-1{
        font-size: 23px;
    }
    span.f-3-2{
        font-size: 14px;
        text-align: justify;
        text-align-last: center;
        max-width: 270px;
    }
}
@media (max-width: 768px){
    div.node-item .node-content{
        margin-left: 16%;
    }
    span.f-1-1{
        font-size: 40px;
    }
    span.f-1-2{
        font-size: 36px;
    }
    span.f-2-1{
        font-size: 32px;
    }
    span.f-2-2{
        font-size: 20px;
    }
    span.f-3-1{
        font-size: 23px;
    }
    span.f-3-2{
        font-size: 14px;
        text-align: justify;
        text-align-last: center;
        max-width: 270px;
    }
}
@keyframes fadeInLeft {
  from {
    opacity: 0;
     -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0); 
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none; 
  }
}
.slideAnimat-enter-active{
  -webkit-animation: fadeInLeft 0.5s;
  animation: fadeInLeft 0.5s;
}

@keyframes fadeOutRight{
   from {
    opacity: 1;
    -webkit-transform: none;
    transform: none; 
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(50%, 0, 0);
    transform: (50%, 0, 0); 
  }
}
.slideAnimat-leave-active {
  -webkit-animation: fadeOutRight 0.5s;
  animation: fadeOutRight 0.5s;
}

div.truns,
ul.trun-contents,
li.trun-node{
    width: 100%;
    height: 100%;
}
ul.trun-content{
    position: relative;
    z-index: 1;
}
li.trun-node{
    position: absolute;
    left: 0;
    right: 0;
    overflow: hidden;
    background-size: cover !important;
}
ul.trun-line{
    position: relative;
    bottom: 80px;
    width: 100%;
    z-index: 2;
    background: transparent;
}
ul.trun-line::before{
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    top: 50%;
    background-color: #9a9a9a;
}
div.node-item{
    height: 40%;
    margin-top: calc(50vh - 180px);
}
div.node-item .node-content{
    margin-left: 25%;
    height: 100%;
    max-width: 808px;
    min-width: 600px;
    max-height: 400px;
    min-height: 300px;
    background: rgba(0,0,0,0.45);
}
div.line-1,
div.line-2,
div.line-3 {
    float: left;
    height:33.3%;
    width: 100%;
    text-align: center;
}
span.f-1-1{
    display: inline-block;
    transform: translate(-30px,-30px) scale(.8,.8);
    transition: transform 1s 0s;
    height: 100%;
    line-height: 120px;
    color: #FFC012;
}
span.f-1-2{
    display: inline-block;
    transform: translate(30px,30px) scale(.8,.8);
    transition: transform 1s 0s;
    height: 100%;
    line-height: 120px;
    color: rgba(255,255,255,1);
}
span.f-2-1{
    display: inline-block;
    width: 100%;
    height: 50%;
    color: white;
    font-size: 40px;
    transform: rotateX(90deg);
    transition: transform 1s 1s
}
span.f-2-2{
    display: inline-block;
    width: 100%;
    height: 50%;
    color: white;
    font-size: 24px;
    transform: rotateX(-90deg);
    transition: transform 1s 1s
}
div.line-3>p{
    float: left;
    display: inline-block;
    width: 33.33%;
    height: 100%;
    transition: transform 1s 2s
}
div.line-3>p:nth-child(1){
    transform: translate(-50%,50%) rotateX(-90deg);
}
div.line-3>p:nth-child(2){
    transform: translate(0,50%) rotateX(-90deg);
}
div.line-3>p:nth-child(3){
    transform: translate(50%,50%) rotateX(-90deg);
}
div.line-3>p:nth-child(2){
    border-left: 1px solid white;
    border-right: 1px solid white;
}
div.line-3 p>span:nth-child(1){
    display: inline-block;
    color: #FFC012;
    font-size: 28px;
    width: 100%;
    height: 40%;
}
div.line-3 p>span:nth-child(2){
    display: inline-block;
    color: white;
    padding:0 10px;
    font-size: 17px;
    width: 100%;
    height: 60%;
}

div.node-item ul.node-detail{
    width: 96%;
    height: 96%;
    margin-left: 2%;
}
li.button{
    position: relative;
    display: inline-block;
    width: 24px;
    height: 24px;
    line-height: 24px;
    margin-left: 40px;
    border-radius: 12px;
    border: 1px solid white; 
}
li.button:hover::before,
li.button.active::before{
    position: absolute;
    content: '\25BC';
    font-size: 18px;
    color: white;
    top: -28px;
    left: 3px;
}
li.button span{
    display: inline-block;
    margin:3px;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    border: 1px solid white;
    background: white;
}
li.button:hover span,
li.button.active span{
    background: #FFC012;
}
</style>
