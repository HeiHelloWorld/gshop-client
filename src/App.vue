<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
  import FooterGuide from "./components/FooterGuide/FooterGuide"
  import {reqAddress} from './api/index'
  export default {
    name: 'App',

    async mounted (){
      this.$store.dispatch('getAddress')
      const result=await reqAddress("116.36867","40.10038")
    },
   
    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  
</style>
