import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import initRouter from './router'

import App from './App.vue'
const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

const router = initRouter()
app.use(router)

app.mount('#app')
