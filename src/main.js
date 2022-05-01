import { createApp } from 'vue';
import { createPinia } from 'pinia';
import persistedstate from 'pinia-persistedstate';
import App from './App.vue';
import router from './router';

createApp(App)
.use(createPinia().use(persistedstate({
    key: 'client'
})))
.use(router)
.mount('#app');
