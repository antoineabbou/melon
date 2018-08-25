<template>
  <div class="vs-section" ref="vs">
    <slot></slot>
  </div>
</template>

<script>
  if (process.browser) {
    let Scroll = require('~/assets/js/utils/Scroll')
  }
  import Emitter from '~/assets/js/utils/events'
  
  export default {
  
    computed: {},
  
    mounted() {
      this.bindAll()
      this.addListeners()
      this.initScroll()
    },
  
    props: {
      native: {
        default: true,
        type: Boolean,
      },
      disableHeaderHidden: {
        default: true,
        type: Boolean,
      },
      ease: {
        default: .1,
        type: Number,
      }
    },
  
    methods: {
      addListeners() {
        window.addEventListener('resize', this.onResize)
        this.initScroll()
      },
  
      bindAll() {
        [
          'init'
        ].forEach((fn) => (this[fn] = this[fn].bind(this)))
      },
  
      init() {
        if (this.initialized) return
  
        this.smooth.init()
        this.smooth.extends = false
        this.initialized = true
      },
  
      initScroll() {
        if (this.smooth) return
        this.smooth = new Smooth({
          native: this.native,
          section: this.$refs.vs,
          ease: this.ease,
          preload: true,
          callback: () => {
            Emitter.emit('ON_SCROLL_TICK', this.smooth.vars)
          }
        })
  
        this.init()
        window.smooth = this.smooth
      },
  
      onResize() {
        if (this.smooth) {
          this.smooth.resize()
        }
      },
  
      scrollTo(elem) {
        this.offset = this.getFormCoords(this.$el.querySelector(`.${elem}`))
        this.smooth.scrollTo(this.offset.top - this.headerHeight)
      },
  
    },
  
    beforeDestroy() {
      this.initialized = false
      this.smooth && this.smooth.destroy()
    }
  }
</script>

<style lang="stylus">
</style>
