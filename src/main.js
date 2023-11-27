import { createApp } from 'vue'
import App from './App.vue'
import tinyMceVueQ from '../lib/main.js'

const app = createApp(App)
app.use(tinyMceVueQ)
app.mount('#app')
