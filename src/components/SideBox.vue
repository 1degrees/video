<template>
  <div class="side-box">
    <div class="side-open">
      <hr>
      <hr>
      <hr>
      <hr>
    </div>
    <div class="side-content">
      <div class="side-cut">
      <div class="side-shadow"></div>
      <div class="menu">
        <header class="menu-search">
          <div class="search-content">
              <input class="search-msg" type="text" name="searchMsg" placeholder="Search title ...">
              <button class="search-btn"><i class="fa fa-search"></i></button>
          </div>
        </header>
        <nav class="menu-detail">
          <ul class="menu-tree">
              <router-link tag="li" active-class="active">
                <div class="tree-item">
                  <i></i>
                  <a href=""></a>
                </div>
                <div class="hover-info">
                  <div>
                    <img width="400" src="../assets/img/photo.png" alt="">
                    <p></p>
                  </div>
                  <ul>
                    <li class="info-nav has-line"><a></a></li>
                    <li class="info-nav has-line"><a></a></li>
                    <li class="info-nav"><a></a></li>
                  </ul>
                </div>
              </router-link>
          </ul>
        </nav>
        <div class="menu-footer">
          <div class="footer-contact">
            <div class="contact-phone">
              <p>Call me:</p>
              <p>400-1234-5678</p>
            </div>
            <button class="contact-code"><i class="fa fa-qrcode"></i></button>
          </div>
          <hr>
          <div class="footer-share">
            <div class="share-content">
              <a href=""><i class="fa fa-share-alt"></i></a>
              <a href=""><i class="fa fa-qq"></i></a>
              <a href=""><i class="fa fa-weibo"></i></a>
            </div>
            <div class="music-play"></div>
            <p>Copyright © 2017 电影快讯</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {menu:[]}
    },
    methods:{
    }
  }
</script>
<style scoped>
.side-content{
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 1000;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  width: 284px;
  right: -300px;
  transition: right .3s ease;
  -moz-transition: right .3s ease;
  -ms-transition: right .3s ease;
  -o-transition: right .3s ease;
  -webkit-transition: right .3s ease;
}
.side-box.open .side-content{
  right: 0;
  width: 200%;
}

.side-cut{
  position: relative;
  width: 284px;
  float: right;
}
.side-shadow{
  width: 3999px;
  height: 100%;
  background: rgba(0,0,0,.5);
  position: absolute;
  z-index: 1;
  top: 0;
  right: 100%;
  opacity: 0;
  visibility: hidden;
}

.side-box.open .side-shadow{
  opacity: 1;
  visibility: visible;
}

.menu{
  width: 284px;
  font-size: 14px;
  color: #b4b4b4;
  background-color: rgba(0,0,0,.9);
  position: relative;
  z-index: 2;
  right: 0;
}

.menu header, .menu nav{
  opacity: 0;
  transition: opacity 1s .3s ease;
}
.side-box.open .menu header, .side-box.open .menu nav{
  opacity: 1;
}

/*导航菜单头部-搜索样式*/
.menu header {
  height: 70px;
  padding: 10px 5px;
}
.menu header .search-content{
  position: relative;
}
header div.search-content input.search-msg{
    margin-left: 30px;
    padding: 20px 0;
    font-size: 16px;
    border-bottom: 1px solid rgba(158, 158, 158, 0.4);
    font-family: 'AddFont',Microsoft Yahei;
    width: 214px;
    color: white;
}
header div.search-content button.search-btn{
    position: relative;
    background: none;
    padding: 0;
    border: 0;
    right: 16px;
}
header div.search-content button.search-btn>i{
    color: white;
    font-size: 16px;
}
header div.search-content button.search-btn>i:hover{
  color: #FFC012;
}

/*导航菜单中部-内容样式*/
.menu .menu-detail{
  max-height: calc(100% - 70px);
  width: 100%;
  padding: 5px 0 0 0;
}

.tree-node{
  position: relative;
}

