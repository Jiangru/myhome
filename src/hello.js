import Vue from 'Vue'
import Hello from './hello.vue'

import '@/assets/css/main.less'

new Vue({
    el: '#hello',
    template: '<hello />',
    components: { Hello }
})