<template>
	<v-app>
		<v-main>
			<v-container fluid class="align-start px-0 d-flex flex-row py-0" style="height: 100%">
				<v-navigation-drawer permanent width="10vw" style="min-width: 10vw;">
					<v-img src="tbo-all.png"></v-img>

					<v-row class="mt-5">
						<v-col v-for="item in items" :key="item.name" cols="12" class="my-10" align="center">
							<v-icon v-if="String($route.path) == item.url" color="primary" large style="cursor: pointer;">
								{{ item.icon }}
							</v-icon>
							<v-icon v-else color="grey" large style="cursor: pointer;" @click="$router.push(item.url)">
								{{ item.icon }}
							</v-icon>

							<h5>{{ item.name }}</h5>
						</v-col>
					</v-row>

					<v-col cols="12" class="my-10" align="center" style="position: absolute; bottom: 0;">
						<v-icon v-if="String($route.path) == '/login'" color="primary" large style="cursor: pointer;">
							far fa-user-circle
						</v-icon>
						<v-icon v-else color="grey" large style="cursor: pointer;" @click="$router.push('/login')">
							far fa-user-circle
						</v-icon>
					</v-col>
				</v-navigation-drawer>

				<div class="mx-5 mt-5">
					<router-view></router-view>
				</div>
			</v-container>

		</v-main>
	</v-app>
</template>

<style>
	main {
		background-color: #02aae5;
		background-image: 
			radial-gradient(at 47% 33%, hsl(211.89, 100%, 50%) 0, transparent 59%), 
			radial-gradient(at 82% 65%, hsl(19.23, 100%, 85%) 0, transparent 55%);
	}

	/* Glassmorphism card effect */
	.glasscard {
		backdrop-filter: blur(16px) saturate(180%)!important;
		-webkit-backdrop-filter: blur(16px) saturate(180%)!important;
		background-color: rgba(255, 255, 255, 0.50)!important;
		border-radius: 12px!important;
		border: 1px solid rgba(209, 213, 219, 0.3)!important;
	}
</style>

<script>
	export default {
		name: 'App',

		data: () => ({
			items: [
				{ name: 'Accueil', icon: 'fa fa-list-alt', url: '/' },
				{ name: 'Favoris', icon: 'far fa-heart', url: '/favorites' },
				{ name: 'Carte', icon: 'far fa-map', url: '/map' },
			],
		}),
	};

</script>
