import Vue from "vue";
import VueRouter from "vue-router";

import dashboard from './components/dashboard.vue';

Vue.use(VueRouter);

const routes = [
    { path: "/cat/:id", component: dashboard, name: 'category'},
    { path: "/", component: dashboard, name: 'dashboard'},
];

const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
});

export default router

