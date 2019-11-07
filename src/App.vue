<!--
 * @Author: xiaolong.qiu
 * @Date: 2019-11-06 10:27:32
 * @LastEditTime: 2019-11-07 19:24:26
 -->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

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

    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Vue from 'vue'
// import Vue from 'vue/dist/vue.esm.js'
export default {
  name: 'app',
  data(){
    return {
      value: 'hello'
    }
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
