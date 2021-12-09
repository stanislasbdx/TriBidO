<template>
	<div>
		<Header title="Enchères en cours"></Header>

		<v-row>
			<v-col cols="12">
				<v-row>
					<v-col v-for="item in data" :key="item.id" cols="12" sm="6" md="4" xl="3">
						<Product :product="item"></Product>
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
	</div>
</template>

<style>

</style>

<script>
import Header from "@/components/graphics/Header";
import Product from "@/components/Product";

export default {
	name: "Products",

	components: {
		Header,
		Product
	},

	data() {
		return {
			placeBid: false,
			price: 500,

			activeBid: this.$models.bid,

			data: []
		}
	},

	created() {
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