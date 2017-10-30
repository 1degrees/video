<template>
    <el-row class="contents">
      <el-row class="mv-detail">
        <div class="video-left active">
          <div class="video-content video play">
            <img class="swiper-lazy swiper-lazy-loaded" v-show="lazy" :src="videos[current]['img']" style="opacity: 1;">
            <video @play="playVideo" controls="" :src="videos[current]['video']"></video>
          </div>
          <div class="video-text">
            <h3>{{videos[current]['name']}}</h3>
            <ul><li><b>发布</b><span>{{videos[current]['detail']['publish']}}</span></li><li><b>类型</b><span>{{videos[current]['detail']['type']}}</span></li><li><b>主演</b><span>{{videos[current]['detail']['starring']}}</span> </li><li><b>语言</b><span>{{videos[current]['detail']['language']}}</span></li></ul>
            <p>{{videos[current]['detail']['desc']}}</p>
            <a class="click-box small" href="video/showimg.php?lang=cn&amp;id=89" title="蜘蛛侠：英雄归来" target="_self"><span>READ MORE</span></a>
          </div>
		    </div>
        <div class="video-right">
            <div class="video-list swiper-container-vertical" @mousewheel="wheel($event)" data-autoplay="1">
              <ol class="video-ol" :style="stylecur">
                <template>
                  <li v-for="(item,i) in videos" @click="reloadVideo($event,item,i)" :class="{active:current==i}" class="video-li" :title="item.name" :key="i">
                    <font data-type="video" :data-video="item.video" :data-param="JSON.stringify(item.detail)">
                    <img class="video-lazy swiper-lazy-loaded" :alt="item.name" :src="item.img">
                    </font>
                    <span><a href="video/showimg.php?lang=cn&amp;id=89" :title="item.name" target="_self">{{item.name}}</a></span>
                  </li>
                </template>
              </ol>
            </div>
          </div>
      </el-row>
    </el-row>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      curps : 0,
      current: 0,
      lazy: true,
      videos:[{name:'新木乃伊',img:'//show.metinfo.cn/muban/M1156010/377/upload/thumb_src/288_162/1497618065.jpg',video:'http://maoyan.meituan.net/movie/videos/2053347012b94145ad7ba847427ae778.mp4',detail:{publish:'2017-09-06',type:'动作，科幻，冒险',starring:'安娜贝拉·沃丽丝',language:'英语（中文翻译）',desc:'新版《木乃伊》讲述了一个全新故事，木乃伊公主阿玛内特穿梭到现代伦敦，企图寻回她曾被夺去的一切。本片由动作巨星汤姆·克鲁斯主演。凭借《王牌特工》中的 “刀锋女”一角大热的新锐女星索菲亚·宝特拉饰演有巨大毁灭力量的木乃伊公主阿玛内特，而好莱坞著名硬汉男星罗素·克劳 也有精彩表现。导演艾里克斯·库兹曼为好莱坞资深制片人，作品包括《惊天魔盗团》、 《星际迷航：暗黑无界》、《碟中谍3》等。据悉，影片将于近日发布全球首支官方预告片，届时将有更多精彩场景呈献，并将揭晓更多神秘剧情。该片北美预计2017年6月9 日上映。《新木乃伊》由艾里克斯·库兹曼导演，由汤姆·克鲁斯 / 索菲亚·波多拉 / 罗素·克劳 / 安娜贝拉·沃丽丝主演。《新木乃伊》的上映日期是2017年06月09日。《新木乃伊》的别名有：盗墓迷城(港),神鬼传奇(台)。'}},
              {name:'蜘蛛侠：英雄归来',img:'//show.metinfo.cn/muban/M1156010/377/upload/thumb_src/288_162/1497618161.jpg',video:'http://maoyan.meituan.net/movie/videos/854x4805927eda35b91487b8a0aaec3b758ab1c.mp4',detail:{publish:'2017-09-06',type:'动作，科幻，冒险',starring:'乔恩·沃茨，迈克尔·基顿 ',language:'英语（中文翻译）',desc:'本片由动作巨星汤姆·克鲁斯主演。凭借《王牌特工》中的《蜘蛛侠：英雄归来》由乔恩·沃茨导演，由汤姆·霍兰德 / 小罗伯特·唐尼 / 玛丽莎·托梅 / 迈克尔·基顿主演。《蜘蛛侠：英雄归来》的上映日期是2017年08月01日。《蜘蛛侠：英雄归来》的别名有：蜘蛛侠：强势回归(港),蜘蛛人：返校日(台),新蜘蛛侠,蜘蛛侠：归来,蜘蛛侠：回家,蜘蛛侠：返校季,蜘蛛侠：返校节,蜘蛛侠：归乡,蜘蛛侠：新复仇者,The Amazing Spider-Man 3,Spider-Man: The New Avenger,Spiderman。'}},
              {name:'加勒比海盗5',img:'//show.metinfo.cn/muban/M1156010/377/upload/thumb_src/288_162/1497619388.jpg',video:'http://maoyan.meituan.net/movie/videos/854x48048034498937d40f1b44f0153009bc710.mp4',detail:{publish:'2017-09-06',type:'动作',starring:'张啸',language:'中文',desc:'故事发生在《加勒比海盗3：世界的尽头》沉船湾之战20年后。 亡灵萨拉查船长（哈维尔·巴登 Javier Bardem 饰）率领自己的亡灵海军杀出了世界的尽头，“深海阎王”威尔·特纳（奥兰多·布鲁姆 Orlando Bloom 饰）乘飞翔的荷兰人号前来追杀却被其引入百慕大三角生死未卜。 获取自由的萨拉查肆虐加勒比海，征服了整个海域，即便是手刃了“黑胡子”爱德华·蒂奇（伊恩·麦柯肖恩 Ian McShane 饰）的海盗王赫克托·巴博萨船长（杰弗里·拉什 Geoffrey Rush 饰）也难以避免心爱的安妮女王复仇号沉入大海的惨剧。 '}},
              {name:'异形：契约',img:'//show.metinfo.cn/muban/M1156010/377/upload/thumb_src/288_162/1497620071.jpg',video:'http://maoyan.meituan.net/movie/videos/854x48063ef0c702131416d8e217aee92538aa2.mp4',detail:{publish:'2017-09-06',type:'动作',starring:'张啸',language:'中文',desc:'“科幻之父”雷德利-斯科特将为他所开创的《异形》系列带来新篇章。《异形：契约》的故事发生在《普罗米修斯》10年后，一群新的宇航员乘坐着“契约号”飞船前往遥远的星系寻找殖民地，他们来到一处看似天堂般的星球，实则是黑暗、危险的地狱，在那里他们见到了“普罗米修斯”号唯一的幸存者——由迈克尔·法斯宾德饰演的生化人大卫，一场毁灭性的巨大灾难即将到来。'}},
              {name:'借眼',img:'//show.metinfo.cn/muban/M1156010/377/upload/thumb_src/288_162/1497620606.jpg',video:'http://maoyan.meituan.net/movie/videos/1146x480c07b258286d3412c9fe9e60496b51045.mp4',detail:{publish:'2017-09-06',type:'动作',starring:'张啸',language:'中文',desc:'女主角明依（薛佳凝 饰）是位失明的单身母亲，带着女儿欢欢独自经营一家花店，后经过眼科医生高木（陈浩民 饰）的治疗，明依得以重见光明。为了使自己和女儿都有一个全新的开始，明依在高木的帮助下搬进了一座百年古宅，但没想到的是，母女二人也由此卷入一系列怪事之中。眼盲时留不住真爱，眼明时辨不出真心，这扇厚重的大门背后究竟藏着什么娟姨（罗兰 饰）想拼命保守的秘密？'}},
              {name:'新木乃伊',img:'//show.metinfo.cn/muban/M1156010/377/upload/thumb_src/288_162/1497618065.jpg',video:'http://maoyan.meituan.net/movie/videos/2053347012b94145ad7ba847427ae778.mp4',detail:{publish:'2017-09-06',type:'动作',starring:'张啸',language:'中文',desc:'新版《木乃伊》讲述了一个全新故事，木乃伊公主阿玛内特穿梭到现代伦敦，企图寻回她曾被夺去的一切。本片由动作巨星汤姆·克鲁斯主演。凭借《王牌特工》中的 “刀锋女”一角大热的新锐女星索菲亚·宝特拉饰演有巨大毁灭力量的木乃伊公主阿玛内特，而好莱坞著名硬汉男星罗素·克劳 也有精彩表现。导演艾里克斯·库兹曼为好莱坞资深制片人，作品包括《惊天魔盗团》、 《星际迷航：暗黑无界》、《碟中谍3》等。据悉，影片将于近日发布全球首支官方预告片，届时将有更多精彩场景呈献，并将揭晓更多神秘剧情。该片北美预计2017年6月9 日上映。《新木乃伊》由艾里克斯·库兹曼导演，由汤姆·克鲁斯 / 索菲亚·波多拉 / 罗素·克劳 / 安娜贝拉·沃丽丝主演。《新木乃伊》的上映日期是2017年06月09日。《新木乃伊》的别名有：盗墓迷城(港),神鬼传奇(台)。'}},
              {name:'离别之际',img:require('../assets/img/timg.jpg'),video:'/cloudvideo/static/video/huawei-end.mp4',detail:{publish:'2017-09-06',type:'情感',starring:'华为合作方小伙伴们',language:'中文翻译',desc:'华为临别之际，记录一些美景好友，说不好那天就闪婚了，成家立业，肩上扛上该扛的单子，也好有个单身时光的快乐回忆，留恋'}},]
    }
  },
  computed :{
    stylecur : function(){
      return `transform: translate3d(0px, ${-143*this.curps}px, 0px);`
    }
  },
  methods: {
    reloadVideo(e,el,i){
      this.lazy = true;
      this.current = i;
    },
    playVideo(){
      this.lazy = false;
    },
    wheel(e){
      let i = e.deltaY/100;
      this.curps += i;
      if(this.curps > this.videos.length - 2)
        this.curps = this.videos.length - 2;
      if(this.curps < 0)
        this.curps = 0;
    }
  },
  mounted(){
    setInterval(()=>{
        this.curps++
        if(this.curps > this.videos.length - 2)
          this.curps = 0;
    },8000)
  }
}
</script>
<style scoped>
@media (min-width: 1200px){
  div.mv-detail{
    height: 400px;
    padding-top:10px;
    padding-left: calc(50vw - 580px);
  }
  img.swiper-lazy,
  div.video-content video{
    width: 675px;
    height: 380px;
  }
  div.video-text{
    width: 285px;
    height: 380px;
  }
  div.video-text p {
    font: 15px/1.8 Microsoft Yahei;
    margin: 0 0 25px 0;
    max-height: 120px;
    -webkit-line-clamp: 4;
  }
  div.video-right {
    width: 180px;
    height: 360px;
  }
}
@media (min-width: 992px) and (max-width:1200px){
  div.mv-detail{
    height: 340px;
    padding-top:15px;
    padding-left: calc(50vw - 500px); 
  }
  img.swiper-lazy,
  div.video-content video{
    width: 550px;
    height: 310px;
  }
  div.video-text{
    width: 245px;
    height: 310px;
  }
  div.video-text p {
    font: 15px/1.8 Microsoft Yahei;
    margin: 0 0 25px 0;
    max-height: 100px;
    -webkit-line-clamp: 4;
  }
  div.video-right {
    width: 160px;
    height: 290px;
  }
}
@media (min-width: 768px) and (max-width: 992px) {
  div.mv-detail{
    margin-top: calc(50vh - 250px) !important;
    height: 540px;
    padding-top:15px;
    text-align: center;
  }
  div.video-left {
    width: 76%;
  }
   div.video-right {
    width: 22%;
    height: 500px;
  }
  img.swiper-lazy,
  div.video-content video{
    position: relative;
    width: 94%;
    height: 320px;
    object-fit: fill;
  }
  div.video-text{
    width: 96%;
    margin-left:2vw; 
    text-align: left;
    height: 202px;
  }
  div.video-text h3{
    display: block;
    width: 100%;
    padding: 0 !important;
    font-size: 22px !important;
  }
  div.video-text ul{
    margin-bottom: 8px !important;
  }
  div.video-text ul li{
    display: inline-block;
    list-style: none;
    font-size: 14px/1.8 Microsoft Yahei;
    margin: 0;
    padding: 0;
    width: 50%;
  }
  div.video-text p {
    font: 14px/1.8 Microsoft Yahei;
    margin: 0 0 10px 0;
    max-height: 74px;
    -webkit-line-clamp: 3;
  }
}
@media (max-width: 768px){
  div.mv-detail{
    margin-top: calc(50vh - 250px) !important;
    height: 540px;
    padding-top:15px;
    text-align: center;
  }
  div.video-left {
    width: 76%;
  }
   div.video-right {
    width: 20%;
    height: 500px;
  }
  img.swiper-lazy,
  div.video-content video{
    position: relative;
    width: 94%;
    height: 320px;
    object-fit: fill;
  }
  div.video-text{
    width: 96%;
    margin-left:2vw; 
    text-align: left;
    height: 202px;
  }
  div.video-text h3{
    display: block;
    width: 100%;
    padding: 0 !important;
    font-size: 22px !important;
  }
  div.video-text ul{
    margin-bottom: 8px !important;
  }
  div.video-text ul li{
    display: inline-block;
    list-style: none;
    font-size: 14px/1.8 Microsoft Yahei;
    margin: 0;
    padding: 0;
    width: 50%;
  }
  div.video-text p {
    font: 14px/1.8 Microsoft Yahei;
    margin: 0 0 10px 0;
    max-height: 74px;
    -webkit-line-clamp: 3;
  }
}
 div.contents{
  background: url('//show.metinfo.cn/muban/M1156010/377/upload/201706/1497778198.jpg') center no-repeat;
  width: 100%;
  height: 100%;
  overflow: hidden;
  float: left;
  margin: 0;
  padding: 0;
  list-style: none;
  display: block;
  overflow: hidden;
  position: relative;
  background-size: cover;
  -ms-flex-align: center;
  -moz-box-align: center;
  -webkit-box-align: center;
}
img.swiper-lazy{
  position: absolute;
}
div.video-content video{
  z-index: 6;
}
div.mv-detail{
  margin-top: calc(50vh - 180px);
  background: rgba(222,222,222,.1);
}
div.video-left,
div.video-right,
div.video-content,
div.video-text{
  float: left;
}
div.video-text{
  padding: 0 10px;
}
div.video-text h3{
  display: block;
  margin: 0;
  padding: 10px 0;
  color: #FFC012;
  font-size: 28px;
  font-weight: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
div.video-text ul {
  display: block;
  list-style: none;
  margin: 8px 0 18px 0;
  padding: 0;
}
div.video-text ul li {
  font-size: 15px;
  list-style: none;
  padding: 0;
  color: rgba(255,255,255,.85);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
div.video-text ul li:before {
  display: inline-block;
  content: '';
  width: 5px;
  height: 5px;
  border-radius: 2px;
  transition: .5s;
  -ms-transition: .5s;
  -moz-transition: .5s;
  -webkit-transition: .5s;
  -o-transition: .5s;
  background: #FFC012;
  position: relative;
  top: -3px;
  margin: 0 8px 0 4px;
}
div.video-text ul li b:after {
  display: inline-block;
  color: rgba(255,255,255,95);
  padding: 0 8px 0 4px;
  content: ':';
}
div.video-text p {
  overflow: hidden;
  color: rgba(255,255,255,.95);
  -webkit-box-orient: vertical;
}
.click-box.small {
  width: 165px;
  font-size: 14px;
  overflow: hidden;
  display: inline-block;
  position: relative;
  text-align: center;
}
.click-box:before {
  background: rgba(255,255,255,.4);
  height: 1px;
  width: 100%;
  content: '';
  position: absolute;
  z-index: 1;
  bottom: 50%;
  left: 0;
}
.click-box span {
  position: relative;
  display: block;
  font-family: 'AddFont';
  color: #fff;
}
.click-box span:after {
  content: '>>>';
  display: inline-block;
  padding-left: 7px;
  font-size: 18px;
  letter-spacing: 0;
}

div.video-right {
  margin: 12px 14px 0 0;
  border-width: 0 0 2px 2px;
  border-color: #FFC012;
  border-style: solid;
  position: relative;
}
div.video-right:before {
  border-top: 2px solid #FFC012;
  width: 14px;
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
div.video-right:after {
  border-left: 2px solid #FFC012;
  height: 12px;
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
}
div.video-list {
  overflow: hidden;
  display: block;
  height: 100%;
  position: relative;
  left: 14px;
  top: -12px;
  z-index: 2;
  perspective: 2000px;
}
ol.video-ol{
  transition: transform .5s 0s;
  transform-style: preserve-3d
}
div.video-list ol li {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  cursor: pointer;
}
div.video-list ol li font {
  position: relative;
  display: block;
}
div.video-list ol li:hover font:before,
div.video-list ol li.active font:before {
  width: 40px;
  height: 40px;
  margin: -20px 0 0 -20px;
  border: 1px solid rgba(255,255,255,.9);
  border-radius: 50%;
  transition: .5s;
  -ms-transition: .5s;
  -moz-transition: .5s;
  -webkit-transition: .5s;
  -o-transition: .5s;
  background: rgba(0,0,0,.4);
  content: '';
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
}
div.video-list ol li:hover font:after,
div.video-list ol li.active font:after {
  border-width: 10px 0 10px 20px;
  margin: -10px 0 0 -7px;
  transition: .5s;
  -ms-transition: .5s;
  -moz-transition: .5s;
  -webkit-transition: .5s;
  -o-transition: .5s;
  border-color: transparent transparent transparent rgba(255,255,255,.9);
  border-style: solid;
  content: '';
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
}
div.video-list ol li img {
  display: block;
  width: 100%;
  height: 100px;
}
div.video-list ol li span {
  display: block;
  padding: 12px 4px;
}
div.video-list ol li span a {
  font-size: 14px;
  color: rgba(255,255,255,.8);
  white-space: nowrap;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
}
</style>
