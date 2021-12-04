<template>
	<v-app>
		<v-main>
			<v-container fluid class="align-start px-0 d-flex flex-row py-0" style="height: 100%">
				<v-navigation-drawer permanent width="10vw" style="min-width: 10vw;">
					<v-img src="tbo-all.png"></v-img>

					<v-row class="mt-5">
						<v-col v-for="item in items" :key="item.name" cols="12" class="my-10" align="center">
							<template v-if="String($route.path) == item.url">
								<v-icon color="primary" large style="cursor: pointer;">
									{{ item.icon }}
								</v-icon>

								<h5 class="primary--text">{{ item.name }}</h5>
							</template>
							<template v-else>
								<v-icon color="accent" large style="cursor: pointer;" @click="$router.push(item.url)">
									{{ item.icon }}
								</v-icon>

								<h5 class="grey--text">{{ item.name }}</h5>
							</template>
						</v-col>
					</v-row>

					<v-col cols="12" class="mt-12 pt-12" align="center">
						<v-icon v-if="String($route.path) == '/login'" color="primary" large style="cursor: pointer;">
							far fa-user-circle
						</v-icon>
						<v-icon v-else color="accent" large style="cursor: pointer;" @click="$router.push('/login')">
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
		background: rgba( 255, 255, 255, 0.45 )!important;
		box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )!important;
		backdrop-filter: blur( 4px )!important;
		-webkit-backdrop-filter: blur( 4px )!important;
		border-radius: 10px!important;
		border: 1px solid rgba( 255, 255, 255, 0.18 )!important;
	}
</style>

<script>
	export default {
		name: 'App',

		data: () => ({
			items: [
				{ name: 'Accueil', icon: 'fa fa-list-alt', url: '/' },
				{ name: 'Connexion', icon: 'far fa-map', url: '/login' },
				{ name: 'Profil', icon: 'far fa-address-card', url: '/profile' },
				{ name: 'Options', icon: 'fa fa-cog', url: '/options' },
				{ name: 'Produits', icon: 'fa fa-th', url: '/produits' },
				{ name: 'Produit', icon: 'far fa-map', url: '/produit' }
			],
		}),
	};

</script>
