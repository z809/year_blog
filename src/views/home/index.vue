<template>
	<div class="fade-in">
		<nav-bar></nav-bar>
		<div class="cover">
			<div class="page-msg">
				<h1>南海</h1>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
</script>

<style scoped="scoped" lang="stylus">
	.cover
		position relative
		width 100%
		height 500px
		background-image url('http://pic1.win4000.com/wallpaper/2018-05-23/5b052fd72d507.jpg')
		background-size 100% auto 
		background-repeat no-repeat
		.page-msg
			position absolute
			top 0
			bottom 0
			width 100%
			height 150px
			color #fff
			margin auto
			text-align center
			h1
				width 100%
				height 80px
				font-weight 540
				font-size 40px
				line-height: 80px;
</style>
