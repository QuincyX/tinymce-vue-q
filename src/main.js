import { createApp } from 'vue'
import App from './App.vue'
import tinyMceVueQ from '../lib/main.js'

const app = createApp(App)
app.use(tinyMceVueQ, { language: 'zh_CN' })
app.mount('#app')
