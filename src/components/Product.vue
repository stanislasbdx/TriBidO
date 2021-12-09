<template>
	<div>
		<v-card class="mx-auto glasscard white--text">
			<v-img v-if="product.img.main" height="20vh" :src="product.img.main"></v-img>

			<v-card-title class="pb-0">{{ product.name }}</v-card-title>

			<v-card-text>
				<div class="text-subtitle-1 primary--text">
					{{ product.prices.actual.toLocaleString(undefined, {minimumFractionDigits: 2}) }}€
					• {{ Math.round(Math.random() * 10) }} enchères
					• Il reste {{ $moment().to(product.timeOptions.bidStopTime, true) }}
				</div>
				<div class="primary--text">
					Fin de l'enchère le {{ $moment(product.timeOptions.bidStopTime).format("DD/MM/yyyy à HH:mm") }}.
				</div>

				<v-divider style="background-color: white;" class="my-4"></v-divider>

				<div>{{ product.shortDesc }}</div>
			</v-card-text>

			<v-divider class="mx-4" style="background-color: white;"></v-divider>

			<v-card-title>Dernières offres</v-card-title>

			<v-card-text>
				<v-row>
					<v-col v-for="index in maxBids" :key="index" class="pb-1 pt-0">
						<v-chip class="glass black--text">
							{{ randomUsers[Math.floor(Math.random() * randomUsers.length)] }} {{ Math.round(product.prices.actual * (Math.random() * 5)).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€
						</v-chip>
					</v-col>
				</v-row>
			</v-card-text>

			<v-card-actions>
				<v-row>
					<v-col cols="12" sm="5" align="center">
						<v-row>
							<v-col cols="6">
								<v-btn text block @click="$router.push('bid/' + product.id)" color="primary">
									Voir
								</v-btn>
							</v-col>
							<v-col cols="6">
								<v-btn text block @click="placeBid = !placeBid" color="secondary">
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

		<v-bottom-sheet v-model="placeBid">
			<v-sheet class="glasscard pa-5" style="padding-left: 15.5vw!important;">
				<v-row>
					<v-col cols="12" md="4">
						<v-card class="mx-auto">
							<v-img class="white--text align-end" height="200px" :src="product.img.main" style="background-color: black;">
								<v-card-title class="pb-0" v-bind:class="{'black--text': !product.img.main}">{{ product.name }}</v-card-title>

								<v-card-text align="left" v-bind:class="{'black--text': !product.img.main}">
									<div class="text-subtitle-1 overline">
										<span class="caption">Prix actuel</span> {{ Number(product.prices.actual).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€ • <span class="caption">Prix de départ</span> {{ Number(product.prices.start).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€
									</div>

									<div>{{ product.shortDesc }}</div>
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
								<v-btn class="ma-3 mt-0" color="secondary" v-for="index in 5" :key="index">{{ Math.round(product.prices.actual + index * 10).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€ (+{{index}}0€)</v-btn>
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

<script>
export default {
	name: "Product_Component",
	props: {
		product: {
			type: Object
		},
		maxBids: {
			type: Number,
			default: 5
		}
	},
	data() {
		return {
			placeBid: false,

			randomUsers: ['Sarahlpb', 'psyroman212', 'stan1712', 'Kikyris', 'Sacrigmatik', 'Pierre D.', 'Over_404', '775pl', 'Bggs', 'indes33']
		}
	}
}
</script>