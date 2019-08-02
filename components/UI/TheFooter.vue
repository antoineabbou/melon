<template>
  <footer class="footer">
    <no-ssr>
      <p class="footer__inner" v-html="$t('footer.description')" />
      <p class="footer__inner" v-html="$t('footer.link')" />
    </no-ssr>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="stylus" scoped>
.footer
  position absolute
  left 0
  right 0
  bottom 30px
  text-align center
  margin auto
  max-width $layout-container

  +above($breakpoints-xxl)
    max-width $layout-container-xxl

  &__inner
    font-size 14px
    line-height 20px

    &:last-child
      margin-top 10px
</style>
