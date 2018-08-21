<template>
  <section class="page page--home">
    
    <app-smooth-scroll> 
      <p> {{ $t('home.title')}} </p>
    </app-smooth-scroll>
   
  </section>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  import Emitter from '~/assets/js/utils/events'
  import THREE from '~/plugins/three.js'

  // Components
  import AppSmoothScroll from '~/components/utils/SmoothScroll.vue'

  export default {
    components: {
      AppSmoothScroll
    },

    data() {
      return {
      }
    },

    computed: {
      ...mapState([
        'locale'
      ])
    },

    transition: {
      mode: 'out-in',
      css: false,
      enter(el, done) {
        let tl = new TimelineMax({
          onComplete: done
        })
      },


      leave(el, done) {
        let tl = new TimelineMax({
          onComplete: done
        })

      },
    },

    mounted() {
      this.bindAll()
      window.smooth.resize()
      this.addListeners()
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
.page
  &--home
    position relative

</style>
