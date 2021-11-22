const routes = [
    {
        path: '/',
        component: () => import('../components/Welcome.vue')
    },
    {
        path: '/flow',
        component: () => import('../components/Flows.vue')
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () => import('../components/Error404.vue')
    }
]

export default routes
