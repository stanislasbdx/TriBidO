import Vue from "vue";
import VueRouter from "vue-router";

import * as firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import('@/views/Home.vue')
	},
	{
		path: "/login",
		name: "Login",
		component: () => import('@/views/Login.vue')
	},
	{
		path: "/register",
		name: "Register",
		component: () => import('@/views/Register.vue')
	},
	{
		path: "/products",
		name: "Products",
		component: () => import('@/views/Products.vue')
	},
	{
		path: "/bid/:id",
		name: "Product",
		component: () => import('@/views/Product.vue'),
		props: true
	},
	{
		path: "/profile",
		name: "Profile",
		component: () => import('@/views/Profile.vue')
	},
	{
		path: "/account",
		name: "Account",
		component: () => import('@/views/Account.vue')
	},
	{
		path: "/bid/create",
		name: "CreateBid",
		component: () => import('@/views/CreateBid.vue')
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	const isAuthenticated = firebase.auth().currentUser;

	if (to.meta.requiresAuth && !isAuthenticated) {
		next("/login");
	} else {
		next();
	}
});

export default router;
