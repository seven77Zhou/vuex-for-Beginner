<template>
  <div id="app">
    <img width="180" src="./assets/logo.png">
    <h1>{{ msg }} <span>(下面每个框框都是一个组件，介绍vuex)</span></h1>
    
    <!--mapState 辅助函数 组件-->
    <count></count>
    <!--mapState 辅助函数----对象展开符  组件-->
    <count-obj-open></count-obj-open>
    
    <!--mapGetters 辅助函数 组件-->
    <getter></getter>
    
    <!--mutation 组件-->
    <mutations></mutations>
    <map-mutations></map-mutations>
    <!--mutation 常量  组件-->
    <mutation-type></mutation-type>
    
    <!--actions 组件-->
    <actions></actions>
    
  </div>
</template>

<script>
import count from './components/count'
import countObjOpen from './components/countObjOpen'
import getter from './components/getter'
import mutations from './components/mutations'
import mapMutations from './components/mapMutations'
import mutationType from './components/mutationType'
import actions from './components/actions'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Vuex study'
    }
  },
  components:{
  	count,
  	countObjOpen,
  	getter,
  	mutations,
  	mapMutations,
  	mutationType,
  	actions
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
h1 span{font-size: 12px;}
</style>
