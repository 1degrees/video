<template>
  <main id="room-home">
    <section class="menus" v-if="menuShow">
      <menus></menus>
    </section>
    <section  class="content">
      <transition name="fadeView">
        <router-view></router-view>
      </transition>
    </section>
    <section class="right-menus">
       <!--  <sideBox></sideBox> -->
    </section>
  </main>
</template>

<script>
import menus from './components/Menu'
import sideBox from './components/SideBox'
export default {
  name: 'Home',
  data () {
    return {}
  },
  computed : {
    menuShow:function(){
      return this.$store.state.menu.show;
    }
  },
  components : { menus,sideBox }
}
</script>
<style>
@keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 50%, 0);
    transform: translate3d(0, 50%, 0); 
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none; 
  }
}
.fadeView-enter-active{
  animation: fadeInDown 0.2s;
} 
@keyframes fadeOutUp{
   from {
    opacity: 1;
    -webkit-transform: none;
    transform: none; 
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -50%, 0);
    transform: (0, -50%, 0); 
  }
}
.fadeView-leave-active {
  animation: fadeOutUp 0s;
}
html,body,div,section,main,nav,body *{margin: 0px;padding: 0px; box-sizing: border-box;}
li{list-style: none;}
a,u{text-decoration: none;}
html, 
body, 
main#room-home{
  width: 100%;
  height: 100%;
  min-width: 768px;
  overflow-y: auto;
  overflow-x: auto;
  font-size: 12px;
  font-family: "Microsoft Yahei";
}
main .menus{
  position: absolute;
  width: 100%;
  z-index: 8;
}
main .right-menus {
  position: static;
}
main .content{
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: black;
  z-index: 7;
}
</style>
