/*
 * @Author: Chengbotao
 * @Date: 2023-05-23 14:07:28
 */
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

// 配置router对象
const router = createRouter({
    // 路由模式
    history: createWebHashHistory(),  //hash模式
    // 动态路由/路由懒加载
    routes: [
        {
            path: "/",
            redirect: "/login"
        },
        {
            path: "/login",
            component: () => import('../views/login.vue')
        },
        {
            path: "/home",
            component: () => import('../views/home.vue')
        }
    ],
})

// 路由导航守卫
// router.beforeEach((to, from, next) => {
//     if (to.path === '/') { return next() }
//     let tokenStr = window.localStorage.getItem('token')
//     if (!tokenStr) return next('/')
//     next()
// });

export default router;