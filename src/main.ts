import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import apiService from './apiService';

const app= createApp(App);
app.use(router);
app.use(apiService);
app.mount('#app');
