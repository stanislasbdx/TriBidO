import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import('@/views/Home.vue')
	},
	{
		path: "/favorites",
		name: "Favorites",
		component: () => import('@/views/Home.vue'),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: "/map",
		name: "Map",
		component: () => import('@/views/Home.vue'),
		meta: {
			requiresAuth: true
		}
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	next();
});

export default router;
