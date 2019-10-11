import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
  // getters: {     这一段是演示 getters， 类似组件的计算属性，需要 state 数据做一些计算变化时使用
  //   doubleCity (state) {
  //     return state.city + ' ' + state.city
  //   }
  // }
})
