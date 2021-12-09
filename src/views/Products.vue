<template>
	<div>
		<Header title="Enchères en cours"></Header>

		<v-row>
			<v-col cols="12">
				<v-row>
					<v-col v-for="item in data" :key="item.id" cols="12" sm="6" md="4" xl="3">
						<v-card class="mx-auto glasscard white--text">
							<v-img v-if="item.img.main" height="20vh" :src="item.img.main"></v-img>

							<v-card-title class="pb-0">{{ item.name }}</v-card-title>

							<v-card-text>
								<div class="text-subtitle-1 primary--text">
									{{ item.prices.actual.toLocaleString(undefined, {minimumFractionDigits: 2}) }}€ • {{ Math.round(Math.random() * 10) }} enchères
								</div>
								<div class="primary--text">
									Fin de l'enchère le {{ $moment(item.timeOptions.bidStopTime).format("DD/MM/yyyy à HH:mm") }}.
								</div>

								<v-divider style="background-color: white;" class="my-4"></v-divider>

								<div>{{ item.shortDesc }}</div>
							</v-card-text>

							<v-divider class="mx-4" style="background-color: white;"></v-divider>

							<v-card-title>Dernières offres</v-card-title>

							<v-card-text>
								<v-row>
									<v-col v-for="index in Math.round(Math.random() * 10)" :key="index" class="pb-1 pt-0">
										<v-chip class="glass black--text">
											{{ randomUsers[Math.floor(Math.random() * randomUsers.length)] }} {{ Math.round(item.prices.actual * (Math.random() * 5)).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€
										</v-chip>
									</v-col>
								</v-row>
							</v-card-text>

							<v-card-actions>
								<v-row>
									<v-col cols="12" sm="5" align="center">
										<v-row>
											<v-col cols="6">
												<v-btn text block @click="$router.push('bid/' + item.id)" color="primary">
													Voir
												</v-btn>
											</v-col>
											<v-col cols="6">
												<v-btn text block @click="activeBid = item, placeBid = !placeBid" color="secondary">
													Enchérir
												</v-btn>
											</v-col>
										</v-row>
									</v-col>

									<v-spacer></v-spacer>

									<v-col cols="12" sm="4" align="center" class="mr-3">
										<v-row>
											<v-col cols="6">
												<v-tooltip bottom color="glass">
													<template v-slot:activator="{ on, attrs }">
														<v-btn text icon color="accent" v-bind="attrs" v-on="on">
															<v-icon small>far fa-bell</v-icon>
														</v-btn>
													</template>
													<span>Créer un suivi</span>
												</v-tooltip>
											</v-col>
											<v-col cols="6">
												<v-tooltip bottom color="glass">
													<template v-slot:activator="{ on, attrs }">
														<v-btn text icon color="pink" v-bind="attrs" v-on="on">
															<v-icon small>far fa-heart</v-icon>
														</v-btn>
													</template>
													<span>Ajouter aux favoris</span>
												</v-tooltip>
											</v-col>
										</v-row>
									</v-col>									
								</v-row>
							</v-card-actions>
						</v-card>
					</v-col>
				</v-row>
			</v-col>
			<!--<v-col cols="12" md="3" order="first" order-md="last">
				<v-row>
					<v-col cols="12">
						<v-card>
							<v-card-text>
								<h1 class="font-weight-regular black--text">Filtres</h1>
							</v-card-text>
						</v-card>
					</v-col>

					<v-col cols="12">
						<v-card class="glasscard">
							<v-card-text>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-col>-->
		</v-row>

		<v-bottom-sheet v-model="placeBid">
			<v-sheet class="glasscard pa-5" style="padding-left: 15.5vw!important;">
				<v-row>
					<v-col cols="12" md="4">
						<v-card class="mx-auto">
							<v-img class="white--text align-end" height="200px" :src="activeBid.img.main" style="background-color: black;">
								<v-card-title class="pb-0" v-bind:class="{'black--text': !activeBid.img.main}">{{ activeBid.name }}</v-card-title>

								<v-card-text align="left" v-bind:class="{'black--text': !activeBid.img.main}">
									<div class="text-subtitle-1">
										{{ activeBid.prices.actual.toLocaleString(undefined, {minimumFractionDigits: 2}) }}€ • {{ Math.round(activeBid.prices.actual * 10) }} enchères
									</div>

									<div>C'est un super ballon de basket basique, mais il est super !</div>
								</v-card-text>
							</v-img>
						</v-card>
					</v-col>

					<v-divider vertical class="my-4" v-if="$vuetify.breakpoint.mdAndUp"></v-divider>

					<v-col cols="12" md="8">
						<template>
							<h2>Poser une enchère</h2>
							<p>Souhaitez vous poser une enchère sur ce produit ?</p>

							<v-row class="col-12 pb-3">
								<v-btn class="ma-3 mt-0" color="secondary" v-for="index in 5" :key="index">{{ Math.round(activeBid.prices.actual + index * 10).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€ (+{{index}}0€)</v-btn>
							</v-row>

							<span class="font-italic">Cliquer sur le bouton vous enverra sur la page de paiement.</span>
						</template>

						<v-row style="position: absolute; bottom: 20px; right: 20px;">
							<v-btn class="mt-6" text color="red" @click="placeBid = !placeBid">
								Annuler
							</v-btn>
						</v-row>
					</v-col>
				</v-row>
			</v-sheet>
		</v-bottom-sheet>
	</div>
</template>

<style>

</style>

<script>
import Header from "@/components/graphics/Header";

export default {
	name: "Products",

	components: {
		Header
	},

	data() {
		return {
			placeBid: false,
			price: 500,

			activeBid: this.$models.bid,

			data: [],

			randomUsers: ['Sarahlpb', 'psyroman212', 'stan1712', 'Kikyris', 'Sacrigmatik', 'Pierre D.', 'Over_404', '775pl', 'Bggs', 'indes33']
		}
	},

	created() {
		var documentRef = this.$firebase.database().ref(`products/`);

		documentRef.on("child_added", snap => {
			this.data.push({
				...this.$models.bid,
				...snap.val(),
				id: snap.getRef().key
			});
		});

		console.log(this.data)
	}
}
</script>