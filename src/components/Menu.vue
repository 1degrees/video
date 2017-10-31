<template>
    <el-row class="menu">
        <el-col :push="1" :xs="6" :sm="5" :md="4" :lg="3"  class="logo">
          <img src="../assets/img/logo.png"/>
        </el-col>
        <el-col :xs="16" :sm="16" :md="15" :lg="14" class="menu-detail">
          <ul class="menu-tree">
            <template>
              <li class="tree-node" v-for="(e,i) in menus" :key="i">
                  <div class="tree-item">
                      <router-link class="link" :to="e.link" tag="a">{{e.name}}</router-link>
                  </div>
              </li>
            </template>
            <li class="tree-node">
              <div class="tree-item">
                  <router-link v-if="!userInfo" :to="'login'" class="personal" title="登陆/注册" tag="a"></router-link>
                  <a class="user-info" v-else><img src="../assets/img/50.jpg" title="已登陆" /></a>
              </div>
            </li>
          </ul>
        </el-col>
    </el-row>
</template>
<script>
export default {
  name: 'menus',
  data () {
    return {
      menus : [{name:"首页",link:"home"},
               {name:"资讯",link:"info"},
               {name:"视频",link:"mv"},
               {name:"购票",link:"buy"},
               {name:"关于",link:"about"}]
    }
  },
  computed: {
    userInfo: function () {
      console.log(this.$store.state.home.username);
      return this.$store.state.home.username && this.$store.state.home.status?true:false;
    }
  }
}
</script>
<style scoped>
@media (min-width: 1200px){
}
@media (min-width: 992px){
}
@media (min-width: 768px){
}

div.menu{
  height: 80px;
}
div.logo{
  height: 80px;
}
div.logo img{
  margin-top: 20px; 
}
.menu-detail{
  float: right;
  overflow: hidden
}
.menu-tree{
  width: 606px;
  line-height: 80px;
  float: right;
}
.menu-tree li.tree-node,
.menu-tree div.tree-item{
  height: 80px;
  width: 100px;
  
}
.menu-tree li.tree-node {
  display: inline-block;
}
.menu-tree .tree-item a.link{
  display: inline-block;
  margin-top: 20px;
  height: 32px;
  line-height: 32px;
  width: 80px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-decoration: none;
}
.menu-detail .menu-tree .tree-item a.link:hover,
.menu-detail .menu-tree a.router-link-active{
  border-radius: 16px;
  border: 1px solid #b3b1b1;
}
a.personal{
  position: relative;
  display: inline-block;
  height: 32px;
  width: 100px;
  background: url(../assets/img/account-icon.gif) center no-repeat;
  vertical-align: middle;
}
a.user-info{
    width: 80px;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    border-left: 1px solid white;
    vertical-align: middle;
    text-align: center;
}
a.user-info>img{
    width: 30px;
    height: auto;
    border-radius: 100%;
}
a.personal::before{
  content: '';
  height: 18px;
  width: 1px;
  position: absolute;
  top: 6px;
  border-left: 1px solid #b3b1b1;
}
</style>
