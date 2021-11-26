<template>
	<v-app>
		<v-main>
			<v-navigation-drawer permanent width="200px" overlay-color="primary">
				<v-img src="tbo-all.png"></v-img>

				<v-row class="mt-5">
					<v-col v-for="item in items" :key="item.name" cols="12" offset="4" class="my-10">
						<v-icon v-if="String($route.path) == item.url" color="primary" large style="cursor: pointer;">
							{{ item.icon }}
						</v-icon>
						<v-icon v-else color="grey" large style="cursor: pointer;" @click="$router.push(item.url)">
							{{ item.icon }}
						</v-icon>

						<h5>{{ item.name }}</h5>
					</v-col>
				</v-row>
			</v-navigation-drawer>

			<HelloWorld />
		</v-main>
	</v-app>
</template>

<script>
	import HelloWorld from './components/HelloWorld';

	export default {
		name: 'App',

		components: {
			HelloWorld,
		},

		data: () => ({
			items: [
				{ name: 'Accueil', icon: 'fa fa-list-alt', url: '/' },
				{ name: 'Favoris', icon: 'far fa-heart', url: '/favorites' },
				{ name: 'Carte', icon: 'far fa-map', url: '/map' },
			],
		}),
	};

</script>
