import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import router from "@/router/index"
import store from "@/store/index"
import App from "@/App.vue"
import "./styles/global.less"


new Vue({render: h => h(App), router, store}).$mount('#root')