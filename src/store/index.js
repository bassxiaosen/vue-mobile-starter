import Vue from 'vue'
import Vuex from 'vuex'
import FooData from './modules/FooData.js'
import BarData from './modules/BarData.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    FooData,
    BarData
  }
})

export default store