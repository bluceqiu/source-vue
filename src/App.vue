<!--
 * @Author: xiaolong.qiu
 * @Date: 2019-11-06 10:27:32
 * @LastEditTime: 2019-11-21 16:52:23
 -->
<template>
  <div id="app">
    <img alt="Vue logo" src="">

    <!-- <p @click="$store.commit('changeAuthor')">{{name}}</p>  -->
    <p @click="changeName">{{name}}</p> 
    <!-- <p>todoCount:{{ this.$store.getters.todoCount }}</p> -->
    <p>todoCount:{{ todoCount }}</p>
    <button @click="addNewState">新增状态</button>
    <p>{{ this.$store.getters.textGetter }}</p>
    <p>{{ this.$store.getters.getTodoById(1) }}</p>
    <p>{{ getTodoById(2) }}</p>
    <p>{{ this.$store.state.newProp }}</p>

    <p>{{getOrGetter}}</p>
    <button @click="goTestSet">test computed setter</button>

    <router-link to="/abc">abc</router-link>
    <router-link to="/def">def</router-link>
    <router-link to="/user/white?id=1#222">user</router-link>
    <!-- /:color->$route.params
    ?id=1 -> $route.query
    #xxx -> $route.hash -->

    <router-view></router-view>

    <button @click="tryFn">测试箭头函数在methods里面的表现</button>

    <cw/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Vue from 'vue'
// import Math from '../src/math'
// import Vue from 'vue/dist/vue.esm.js'
import cw from './components/computed&watch';

export default {
  name: 'app',
  components:{
    cw
  },
  data(){
    return {
      value: 'hello'
    }
  },
  mounted(){
    window.xxx = this;
    console.log(this);

    let arr = [1,2,3]
    for(let i=0; i<arr.length; i++){
      let fn = i=>{
        setTimeout(() => { // 这里的函数不能有i ，否则找不到外层的i，就会是undefined
          console.log('check:',arr[i]);
        }, 0);
      }
      fn(i);
    }


    // for (var i = 0; i < 5; i++) {
    //     (function (i) {
    //         setTimeout(function () {
    //             console.log(i);
    //         }, 0);
    //     })(i);
    // }

  // const math = new Math();

  // // passed parameters should get logged now
  // let result = math.add(2, 4);

  // console.log(result)

    
  },
  computed: {
      getOrGetter: {
        get(){
          return this.value + 'world;'
        },
        set(newVal){
          this.value = newVal + 1;
        }
      },
      name () {
        return this.$store.state.author
      },
      // todoCount(){ // 直接获取getters
      //   return this.$store.getters.todoCount
      // },
      ...mapGetters([ // mapGetters
        'getTodoById',
        'todoCount'
      ])
    },
    methods: {
      goTestSet(){
        this.getOrGetter = 'everyBody';
      },
      changeName(){
        this.$store.commit({
          type: 'changeAuthor',
          lastName: '.qiu'
        })
      },
      addNewState(){
        Vue.set(this.$store.state, 'newProp', 123);
      },
      tryFn: ()=>{
        debugger
        console.log(this) // undefined,  箭头函数内的this指向的是定义时候的父级作用域的上下文， 定义时的this为什么为undefined
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
