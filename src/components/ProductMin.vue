<template>
	<div>
		<v-sheet class="mx-auto glasscard smolcard">
			<v-img v-if="product.img.main" class="white--text" height="15vh" :src="product.img.main">

				<v-card-title class="pb-0 pt-2"><span class="d-inline-block text-truncate" style="max-width: 95%">{{ product.name }}</span></v-card-title>

				<v-card-text>
					<div class="text-subtitle-1">
						{{ product.prices.actual.toLocaleString(undefined, {minimumFractionDigits: 2}) }}€
						• {{ Math.round(Math.random() * 10) }} enchères
						• Il reste {{ $moment().to(product.timeOptions.bidStopTime, true) }}
					</div>

					<div>{{ product.shortDesc }}</div>
				</v-card-text>

			</v-img>

			<v-row style="padding-top: 4px;">
				<v-col cols="12" sm="auto" align="center" class="pb-2">
					<v-row>
						<v-col cols="6" sm="auto" class="pb-2">
							<v-btn text block @click="$router.push('bid/' + product.id)" color="primary" small>
								Voir
							</v-btn>
						</v-col>
						<v-col cols="6" sm="auto" class="pb-2">
							<v-btn text block @click="placeBid = !placeBid" color="secondary" small>
								Enchérir
							</v-btn>
						</v-col>
					</v-row>
				</v-col>

				<v-spacer></v-spacer>

				<v-col cols="12" sm="auto" align="center" class="pb-2 pr-sm-5">
					<v-row>
						<v-col cols="6" sm="auto" class="pb-2">
							<v-tooltip bottom color="glass">
								<template v-slot:activator="{ on, attrs }">
									<v-btn text icon color="accent" v-bind="attrs" v-on="on" small>
										<v-icon small>far fa-bell</v-icon>
									</v-btn>
								</template>
								<span>Créer un suivi</span>
							</v-tooltip>
						</v-col>
						<v-col cols="6" sm="auto" class="pb-2">
							<v-tooltip bottom color="glass">
								<template v-slot:activator="{ on, attrs }">
									<v-btn text icon color="pink" v-bind="attrs" v-on="on" small>
										<v-icon small>far fa-heart</v-icon>
									</v-btn>
								</template>
								<span>Ajouter aux favoris</span>
							</v-tooltip>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-sheet>
		
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

<style scoped>
	.smolcard {
		border-radius: 10px;
	}

	.v-image {
		border-radius: 10px 10px 0 0;
		background-color: black;
	}
</style>

<script>
export default {
	name: "ProductMin_Component",
	props: {
		product: {
			type: Object
		}
	},
	data() {
		return {
			placeBid: false
		}
	}
}
</script>