import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import map from './modules/map'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    map,
  },
  getters
})

export default store