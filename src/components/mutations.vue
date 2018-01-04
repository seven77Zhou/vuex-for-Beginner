<template>
	<div class="mutation">
		<h2>直接调用<span>（this.$store.commit）</span></h2>
		<p>通过点击改变state中count值，可以看其他组件中数据的变化</p>
		<span class="btn" @click="test()">点击改变state中count值</span>
		
	</div>
</template>
<style lang="scss" scoped="scoped">
	.mutation{
		border-bottom: 1px solid #ccc;
		padding-bottom: 20px;
		h2{
			span{
				font-size: 14px;
			}
		}
		.btn{
			display: inline-block;
			cursor: pointer;
			padding: 2px 4px;
			border: 1px solid #666;
			background: #eee;
			font-size: 15px;
		}
	}
</style>
<script>
	export default {
	  // ...
	  methods: {
	    test(){
	    	this.$store.commit('increment')
	    }
	  }
	}
</script>