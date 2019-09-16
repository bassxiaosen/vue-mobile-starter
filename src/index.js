import Vue from "vue"
import "./styles/global.less"
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css'

import Index from "./pages/Index"

import('element-ui').then(ElementUI => {
  Vue.use(ElementUI)
  new Vue({render: h => h(Index)}).$mount('#root')
})