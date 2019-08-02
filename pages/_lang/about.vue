<template>
  <section class="page page--about">
    <div class="u-container">
      <p class="title u-uppercase">
        {{ $t('about.title') }}
      </p>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.page--about

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
