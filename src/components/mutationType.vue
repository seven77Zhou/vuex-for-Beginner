<template>
	<div class="mutationType">
		<h2>使用常量替代 Mutation 事件类型<p>注：这些常量放在单独的文件中可以让你的代码合作者对整个 app 包含的 mutation 一目了然</p></h2>
		
		<p>显示字符：<b>{{getMsg}}</b></p>
		<span class="btn" @click="add()">点击修改字符</span>
	</div>
</template>
<script >
import { mapMutations } from 'vuex'
	export default{
		computed:{
			getMsg(){
				return this.$store.state.msg
			}
		},
		methods: {
			...mapMutations({
		      add: 'ADD_STR' 
		    })
		}
	}
</script>
<style scoped="scoped">
	.mutationType .btn{
		display: inline-block;
		padding: 2px 5px;
		background: #eee;
		border: 1px solid #333;
		font-size: 14px;
		cursor: pointer;
	}
	h2 p{font-size: 13px;}
</style>