/*
 * @Author: xiaolong.qiu
 * @Date: 2019-11-06 16:06:12
 * @LastEditTime: 2019-11-06 20:18:09
 */
import Vue from 'vue';
import Vuex from 'vuex';
import { stat } from 'fs';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        author: 'xiaolong',
        todoList: [{id:1, text: '做饭'}, {id:2, text: '学习'}]
    },
    getters: {
        textGetter: (state, getters)=>{
            return `你还有${getters.todoCount}件事情没做噢~`
        },
        todoCount: state => {
            return state.todoList.length;
        },
        getTodoById: state => id => { // 传参
            return state.todoList.find(todo=>todo.id===id).text;
        }
    },
    mutations: { // mutations 必须是同步的
        changeAuthor(state, payload){ // 载荷
            state.author = state.author + payload.lastName
        }
    },
    actions: { // 可以有异步操作
        increment ({ commit }) {
          commit('increment')
        }
      }
})

export default store