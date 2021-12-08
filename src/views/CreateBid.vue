<template>
	<div>
		<Header></Header>
		<v-row justify="center">
			<v-col justify="center" align="center" cols="5">
				<v-card class="glasscard py-50">
					<v-card-title class="white--text">
						<h2>Soumettre une enchère</h2>
					</v-card-title>
					
					<v-col cols="7">
						<v-text-field label="Titre" type="text" v-model="Titre"></v-text-field>
						<v-text-field label="description" type="text" v-model="Description"></v-text-field>
						<v-text-field type="image" v-model="photo"></v-text-field>
					</v-col>


					<v-btn text block @click="activeBid = item, placeBid = !placeBid" color="secondary">
						Soumettre
					</v-btn>
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
		name: "Offer",

		components: {
			Header
		},

		data() {
			return {

			}
		},

		created() {

		}
	}

</script>
