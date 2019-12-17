<template>
	<div class="welPage fade-in" :style="`opacity:${fadeToggle}`">
		<div class="content">
			<div>
				<h1>{{title}}</h1>
			</div>
			<div>
				<h5>{{content}}</h5>
			</div>
			<div>
				<button @click="startVisit" class="toVisit">Start Visit</button>
			</div>
			<div class="attention">
				<a href="" target="_blank"><i></i></a>
				<a href="https://github.com/EricZhang809" target="_blank"><i class="iconfont icon-github"></i></a>
				<a href="https://wpa.qq.com/msgrd?v=3&uin=1439286592&site=qq&menu=yes" target="_blank"><i class="iconfont icon-qq"></i></a>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				title:"南海",
				content:"北冥有鱼，南海有鸢。",
				fadeToggle:1
			}
		},
		methods:{
			startVisit(){
				let time;
				this.fadeToggle = 0;
				clearTimeout(time);
				time = setTimeout(()=>{
					this.$router.push({
						name:'home'
					})
					time = null;
				},1000)
				
			}
		},
	}
</script>

<style lang="stylus" scoped="scoped">
	.welPage
		display flex
		align-items center
		width 100vw
		height 100vh
		transition opacity 1s
		background-image url('http://pic1.win4000.com/wallpaper/2018-05-23/5b052fd72d507.jpg')
		background-repeat no-repeat
		background-position center
		overflow hidden
		.content
			display flex
			flex-direction column
			align-items center
			height 200px
			width 100vw
			text-align center
			color #fff
			div
				width 100vw
				h1
					padding 10px 0
					height 60px
					line-height 60px
					font-size 50px
					font-weight 500
				h5
					padding-bottom 20px
			.toVisit
				width 200px
				height 40px
				line-height 40px
				margin-bottom 20px
				color #fff
				font-size 20px
				background rgba(0,0,0,.2)
				border-radius 15px
				border 2px solid rgba(82, 140, 224,.3)
			.attention
				display flex
				justify-content space-between
				width 150px
				margin 0 auto
				a
					width 30px
					height 30px
					line-height 30px
					color #fff
					font-size 20px
					background rgba(0,0,0,.2)
					border-radius 15px
					border 2px solid rgba(82, 140, 224,.3)
</style>
