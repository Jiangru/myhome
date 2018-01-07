import Vue from 'Vue'
import App from './app.vue'
import iView from 'iview'
import VueRouter from 'vue-router'
import 'iview/dist/styles/iview.css' // 使用css

import routes from './router/routes'

import '@/assets/css/main.less'
require("font-awesome-webpack");
// import '@/assets/css/font-awesome.css'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    linkActiveClass: 'active',
    routes: routes
})

Vue.config.debug = true // 开启错误提示
new Vue({
    el: '#app',
    router,
    // store,
    template: '<App/>',
    components: { App }
})