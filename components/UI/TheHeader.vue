<template lang="html">
  <header class="header u-flex">
    <nav class="header__navigation u-flex-v-centered u-flex-space-between">
      <p class="navigation__item">
        <nuxt-link class="navigation__item__link" :to="$i18n.path('')">
          {{ $t('menu.home') }}
        </nuxt-link>
      </p>
      <p class="navigation__item">
        <nuxt-link class="navigation__item__link" :to="$i18n.path('about')">
          {{ $t('menu.about') }}
        </nuxt-link>
      </p>

      <p v-if="$store.getters['locale/current'] !== 'fr'" class="navigation__item">
        <!-- <nuxt-link class="navigation__item__link" :to="$route.fullPath.replace(/^\/[^\/]+/, '/')" @click="$store.commit('locale/SET_LOCALE', locale)">
          fr
        </nuxt-link> -->
        <nuxt-link :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="navigation__item__link" active-class="none" exact @click="$store.commit('locale/SET_LOCALE', locale)">
          fr
        </nuxt-link>
      </p>

      <p v-else class="navigation__item">
        <nuxt-link class="navigation__item__link" :to="`/en` + $route.fullPath" @click="$store.commit('locale/SET_LOCALE', 'en')">
          en
        </nuxt-link>
      </p>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style lang="stylus" scoped>
.header
  position fixed
  top 80px
  left 50%
  transform translateX(-50%)
  max-width $layout-container
  width 100%
  z-index 10

  +above($breakpoints-m)
    top 50px

  +above($breakpoints-xxl)
    max-width $layout-container-xxl

  &__navigation
    text-align center
    margin auto

    +above($breakpoints-m)
      text-align left
      margin-left 0
      margin-right auto

    .navigation__item
      font-size 14px

      &:not(:first-child)
        margin-left 25px

      &__link
        color $colors-main-black
</style>
