import Vue from 'vue'
import App from './App.vue'
import Header from "./components/Header/Header.vue"
import router from './router'

Vue.config.productionTip = false

//注册全局组件
Vue.component('Header',Header)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
