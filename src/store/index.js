// import { createStore } from 'vuex'
import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
import { reactive } from 'vue'

const store = reactive({
  state,
  actions,
  mutations,
  getters,
})

export default store;