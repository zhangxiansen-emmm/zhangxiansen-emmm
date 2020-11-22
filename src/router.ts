import { createWebHashHistory, createRouter } from 'vue-router'
const history = createWebHashHistory()

import Home from './View/home/index.vue'
// const asyncComponent = (path) => import(path)
import Doc from './View/doc/index.vue'
import Switch from './View/doc/Switch/index.vue'
const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/doc',
    component: Doc,
    children: [
      {
        path: 'switch',
        component: Switch,
      },
    ],
  },
]

export default createRouter({
  history,
  routes,
})
