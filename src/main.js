import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App).use(VueAnalytics,{
    id: 'UA-12345678-1',
    router
}).mount('#app')
