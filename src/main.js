import Vue from 'Vue'
import App from './app.vue'

import '@/assets/css/main.less'

Vue.config.debug = true // 开启错误提示
new Vue({
    el: '#app',
    // router,
    // store,
    template: '<App/>',
    components: { App }
})