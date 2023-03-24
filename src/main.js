import Vue, { createApp } from '@vue/compat';

import BootstrapVue from 'bootstrap-vue';
import App from './App.vue'
import router from './router'
import './assets/main.css'

Vue.use(BootstrapVue);
const app = createApp(App)

app.use(router)

app.mount('#app')


