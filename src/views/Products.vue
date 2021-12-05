<template>
	<div>
		<v-row>
			<v-col cols="12" md="9">
				<v-row>
					<v-col cols="12">
						<v-card class="glasscard" outlined>
							<v-card-text>
								<p>Coucou à tous, y'a 30 produtis</p>
							</v-card-text>
						</v-card>
					</v-col>

					<v-col v-for="index in 12" :key="index">
						<v-card class="glasscard" outlined>
							<v-list-item three-line>
								<v-list-item-content>
									<div class="text-overline mb-4">
										OVERLINE
									</div>
									<v-list-item-title class="text-h5 mb-1">
										Headline 5
									</v-list-item-title>
									<v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
								</v-list-item-content>

								<v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
							</v-list-item>

							<v-card-actions>
								<v-btn outlined rounded text>
									Button
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-col>
				</v-row>
			</v-col>
			<v-col cols="12" md="3" order="first" order-md="last">
				<v-card class="glasscard">
					<v-card-text>
						<h1 class="font-weight-regular">Filtres</h1>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<style>

</style>

<script>
export default {
	name: "Products",
	data() {
		return {
			
		}
	},

	created() {

	}
}
</script>