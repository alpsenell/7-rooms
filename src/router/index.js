import Vue from 'vue';
import Router from 'vue-router';
import RestaurantRouter from '@/router/RestaurantRouter';
import RoomsRouter from '@/router/RoomsRouter';
import HomePage from '@/components/pages/HomePage.vue';

Vue.use(Router);

let routes = [
    ...RestaurantRouter,
    ...RoomsRouter,
    { path: '/', component: HomePage }
]

const router = new Router({
    saveScrollPosition: true,
    mode: 'history',
    routes
});

export default router;
