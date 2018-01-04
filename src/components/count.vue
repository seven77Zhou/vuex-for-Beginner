<template>
	<div class="state">
		<h2>mapState 辅助函数 <span>(组件count)</span></h2>
		<ul>
			<li>count: {{count}}</li>
			<li>countAlias: {{countAlias}}</li>
			<li>countPlusLocalState: {{countPlusLocalState}}</li>
		</ul>
	</div>
</template>
<style lang="scss" scoped="scoped">
	.state{
		border: 1px solid #ccc;
	}
	h2{
		span{
			font-size: 14px;
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
	  //mapState 函数返回的是一个对象,如何将它与局部计算属性混合使用呢,哈哈，这时候需要对象展开运算符：https://github.com/tc39/proposal-object-rest-spread
	  //此问题在countObjOpen组建中解决
	  computed: mapState({
	    // 箭头函数可使代码更简练
	    count: state => state.count,
	    // 传字符串参数 'count' 等同于 `state => state.count`
	    countAlias: 'count',
	
	    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
	    countPlusLocalState (state) {
	      return state.count + this.localCount
	    }
	  })
	//  当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个 *字符串数组*。
	//computed: mapState([
	  // 映射 this.count 为 store.state.count
	  //'count'
	//])
	}
</script>