<!--
 * @Author: xiaolong.qiu
 * @Date: 2019-11-06 10:27:32
 * @LastEditTime: 2019-11-06 20:15:55
 -->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <!-- <p @click="$store.commit('changeAuthor')">{{name}}</p>  -->
    <p @click="changeName">{{name}}</p> 
    <!-- <p>todoCount:{{ this.$store.getters.todoCount }}</p> -->
    <p>todoCount:{{ todoCount }}</p>
    <p @click="addNewState">新增状态</p>
    <p>{{ this.$store.getters.textGetter }}</p>
    <p>{{ this.$store.getters.getTodoById(1) }}</p>
    <p>{{ getTodoById(2) }}</p>
    <p>{{ this.$store.state.newProp }}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Vue from 'vue'
export default {
  name: 'app',
  data(){
    return {

    }
  },
  computed: {
      name () {
        return this.$store.state.author
      },
      // todoCount(){
      //   return this.$store.getters.todoCount
      // },
      ...mapGetters([ // mapGetters
        'getTodoById',
        'todoCount'
      ])
    },
    methods: {
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
