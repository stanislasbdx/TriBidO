<template>
	<div>
		<Header :title="data.name"></Header>
		<v-row>
			<v-col cols="8">
				<v-card class="glasscard">

					<v-carousel hide-delimiter-background delimiter-icon="fas fa-minus" next-icon="fas fa-caret-right" prev-icon="fas fa-caret-left">
						<v-carousel-item v-for="img in images" :key="img" :src="img">
						</v-carousel-item>
					</v-carousel>

				</v-card>

				<v-card class="glasscard my-3">
					<v-card-text>
						<h3>Description</h3>
						<p>
							{{ data.shortDesc }}
						</p>
						<p>
							{{ data.longDesc }}
						</p>
					</v-card-text>
				</v-card>

			</v-col>
			<v-col cols="4">
				<v-card class="glasscard">
					<v-card-title>
						Informations en direct
					</v-card-title>
					<v-card-text>

						<v-row class="overline" style="font-size: 1.2em!important;">
							<v-col cols="8" class="py-0">
								<span class="caption" style="font-size: 1em!important;">Prix actuel</span>
							</v-col>
							<v-col cols="4" align="right" class="py-0">
								{{ Number(data.prices.actual).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€
							</v-col>

							<v-col cols="8" class="py-0">
								<span class="caption" style="font-size: 1em!important;">Prix de départ</span>
							</v-col>
							<v-col cols="4" align="right" class="py-0">
								{{ Number(data.prices.start).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€
							</v-col>

							<v-col cols="8" class="py-0">
								<span class="caption" style="font-size: 1em!important;">Temps restant</span>
							</v-col>
							<v-col cols="4" align="right" class="py-0">
								{{ $moment().to(data.timeOptions.bidStopTime, true) }}
							</v-col>
						</v-row>

					</v-card-text>

					<v-card-title class="pb-0">
						Dernières offres
					</v-card-title>
					<v-list style="background-color: rgba( 255, 255, 255, 0 )" class="pt-0">
						<v-list-item-group disabled>
							<v-list-item v-for="(item, i) in 5" :key="i">
								<v-list-item-icon>
									<v-icon color="secondary">far fa-money-bill-alt</v-icon>
								</v-list-item-icon>

								<v-list-item-content>
									<v-list-item-title>{{ randomUsers[Math.floor(Math.random() * randomUsers.length)] }}</v-list-item-title>
									<v-list-item-subtitle>{{ Math.round(Number(data.prices.actual) + (Math.random() * 5)).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
						</v-list-item-group>
					</v-list>

					<v-divder></v-divder>

					<v-card-title>
						Vous voulez enchérir ?
					</v-card-title>
					<v-row>
						<v-col cols="12" sm="6">
							<v-text-field :label="`Proposez un prix (> ${data.prices.actual}€)`" :min="Number(data.prices.actual)" suffix="€" type="number" auto-grow rows="1" class="mx-3 py-0"></v-text-field>
						</v-col>
						<v-col cols="12" sm="6" class="pt-1">
							<v-checkbox v-model="anonymCheckbox" label="Je préfère être anonyme" class="ml-4 py-0"></v-checkbox>
						</v-col>

						<v-col cols="12" class="px-12 pt-0">
							<v-btn color="primary" block>
								Passer au paiement
							</v-btn>
						</v-col>
					</v-row>

				</v-card>

				<v-card class="glasscard mt-6">
					<v-card-title>
						Achetez en tout sécurité
					</v-card-title>

					<v-card-text>
						<p>✅ Votre paiement sera conservé jusqu'à ce que le vendeur ait envoyé votre article ou qu'il l'ait préparé pour son retrait sur place. </p>
						<p>✅ Toutes nos ventes sont soumises à un contrôle par notaire.</p>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<style>

</style>

<script>
	import Header from "@/components/graphics/Header";

	export default {
		name: "Product",

		props: {
			id: {
				type: String
			}
		},

		components: {
			Header
		},

		data() {
			return {
				data: this.$models.bid,
				images: [],
				randomUsers: ['Sarahlpb', 'psyroman212', 'stan1712', 'Kikyris', 'Sacrigmatik', 'Pierre D.', 'Over_404', '775pl', 'Bggs', 'indes33', 'Irem', 'Laure', 'Jennie K.'],
				anonymCheckbox: false
			}
		},

		created() {
			this.$db.collection("products").doc(this.id).get().then((res) => {
				this.data = res.data();

				this.images = [this.data.img.main, this.data.img.secondary];
			});
		}
	}

</script>
