import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Layout from './components/layout/index.vue'
import routes from './router'
const history = createWebHashHistory()
const router = createRouter({
  history,
  routes,
})

const app = createApp(App)
app.use(router)

app.mount('#app')
