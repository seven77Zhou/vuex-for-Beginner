<template>
	<div class="state">
		<h2>mapState 辅助函数----对象展开运算符的使用<span>(组件countObjOpen)</span></h2>
		<ul>
			<li>count <span>(vuex获取的count状态)</span>: <b>{{count}}</b></li>
			<li>localComputed <span>(本组件计算属性)</span>: <b>{{localComputed}}</b></li>
		</ul>
	</div>
</template>
<style lang="scss" scoped="scoped">
	.state{
		border: 1px solid #ccc;
		h2{
			span{
				font-size: 14px;
			}
		}
		li{
			span{
				font-size: 12px;
			}
		}
	}
</style>
<script>
	// 在单独构建的版本中辅助函数为 Vuex.mapState
	import { mapState } from 'vuex'
	
	export default {
      data(){
		return {
			localCount:10
		}
	  },
	  //mapState 函数返回的是一个对象,如何将它与局部计算属性混合使用呢,这时候需要对象展开运算符
	  computed: {
	  	...mapState([
	  	 	'count'
	  	]),
	  	localComputed (){
	  		return this.localCount+67;
	  	}
	  }
	}
</script>