.tree-node:after{
    display: block;
    content: '';
    border-style: solid;
    border-width: 10px 0 10px 15px;
    border-color: transparent transparent transparent rgba(0,0,0,.9);
    position: absolute;
    left: -16px;
    top: 25px;
    z-index: 1;
}
.tree-node:after, .hover-info{
  opacity: 0;
  visibility: hidden;
  transform: translate3d(-30px,0,0);
  -moz-transform: translate3d(-30px,0,0);
  -ms-transform: translate3d(-30px,0,0);
  -o-transform: translate3d(-30px,0,0);
  -webkit-transform: translate3d(-30px,0,0);

  transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -ms-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  -webkit-transition: all 1s ease-in-out;
}
.tree-node.has-info:hover:after, .tree-node.has-info:hover>.hover-info{
  opacity: 1;
  visibility: visible;
  transform: translate3d(0,0,0);
}

.menu-detail .menu-tree div.tree-item {
  height: 50px;
  width: 100%;
  padding: 10px 30px;
  z-index: 1;
  position: relative;
  line-height: 50px;
}

.menu-detail .menu-tree div.tree-item:before{
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 0%;
    height: 100%;
    background: #FFC012;
    z-index: 2;
    transition: width .3s ease-in-out;
    -moz-transition: width .3s ease-in-out;
    -ms-transition: width .3s ease-in-out;
    -o-transition: width .3s ease-in-out;
    -webkit-transition: width .3s ease-in-out;
}

.tree-node:hover div.tree-item:before{
  width: 100%;
}

.menu-tree li.active div.tree-item:before{
  width: 100%;
}

.menu-tree:hover li.active div.tree-item:before{
  width: 2%;
}

.menu-tree li.active:hover div.tree-item:before{
  width: 100%;
}

.menu-detail .menu-tree .tree-item i{
  display: inline-block;
  margin: 0px 6px;
  border-radius: 4px;
  vertical-align: middle;
  z-index: 3;
  position: relative;
  font-size: 18px;
  color: rgba(255,255,255,1);
}
.menu-detail .menu-tree .tree-item a{
  display: inline-block;
  vertical-align: middle;
  margin: 0px 6px;
  color: rgba(255,255,255,1);
  text-decoration: none;
  z-index: 3;
  position: relative;
}

/*菜单中部-内容hover显示信息样式*/
  .hover-info{
    position: absolute;
    margin: 0;
    padding: 0;
    z-index: 0;
    background: rgba(0,0,0,.9);
    right: 300px;
    top: -25px;
    max-height: 410px;
    overflow-y: auto;
    top: -150px;
  }
  .hover-info p, .hover-info a{
    color: rgba(255,255,255,1);
  }
  .hover-info>div, .hover-info>ul{
    margin: 15px;
  }
  .hover-info img{
    display: block;
  }
  .hover-info>ul>li{
    float: left;
    border: 1px solid rgba(255,255,255,.4);
    padding: 5px 20px;
    position: relative;
    margin-right: 15px;
    margin-bottom: 15px;
  }
  .hover-info>ul>li.has-line:after{
    content: '';
    position: absolute;
    top: 50%;
    right: -16px;
    width: 14px;
    border: 1px solid rgba(255,255,255,.4);
  }
  .hover-info>ul>li.info-nav>a{
    position: relative;
    z-index: 3;
  }
  .hover-info>ul>li.info-nav:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #FFC012;
    z-index: 2;
    transform: scale(0,0);
    -moz-transform: scale(0,0);
    -ms-transform: scale(0,0);
    -o-transform: scale(0,0);
    -webkit-transform: scale(0,0);

    transition: transform .3s ease-in-out;
    -moz-transition: transform .3s ease-in-out;
    -ms-transition: transform .3s ease-in-out;
    -o-transition: transform .3s ease-in-out;
    -webkit-transition: transform .3s ease-in-out;
  }
  .hover-info>ul>li.info-nav:hover:before{
    transform: scale(1,1);
  }

