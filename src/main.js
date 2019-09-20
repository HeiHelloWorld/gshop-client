import Vue from 'vue'

import store from "./vuex/store"
import App from './App.vue'
import Header from "./components/Header/Header.vue"
import Star from "./components/Star/Star.vue"
import router from './router'

Vue.config.productionTip = false

//注册全局组件
Vue.component('Header', Header)
Vue.component('Star',Star)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
