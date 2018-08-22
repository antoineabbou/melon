<template>
	<h1 class="logo stagger"> MELON </h1> 
</template>

<script>

export default {
}
</script>

<style lang="stylus" scoped>

.logo
	font-size 24px
	font-family $baldinger-bold 
	color $colors-B
	position absolute 
	top 30px
	letter-spacing 4px
	text-align center
	left 0; right 0

	+above($breakpoints-m)
		text-align left
		left 50px 

	+above($breakpoints-l)
		top 50px
	
	+above($breakpoints-xxxl)
		font-size 36px

</style>
