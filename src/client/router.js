import Vue from 'vue/dist/vue.js'
import Router from 'vue-router';
Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/', component: () => import('./components/a.vue'), children: [
                {
                    path: '/aa', component: () => import('./components/aa.vue'), name: 'aa', beforeEnter: () => {
                        // 和全局一样
                    }
                }
            ]
        },
        { path: '/b/:value', component: () => import('./components/b.vue'), name: 'b' },
        { path: '/c', component: () => import('./components/c.vue') },
        { path: '*', redirect: '/' }
    ]
})

router.beforeEach((to, from, next) => {
    console.log(to);
    next();
})

router.afterEach((to, from) => {
    console.log(to);
})

export default router;
