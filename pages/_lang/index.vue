<template lang="html">
  <section class="page page--home">
    <div class="u-container">
      <h1 class="title u-uppercase">
        {{ $t("home.title") }}
      </h1>
    </div>
  </section>
</template>
<script>
/* eslint-disable no-unused-vars */
import App from '~/assets/js/App'

export default {
  name: 'Home'
}
</script>

<style lang="stylus" scoped>
.page--home
  .title
    text-align center
    padding-top 40px
    font-family objectsans-bold
    letter-spacing 1.2px
    font-size 24px
    pointer-events none

    +above($breakpoints-m)
      padding-top 50px

</style>
