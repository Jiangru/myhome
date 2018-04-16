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
    mode: 'history',
    base: __dirname,
    linkActiveClass: 'active',
    routes: routes
})

Vue.config.debug = true // 开启错误提示

Vue.filter('overallFilter', function (value) {
  return `${value}全局过滤器`
})

new Vue({
    el: '#app',
    router,
    // store,
    template: '<App/>',
    components: { App }
})
