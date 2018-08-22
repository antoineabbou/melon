<template>
  <header class="header"> 
    <nav class="navigation">
      <li class="navigation__item">
        <nuxt-link class="navigation__item-link" :to="`/${locale}`"> {{ $t('menu.home') }} </nuxt-link>
      </li>
      <li class="navigation__item">
        <nuxt-link class="navigation__item-link" :to="`/${locale}/about`"> {{ $t('menu.about') }} </nuxt-link>
      </li>

      <li v-if="locale !== 'fr'" class="navigation__item">
        <nuxt-link class="navigation__item-link" :to="$route.fullPath.replace(/^\/[^\/]+/, '')" @click="setLang('fr')"> fr </nuxt-link>
      </li>

      <li v-if="locale !== 'en'" class="navigation__item">
        <nuxt-link class="navigation__item-link" :to="`/en` + $route.fullPath" @click="setLang('en')"> en </nuxt-link>
      </li>
    </nav>

  </header>
</template>

<script>

import { 
  mapState 
  } from 'vuex'

export default {
  computed: {
    ...mapState([
      'locale'
    ])
  },

  methods: {
    setLang(locale) {
      this.$store.dispatch('setLang', locale)
    }
  }

}
</script>

<style lang="stylus" scoped>

.header
  position absolute 
  z-index 1
  width 100%
  top 30px
  text-align center
  
  +above($breakpoints-m)
    width auto
    right 30px
  
  +above($breakpoints-l) 
    right 50px 
    top 50px

  .navigation
    list-style-type none 
    font-family $baldinger

    &__item 
      display inline-block 
      margin 0px 10px
      font-size 14px 

      +above($breakpoints-m)
        margin 0 20px
        font-size 18px 
      
      +above($breakpoints-xxxl)
        margin 0 30px
        font-size 24px 

      &-link
        text-decoration none 
        color $colors-B


</style>
