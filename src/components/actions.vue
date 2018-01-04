<template>
  <div class="actions">
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    <br />
    <br />
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync(8)">Increment async</button>
    <div class="shopcart">
    	<h4>购物车示例</h4>
    	<p>数据初始状态：购物车：<span v-for="(item, index) in $store.state.added">{{item.id}}，{{item.name}}</span>------checkout状态：{{$store.state.checkoutStatus?$store.state.checkoutStatus:'空'}}</p>
    	<button @click="checkout({id:2})">点击看数据状态</button>
    	<p class="tips">注：当异步请求结果为successful,购物车数据被清空。每次点击都会发起异步请求。 如果购物车数据被清空，后期点击不会再出现</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions([
    'incrementIfOdd',
    'incrementAsync',
    'checkout'
  ]),
  mounted(){
  	console.log(this.incrementIfOdd)
  }
}
</script>

<style lang="scss" scoped="scoped">
	.actions{
		border: 1px solid #ccc;
		padding: 20px 0;
	}
	.shopcart{border-top: 1px solid #eee;margin-top: 20px;}
	.tips{font-size: 12px; color: #f63;}
</style>