import VueRouter from 'vue-router'

import routes from './routes'

 const router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,
    mode: 'hash'
})

export default router;
