import Vue from 'vue'
import Vuex from 'vuex'

import shop from '../api/shop'
import { SOME_MUTATION,ADD_STR,SET_CART_ITEMS,SET_CHECKOUT_STATUS } from './mutation-types'

Vue.use(Vuex)

//vuex
export default new Vuex.Store({
	//每当 store.state.count 变化的时候, 都会重新求取计算属性，并且触发更新相关联的 DOM。
  state: {
    count: 1,
    todos:[
    	{id:1,text:'第一条',done:true},
    	{id:2,text:'第二条',done:false},
    	{id:3,text:'第三条',done:true}
    ],
    msg:'hello',
    added: [{"id":"1","name":"橙子"}],
    checkoutStatus: null
  },
  //它会接受 state 作为第一个参数
  getters: {
  	doneTodos:state => {
  		//业务逻辑:过滤掉done为false的数据
      return state.todos.filter(todo => todo.done) 
   }, 
   //Getter 也可以接受其他 getter 作为第二个参数：
   doneTodosCount:(state, getters) => {
	    return getters.doneTodos.length
   },
   evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
  },
  //它会接受 state 作为第一个参数
  mutations: {
    increment (state) { //increment: state => state.count++,
      state.count++
    },
	decrement (state) {
	  state.count--
	},
    incrementBy :(state,payload) => {
    	state.count += payload.amount
    },
    reduction (state,n){
    	 state.count -= n
    },
    //常量写法
    [ADD_STR](state){
    	state.msg +=' world!'
    },
    [SET_CART_ITEMS] (state, { items }) {
	  state.added = items
	},
	
	[SET_CHECKOUT_STATUS] (state, status) {
	  state.checkoutStatus = status
	}
  },
  actions : {
	  incrementIfOdd ({ commit, state }) {
	    if ((state.count + 1) % 2 === 0) {
	      commit('increment')
	    }
	  },
	  //Actions 支持同样的载荷方式和对象方式,下面是以对象形式为例
	  incrementAsync ({ commit },amount) {
	    setTimeout(() => {
	      commit('incrementBy',{amount:amount})
	    }, 1000)
	  },
	  checkout ({ commit, state }, products) {
	    const savedCartItems = [...state.added]
	    commit(SET_CHECKOUT_STATUS, null)
	    // empty cart
	    commit(SET_CART_ITEMS, { items: [] })
	    shop.buyProducts(
	      products,
	      () => commit(SET_CHECKOUT_STATUS, 'successful'),
	      () => {
	        commit(SET_CHECKOUT_STATUS, 'failed')
	        // cheout失败，就将原来的数据复原
	        commit(SET_CART_ITEMS, { items: savedCartItems })
	      }
	    )
	  }
  }
})
