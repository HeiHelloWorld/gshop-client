<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide"
export default {
  name: 'App',

  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  
</style>
