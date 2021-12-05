<template>
	<v-app class="viewport">
		<!-- Sidebar -->
		<div class="sidebar">
			<div class="scrollbar">
				<v-img src="tbo-all.png"></v-img>

				<v-row class="mt-5">
					<v-col v-for="item in items" :key="item.name" cols="12" class="my-3" align="center">
						<template v-if="String($route.path) == item.url">
							<v-icon color="primary" v-bind:large="$vuetify.breakpoint.mdAndUp" style="cursor: pointer;">
								{{ item.icon }}
							</v-icon>

							<h5 class="primary--text">{{ item.name }}</h5>
						</template>
						<template v-else>
							<v-icon color="accent" v-bind:large="$vuetify.breakpoint.mdAndUp" style="cursor: pointer;" @click="$router.push(item.url)">
								{{ item.icon }}
							</v-icon>

							<h5 class="grey--text">{{ item.name }}</h5>
						</template>
					</v-col>
				</v-row>

				<v-col cols="12" class="mt-12 pt-12" align="center">
					<v-icon v-if="String($route.path) == '/login'" color="primary" v-bind:large="$vuetify.breakpoint.mdAndUp" style="cursor: pointer;">
						far fa-user-circle
					</v-icon>
					<v-icon v-else color="accent" large style="cursor: pointer;" @click="$router.push('/login')">
						far fa-user-circle
					</v-icon>
				</v-col>
			</div>
		</div>

		<v-main class="content">
			<router-view class="router-view"></router-view>
		</v-main>
	</v-app>
</template>

<style>
	/* Scrollbar */
	.scrollbar {
		height: 100%;
		width: 12.5vw;
		max-width: 190px;
		overflow-y: hidden;
		overflow-x: hidden;
	}

	.scrollbar:hover {
		height: 100%;
		width: 12.5vw;
		max-width: 190px;
		overflow-y: scroll;
		overflow-x: hidden;
	}
	.scrollbar::-webkit-scrollbar-track {
		border-radius: 2px;
	}

	.scrollbar::-webkit-scrollbar {
		width: 5px;
		background-color: #F7F7F7;
	}

	.scrollbar::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
		background-color: #BFBFBF;
	}
	/** Scrollbar end */


	/* Sidebar */
	.sidebar {
		z-index: 1000;
		
		position: fixed;
		
		left: 12.5vw;

		width: 12.5vw;

		height: 100%;

		margin-left: -12.5vw;

		overflow-y: auto;

		background-color: #fff;

		-webkit-transition: all 0.1s ease;
		-moz-transition: all 0.1s ease;
		-o-transition: all 0.1s ease;
		transition: all 0.1s ease;
	}
	/** Sidebar end */
	
	.viewport {
		padding-left: 12.5vw;
		-webkit-transition: all 0.1s ease;
		-moz-transition: all 0.1s ease;
		-o-transition: all 0.1s ease;
		transition: all 0.1s ease;
	}

	.content {
		width: 100%;
		position: relative;
		height: 100vh;

		padding: 0 20px 0 20px;
		padding-top: 20px;
	}
	.router-view {
		margin-top: 20px;

		padding: 0 20px 0 20px;
	}

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
				{ name: 'Produits', icon: 'fa fa-th', url: '/products' },
				{ name: 'Produit', icon: 'far fa-map', url: '/product' }
			],
		}),
	};

</script>
