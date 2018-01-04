<template>
	<div class="mapmutation">
		<h2>mapMutations 辅助函数</h2>
		<p>点击按钮可以看到其他组件中数据的变化，如组件组件count</p>
		<span @click = "increment()">点击+</span>
		<span @click = "incrementBy(amountData)">点击+7</span>
		<span @click = "reduce(n)">点击-2</span>
	</div>
</template>
<script>
	import { mapMutations } from 'vuex'

	export default {	  
	  data(){
	  	return {
	  		amountData:{amount:7,id:1},
	  		n:2
	  	}
	  },
	  // ...
	  methods: {
	    ...mapMutations([
	      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
	
	      // `mapMutations` 也支持载荷：
	      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amountData)`
	    ]),
	    ...mapMutations({
	      reduce: 'reduction' // 将 `this.reduce()` 映射为 `this.$store.commit('reduction')`
	    })
	  }
	}
</script>
<style lang="scss" scoped="scoped">
	.mapmutation{
		border-bottom: 1px solid #ccc;
		padding: 20px 0;
		span{
			display: inline-block;
			padding: 2px 5px;
			background: #eee;
			border: 1px solid #333;
			cursor: pointer;
		}
	}
</style>