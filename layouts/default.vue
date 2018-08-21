<template>
  <div id="application" class="application">
    <nuxt/>
  </div>
</template>

<script>
import AppHeader from '~/components/Header.vue'
import AppFooter from '~/components/Footer.vue'

if (process.browser) {
  require('smooth-scrolling/smooth-scrolling')
}

export default {
  components: {
    AppHeader, 
    AppFooter
  },
}

</script>

<style lang="stylus" scoped>

.application
  position relative
  overflow hidden
  
</style>


        