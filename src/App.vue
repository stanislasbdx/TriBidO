<template>
	<v-app class="viewport">
		<!-- Sidebar -->
		<div class="sidebar">
			<div class="scrollbar" align="center">
				<v-img src="tbo-all.png" width="10vw"></v-img>

				<v-row class="mt-5">
					<v-col v-for="item in items" :key="item.name" cols="12" class="my-3">
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

				<div class="userIcons">
					<v-col cols="12" class="mt-12 pt-12" v-if="user">
						<v-icon v-if="String($route.path) == '/account'" color="primary" v-bind:large="$vuetify.breakpoint.mdAndUp" style="cursor: pointer;">
							far fa-user-circle
						</v-icon>
						<v-icon v-else color="accent" v-bind:large="$vuetify.breakpoint.mdAndUp" style="cursor: pointer;" @click="$router.push('/account')">
							far fa-user-circle
						</v-icon>

						<v-spacer class="mt-3"></v-spacer>
						<v-tooltip right>
							<template v-slot:activator="{ on, attrs }">
								<v-icon v-bind="attrs" v-on="on" :class="{'accent--text': String($route.path) != '/profile', 'primary--text': String($route.path) == '/profile'}" style="cursor: pointer;" @click="$router.push('/profile')">
									far fa-address-card
								</v-icon>
							</template>
							<span>Accéder au profil</span>
						</v-tooltip>
						<v-spacer class="my-2"></v-spacer>
						<v-tooltip right>
							<template v-slot:activator="{ on, attrs }">
								<v-icon v-bind="attrs" v-on="on" color="accent" style="cursor: pointer;" @click="logout()">
									fa fa-sign-out
								</v-icon>
							</template>
							<span>Se déconnecter</span>
						</v-tooltip>
					</v-col>
					<v-col cols="12" class="mt-12 pt-12" v-else>
						<v-icon v-if="String($route.path) == '/login' || String($route.path) == '/register'" color="primary" v-bind:large="$vuetify.breakpoint.mdAndUp" style="cursor: pointer;">
							fa fa-sign-in
						</v-icon>
						<v-icon v-else color="accent" v-bind:large="$vuetify.breakpoint.mdAndUp" style="cursor: pointer;" @click="$router.push('/login')">
							fa fa-sign-in
						</v-icon>
					</v-col>
				</div>
			</div>
		</div>

		<v-main class="content">
			<transition name="fade" mode="out-in">
				<router-view class="router-view"></router-view>
			</transition>
		</v-main>
	</v-app>
</template>

<style>
	.userIcons {
		position: absolute;
		bottom: 3vh;

		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;
		text-align: center;
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: all .15s ease;
	}

	/* Scrollbar */
	::-webkit-scrollbar {
		width: 5px;
		height: 5px;
		background-color: #F7F7F7;
	}
	::-webkit-scrollbar-track {
		border-radius: 2px;
	}

	::-webkit-scrollbar {
		width: 5px;
		background-color: #F7F7F7;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
		background-color: #BFBFBF;
	}

	.scrollbar {
		height: 100%;
		width: 12.5vw;
		overflow-y: hidden;
		overflow-x: hidden;
	}

	.scrollbar:hover {
		height: 100%;
		width: 12.5vw;
		overflow-y: scroll;
		overflow-x: hidden;
	}

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

	body, main {
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;

		background-color: #02aae5;

		background-image:
			radial-gradient(at 47% 33%, hsl(211.89, 100%, 50%) 0, transparent 59%),
			radial-gradient(at 82% 65%, hsl(19.23, 100%, 85%) 0, transparent 55%);
	}

	/* Glassmorphism card effect */
	.glasscard {
		background: rgba( 255, 255, 255, 0.65 )!important;
		box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )!important;
		backdrop-filter: blur( 4px )!important;
		-webkit-backdrop-filter: blur( 4px )!important;
	}
	.glass {
		background: rgba( 255, 255, 255, 0.10 )!important;
		background-color: rgba( 255, 255, 255, 0.10 )!important;
		backdrop-filter: blur( 4px )!important;
		-webkit-backdrop-filter: blur( 4px )!important;

		color: white!important;
	}

	.v-card {
		border-radius: 10px!important;
	}
</style>

<script>
	export default {
		name: 'App',

		data: () => ({
			items: [
				{ name: 'Accueil', icon: 'fa fa-list-alt', url: '/' },
				{ name: 'Produits', icon: 'fa fa-th', url: '/products' },
				{ name: 'Ajouter une enchère', icon: 'fas fa-plus', url: '/bid/create' }
			],

			user: {}
		}),

		created() {
			this.user = this.$firebase.auth().currentUser;
		},

		methods: {
			async logout() {
				try {
					await this.$firebase.auth().signOut();
					this.$router.push('/login');
				} catch (err) {
					console.log(err);
				}	
			}
		}
	};

</script>
