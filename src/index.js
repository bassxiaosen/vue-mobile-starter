import Vue from "vue"
import VueRouter from "vue-router"
import router from "@/router/index"
import App from "@/App.vue"
import "./styles/global.less"

Vue.use(VueRouter)

new Vue({render: h => h(App), router}).$mount('#root')