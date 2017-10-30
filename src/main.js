// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import store from './store/index'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Element);

const router = new VueRouter({
	routes
});

new Vue({
  router,
  store,
  template : `<div id="app"><router-view></router-view></div>`
}).$mount('#app')