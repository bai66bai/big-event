import './assets/main.scss'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import 'element-plus/dist/index.css'
import router from './router'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
const app = createApp(App);
const pinia = createPinia();
const persist = createPersistedState()
pinia.use(persist)
app.use(pinia)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
