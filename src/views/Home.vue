<template>
	<div>
		<Header></Header>

		<h2 class="display-3 white--text">Bonjour {{ user.displayName }},</h2>
		<h1 class="display-5 font-weight-light white--text">Bienvenue sur TriBidO !</h1>

		<v-row>
			<v-col cols="12">
				<h1 class="title white--text">Vos offres suivies</h1>
			</v-col>

			<v-col cols="12" sm="6" md="4" v-for="item in data.slice(0, 1)" :key="item.id">
				<ProductMin :product="item"></ProductMin>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="12">
				<h1 class="title white--text mt-6">Catégories</h1>
			</v-col>

			<v-col cols="6" sm="4" md="3" lg="2" v-for="item in categories" :key="item.id">
				<v-sheet class="categCard" :style="`background-color: ${item.color};`" align="center" justify="center">
				
					<v-col>
						<v-icon :style="`color: ${item.textColor};`">{{ item.icon }}</v-icon>
					</v-col>
					
					<v-col class="white--text pt-0">{{ item.label }}</v-col>

				</v-sheet>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="12">
				<h1 class="title white--text mt-6">Enchères en cours</h1>
			</v-col>

			<v-col cols="12" sm="4" md="3" v-for="item in data" :key="item.id">
				<Product :product="item" :maxBids="2"></Product>
			</v-col>
		</v-row>
	</div>
</template>

<style scoped>
	.categCard {
		border-radius: 10px;
		cursor: pointer;
	}

</style>

<script>
	import Header from "../components/graphics/Header";
	import ProductMin from "@/components/ProductMin";
	import Product from "@/components/Product";

	export default {
		components: {
			Header,
			ProductMin,
			Product
		},

		data() {
			return {
				user: {},

				data: [],

				categories: [
					{
						label: 'Classiques',
						icon: 'fas fa-ghost',
						color: '#55efc4',
						textColor: '#00b894'
					},
					{
						label: 'Jeux de table',
						icon: 'fas fa-chess-king',
						color: '#81ecec',
						textColor: '#00cec9'
					},
					{
						label: 'Plein air',
						icon: 'fas fa-table-tennis',
						color: '#48dbfb',
						textColor: '#0abde3'
					},
					{
						label: 'Jeux vidéos',
						icon: 'fas fa-gamepad',
						color: '#00d2d3',
						textColor: '#01a3a4'
					},
					{
						label: 'Jeux de rôles',
						icon: 'fas fa-dungeon',
						color: '#fab1a0',
						textColor: '#e17055'
					},
					{
						label: 'Enchères flash',
						icon: 'fas fa-shipping-fast',
						color: '#ff7675',
						textColor: '#d63031'
					}
				],
			}
		},

		created() {
			this.$firebase.database().ref('users/' + this.$firebase.auth().currentUser.uid).on('value', (snapshot) => {
				this.user = snapshot.val();
			});

			this.data = [];
			this.$firebase.database().ref(`products/`).on("child_added", snap => {
				this.data.push({
					...this.$models.bid,
					...snap.val(),
					id: snap.getRef().key
				});
			});
		}
	}

</script>
