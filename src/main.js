import { createApp } from 'vue'
import daisyui from 'daisyui';

import App from './App.vue'
import router from './router'
import store from './store'

import './index.css'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(daisyui)

app.mount('#app')
