import Vue from "vue"
import Index from "./pages/Index"
import "./styles/global.less"

new Vue({render: h => h(Index)}).$mount('#root')