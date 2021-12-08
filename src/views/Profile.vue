<template>
	<div>
		<Header></Header>
		<v-row justify="center">
			<v-col cols="7">
				<v-card class="glasscard py-5 px-6">
					<v-card-text class="white--text">
						<v-row>
							<v-col cols="12" md="auto" align="center">
								<v-avatar>
									<img
										contain
										src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Kurt&hairColor=Platinum&facialHairType=BeardLight&facialHairColor=Auburn&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=AngryNatural&mouthType=Sad&skinColor=Pale"
									/>
								</v-avatar>
							</v-col>
							<v-col cols="12" md="8">
								<v-col>

									<h3 class="display-2 font-weight-light" v-text="user.displayName"></h3>
									<h3 class="font-weight-light" v-text="user.email"></h3>

								</v-col>
							</v-col>
							<v-col cols="auto" md="1" class="d-flex align-center justify-end">
								<v-btn @click="$router.push('/account')" color="secondary" x-medium>Modifier</v-btn>
							</v-col>

						</v-row>

					</v-card-text>
				</v-card>
			</v-col>
		</v-row>

		<v-row justify="center">
			<v-col cols="12">
				<v-card class="glasscard mb-3">
					<v-col>
						<h2 align="center" class="white--text d-flex align-start justify-center">Enchères de {{ user.displayName }}</h2>
					</v-col>
				</v-card>

				<v-row>

					<template v-if="products.length > 0">
						<v-col cols="12" sm="6" md="4" xl="3" v-for="item in products" :key="item.id">
							<Products :product="item" :lastBids="2"></Products>
						</v-col>
					</template>
					<template v-else>
						<v-col cols="12" align="center">
							<p class="white--text">Cet utilisateur n'a pas créé d'enchère.</p>
						</v-col>
					</template>
					
				</v-row>
			</v-col>
		</v-row>
	</div>
</template>

<script>
	import Header from "@/components/graphics/Header";
	import Products from "@/components/Product";

	export default {
		name: "Profile",

		components: {
			Header,
			Products
		},

		data() {
			return {
				user: {},

				products: []
			}
		},

		created() {
			this.$firebase.database().ref('users/' + this.$firebase.auth().currentUser.uid).on('value', (snapshot) => {
				this.user = snapshot.val();
			});

			this.products = [];
			this.$firebase.database().ref(`products/`).on("child_added", snap => {
				if(snap.val().creator == this.$firebase.auth().currentUser.uid) this.products.push({
					...this.$models.bid,
					...snap.val(),
					id: snap.getRef().key
				});
			});
		}
	}

</script>

<style scoped>

</style>
