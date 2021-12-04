import Vue from 'vue';
import App from './App.vue';

import router from "./router";

import vuetify from './plugins/vuetify';

// IMPORT FIREBASE
import firebase from "firebase/app";
import db from "@/components/firebaseInit";
import "firebase/auth";

Vue.prototype.$db = db;
Vue.prototype.$firebase = firebase;

Vue.config.productionTip = false;

// IMPORT VARIABLES GLOBALES
import { appConfig } from "@/components/toLoad/appConfig";

import { functions } from "@/components/toLoad/functions";
import { fieldsRules } from "@/components/toLoad/fieldsRules";

Vue.prototype.$appConfig = appConfig;

Vue.prototype.$functions = functions;
Vue.prototype.$fieldsRules = fieldsRules;

firebase.auth().onAuthStateChanged(() => {
	new Vue({
		vuetify,
		router,
		render: h => h(App)
	}).$mount("#app");
});