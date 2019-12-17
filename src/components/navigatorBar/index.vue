<template>
	<div class="nav-bar">
		<div class="content">
			<div class="nav-bar-left">
				<div class="nav-bar-item" v-for="(item,index) in navData" :key="index" @mouseover="enterNavBarItem(index)" @mouseleave="enterNavBarItem(-1)">
					<div class="nav-bar-active-bg" :style="`top:${navIndex==index?0:-50}px;left:${index*80}px;`"></div>
					{{item}}
				</div>
			</div>
			<div class="nav-bar-right">
				<div class="nav-bar-item" @mouseover="enterNavBarItem(navData.length)" @mouseleave="enterNavBarItem(-1)">
					<div class="nav-bar-active-bg" :style="`top:${navIndex==navData.length?0:-50}px;right:80px;`"></div>
					登录
				</div>
				<div class="nav-bar-item" @mouseover="enterNavBarItem(navData.length+1)" @mouseleave="enterNavBarItem(-1)">
					<div class="nav-bar-active-bg" :style="`top:${navIndex==navData.length+1?0:-50}px;right:0px;`"></div>
					注册
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				navIndex:-1,
				navData:['首页','首页','首页','首页']
			}
		},
		methods:{
			enterNavBarItem(index){
				this.navIndex = index;
			}
		}
	}
</script>
<style scoped lang="stylus">
.nav-bar
	position fixed
	top 0 
	left 0
	width 100%
	height 50px
	background rgba(0,0,0,.5)
	z-index 999
	color #fff
	.content
		position relative
		display flex
		justify-content space-between
		max-width 1100px
		margin 0 auto
		line-height 50px
		height 50px
		overflow-x hidden
		.nav-bar-left
			display flex
		.nav-bar-item,.nav-bar-menus
			width 80px
			text-align center
			cursor pointer
		.nav-bar-active-bg
			position absolute
			top -50px
			height 50px
			width 80px
			transition top .2s
			background rgba(255,255,255,.3)
			z-index -1
		.nav-bar-right
			display flex
			height: 50px;
				
</style>