<template lang="html">
  <div ref="loader" class="loader u-flex-v-centered">
    <h1 ref="title" class="loader__title">
      MELON
    </h1>
  </div>
</template>

<script>
import { TimelineLite, Expo } from 'gsap'
export default {
  name: 'TheLoader',

  mounted() {
    const tl = new TimelineLite({
      onComplete: () => {
        this.$store.dispatch('loading/setLoaded', true)
      }
    })

    tl.to(this.$refs.title, 1, {
      autoAlpha: 1,
      ease: Expo.easeOut
    })

    setTimeout(() => {
      tl.to([this.$refs.loader, this.$refs.title], 1, {
        autoAlpha: 0,
        ease: Expo.easeOut
      })
    }, 1000) // FAKE LOADING | REMOVE IT
  }
}
</script>

<style lang="stylus">
.loader
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  width 100%
  height 100%
  z-index 100
  background $colors-main-white

  &__title
    margin auto
    font-family objectsans-bold
    font-size 40px
    letter-spacing 10px
    position relative
    overflow hidden
    opacity 0

    +above($breakpoints-m)
      font-size 60px
      letter-spacing 20px

</style>
