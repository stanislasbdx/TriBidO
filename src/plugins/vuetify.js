import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import fr from 'vuetify/es5/locale/fr';
import en from 'vuetify/es5/locale/en';

Vue.use(Vuetify);

export default new Vuetify({
	treeShake: true,
	icons: {
		iconfont: 'fa'
	},
	theme: {
		dark: false,
		themes: {
			dark: {
				primary: '#0077FE',
				accent: '#FFCAB1',
				secondary: '#02AAE5',
				success: '#3AF2A2',
				info: '#03DDCB',
				warning: '#FB8C00',
				error: '#FF6C5C'
			},
			light: {
				primary: '#0077FE',
				accent: '#FFCAB1',
				secondary: '#02AAE5',
				success: '#3AF2A2',
				info: '#03DDCB',
				warning: '#FB8C00',
				error: '#FF6C5C'
			}
		}
	},
	lang: {
		locales: {
			fr,
			en
		},
		current: 'fr'
	}
});
