<template>
	<div class="gitter">
		<h2>mapGetters 辅助函数 <span>(组件getter)</span></h2>
		<p>有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数：</p>
		<p>getter(列表计数)</p>
		<ul>
			<li v-for="(item,index) in doneTodos">
				<span>id:</span> <b>{{item.id}} </b>
				----AND----
				<span>text:</span> <b>{{item.text}} </b>
			</li>
		</ul>
		<div>
			getter(列表计数)---doneTodosCount: <b>{{doneTodosCount}}</b>	
		</div>
	</div>
</template>
<style lang="scss" scoped="scoped">
	.gitter{
		border: 1px solid #ccc;
		padding-bottom: 10px;
		h2{
			span{
				font-size: 14px;
			}
		}
		p{
			font-size: 15px;
		}
		li{
			display: block;
		}
	}
</style>
<script>
	import { mapGetters } from 'vuex'
	export default {
	  // ...
	  computed: {
	  // 使用对象展开运算符将 getter 混入 computed 对象中
	    ...mapGetters([
	      'doneTodos',
	      'doneTodosCount',
	      // ...
	    ])
	  },
	  mounted(){
	  	console.log(this.doneTodos)
	  }
	}
</script>