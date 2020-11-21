const asyncComponent = (path) => import(path)

const routes = [
  {
    path: '/',
    component: asyncComponent('./components/layout/index.vue'),
  },
]

export default routes
