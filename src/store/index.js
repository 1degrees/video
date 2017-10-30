import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import menu from './menu'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home,
    menu
  }
})

export default store;