/*导航菜单打开关闭按钮样式*/
  .side-open{
    position: fixed;
    width: 40px;
    height: 30px;
    right: 40px;
    top: 25px;
    cursor: pointer;
    z-index: 1001;
    transition: right .3s ease;
    -moz-transition: right .3s ease;
    -ms-transition: right .3s ease;
    -o-transition: right .3s ease;
    -webkit-transition: right .3s ease;
  }
  .side-box.open .side-open{
     right: 324px;
  }
  .side-open>hr{
    position: absolute;
    height: 4px;
    background: #FFC012;
    margin: 0;
    border: 0;
  }
  .side-open>hr:nth-child(1){
    top: 0;
    left: 0;
    width: 100%;
    transform-origin: bottom left;
    -moz-transform-origin: bottom left;
    -ms-transform-origin: bottom left;
    -o-transform-origin: bottom left;
    -webkit-transform-origin: bottom left;

    transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);

    transition: transform .5s .3s ease-in-out;
    -moz-transition: transform .5s .3s ease-in-out;
    -ms-transition: transform .5s .3s ease-in-out;
    -o-transition: transform .5s .3s ease-in-out;
    -webkit-transition: transform .5s .3s ease-in-out;
  }
  .side-open>hr:nth-child(2){
    top: 13px;
    left: 0;
    width: 40%;
    transition: all .5s .3s ease-in-out;
    -moz-transition: all .5s .3s ease-in-out;
    -ms-transition: all .5s .3s ease-in-out;
    -o-transition: all .5s .3s ease-in-out;
    -webkit-transition: all .5s .3s ease-in-out;
  }
  .side-open>hr:nth-child(3){
    top: 13px;
    right: 0;
    width: 40%;
    transition: all .5s .3s ease-in-out;
    -moz-transition: all .5s .3s ease-in-out;
    -ms-transition: all .5s .3s ease-in-out;
    -o-transition: all .5s .3s ease-in-out;
    -webkit-transition: all .5s .3s ease-in-out;
  }
  .side-open>hr:nth-child(4){
    top: 26px;
    left: 0;
    width: 100%;
    transform-origin: top left;
    -moz-transform-origin: top left;
    -ms-transform-origin: top left;
    -o-transform-origin: top left;
    -webkit-transform-origin: top left;

    transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);

    transition: transform .5s .3s ease-in-out;
    -moz-transition: transform .5s .3s ease-in-out;
    -ms-transition: transform .5s .3s ease-in-out;
    -o-transition: transform .5s .3s ease-in-out;
    -webkit-transition: transform .5s .3s ease-in-out;
  }
  .side-box.open .side-open hr:nth-child(1){
    margin-top: -3px;
    transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
  .side-box.open .side-open hr:nth-child(2){
    left: -20px;
    opacity: 0;
  }
  .side-box.open .side-open hr:nth-child(3){
    right: -20px;
    opacity: 0;
  }
  .side-box.open .side-open hr:nth-child(4){
    transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  /*导航菜单底部信息样式*/
  div.menu-footer{
    padding: 30px 35px;
  }
  div.footer-contact{
    overflow: hidden;
  }
  div.footer-contact div.contact-phone{
    float: left;
  }
  div.footer-contact div.contact-phone>p:nth-child(1){
    font-size: 16px;
  }
  div.footer-contact div.contact-phone>p:nth-child(2){ 
    font-size: 20px;
    color: white;
  }
  div.footer-contact button.contact-code{
    background: none;
    border: 0;
    padding: 0;
    float: right;
    margin-top: 14px;
    opacity: 0.5;
  }
  div.footer-contact button.contact-code:hover{
    opacity: 1;
  }
  div.footer-contact button.contact-code>i{
    color: white;
    font-size: 35px;
  }

  div.menu-footer>hr{
    margin: 15px 0px;
    border: 1px solid rgba(158, 158, 158, 0.4);
  }

  div.share-content>a{
    width: 32px;
    height: 32px;
    display: inline-block;
    background-color: rgba(158, 158, 158, 0.2);
    text-align: center;
    line-height: 32px;
    border-radius: 16px;
  }
  div.share-content>a>i{
    color: white;
  }
  div.share-content>a:hover{
    background-color: #FFC012;
  }

  div.footer-share>p{
    margin-top: 15px;
  }
</style>