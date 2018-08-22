<template>
  <div id="application" class="application">
    <app-smooth-scroll>
      <!-- transition panel is just useful for transition between pages -->
      <div class="transition-panel"> </div> 
      <app-header class="stagger" />
      <nuxt/>
      <app-footer class="stagger" />
    </app-smooth-scroll>
  </div>
</template>

<script>
  import AppHeader from '~/components/Header.vue'
  import AppFooter from '~/components/Footer.vue'
  import AppSmoothScroll from '~/components/utils/SmoothScroll.vue'
  
  if (process.browser) {
    require('smooth-scrolling/smooth-scrolling')
  }
  
  export default {
    components: {
      AppHeader,
      AppFooter,
      AppSmoothScroll
    },
  
    mounted() {
      this.$nextTick(() => {
        window.smooth.resize()
      })
    },
  
    methods: {
      bindAll() {
        [
          'onScroll'
        ].forEach((fn) => (this[fn] = this[fn].bind(this)))
      },
  
      addListeners() {
        Emitter.on('ON_SCROLL_TICK', this.onScroll)
      },
  
      removeListeners() {
        Emitter.removeListener('ON_SCROLL_TICK', this.onScroll)
      },
  
      onScroll({
        current,
        bounding
      }) {
  
      }
    },
  
    beforeDestroy() {
      this.removeListeners()
    }
  }
</script>

<style lang="stylus" scoped>

.application
  position relative
  overflow hidden

  .transition-panel 
    width 100vw 
    height 100vh 
    position absolute 
    background $colors-B
    left -100%
    z-index 10

</style>


        