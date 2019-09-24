import Vue from 'vue'
import { Button } from 'mint-ui'
import VueLazyload from 'vue-lazyload'

import loading from "./common/images/loading.gif"
import store from "./vuex/store"
import App from './App.vue'
import Header from "./components/Header/Header.vue"
import Star from "./components/Star/Star.vue"
import CartControl from './components/CartControl/CartControl.vue'
import router from './router'
import * as API from './api'
import './validate'
import  "./mock/mockServer"

Vue.use(VueLazyload,{
  loading
})
Vue.config.productionTip = false

//将所有包含接口请求函数的方法的对象保存到vue原型对象上
Vue.prototype.$API = API

//注册全局组件
Vue.component('Header', Header)
Vue.component('Star',Star)
Vue.component('CartControl', CartControl)
Vue.component(Button.name,Button)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
