<template>
		<footer class="footer">
				<p class="footer__inner"> A nuxt.js starter for creative development made by <a class="link" href="https://twitter.com/antoineabbou" target="_blank"> Antoine Abbou </a> ✌️ </p>
		</footer>
</template>

<script>
		export default {
		
		}
</script>

<style lang="stylus" scoped>

.footer
	position absolute 
	bottom 30px; left 0; right 0
	width 90% 
	font-family $baldinger
	text-align center 
	margin auto     
	color $colors-B

	+above($breakpoints-m)
		width 100%
		
	&__inner 
		font-size 14px 

		+above($breakpoints-m)
			font-size 18px 
			
		+above($breakpoints-xxxl)
			font-size 24px 

		.link
			font-family $baldinger-bold 
			text-decoration none 
			transition 1s hover ease-out
			color $colors-B
			display inline-block
			position relative

			&:after
				content ''
				display block
				height 2px
				width 0%
				background $colors-B
				transition width .15s ease-in-out

			&:hover
				&:after
					width 100%

		
</style>