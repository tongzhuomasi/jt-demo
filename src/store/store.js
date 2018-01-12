import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // 使用Vuex

export default new Vuex.Store({
  state: {
    company: '毕马威信息科技有限公司'
  },
  getters: {
    title: (state) => { return '你好，' + state.company }
  },
  mutations: {
    click: (state) => {
      console.log('点击了按钮')
      return state.company + 'hello'
    }
  },
  actions: {
    increment: ({commit}) => {}
  }
})
