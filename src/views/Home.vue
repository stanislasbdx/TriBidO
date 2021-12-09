<template>
	<div>
		<Header></Header>
		<v-row>
			<v-col lg="12" cols="12">
				<v-card class="glass">
					<v-row class="align-content-center py-2">
						<v-col cols="12" lg="12" class="px-7 d-flex justify-end align-start">
							<h1>TriBid0</h1>
						</v-col>
						<v-col>
							<v-row>
								<v-col cols="3"></v-col>
								<v-col cols="6" class="px-16 d-flex align-center justify-center">
									<v-text-field label="Que recherchez vous ?" type="text"></v-text-field>
								</v-col>
								<v-col cols="3"></v-col>
							</v-row>
						</v-col>
						<v-col cols="12" lg="12" class="px-7 d-flex justify-start align-end">
							<h2>Bonjour, <br>
								bienvenue</h2>
						</v-col>
					</v-row>
				</v-card>
					<v-col cols="12" lg="12" class="px-7 d-flex justify-start align-end">
						<h2>catégorie</h2>
					</v-col>
			</v-col>
				<v-row justify="space-around">
					
						<v-avatar color="indigo">
							<v-icon dark>
								mdi-account-circle
							</v-icon>
						</v-avatar>

						<v-avatar color="green">
							<v-icon dark>
								mdi-account-circle
							</v-icon>
						</v-avatar>

						<v-avatar color="pink">
							<v-icon dark>
								mdi-account-circle
							</v-icon>
						</v-avatar>

						<v-avatar color="purple">
							<v-icon dark>
								mdi-account-circle
							</v-icon>
						</v-avatar>

						<v-avatar color="yellow">
							<v-icon dark>
								mdi-account-circle
							</v-icon>
						</v-avatar>

						<v-avatar color="brown">
							<v-icon dark>
								mdi-account-circle
							</v-icon>
						</v-avatar>

						<v-avatar color="orange">
							<v-icon dark>
								mdi-account-circle
							</v-icon>
						</v-avatar>

						<v-avatar color="red">
							<span class="white--text text-h5">CJ</span>
						</v-avatar>
					
			</v-row>
			<v-col lg="12" cols="12" class="py-8">
				<v-col>
					<v-row>
						<v-col cols="12" lg="12" class="px-6">
							<h3 color="secondary">Vos offres suivis :</h3>
						</v-col>
						<v-col v-for="index in 6" :key="index">
							<v-card class="mx-auto glasscard" max-width="210" outlined>
								
								<v-list-item three-line>
									<v-list-item-content>
										<div class="text-overline mb-4">
											OVERLINE
										</div>
										<v-list-item-title class="text-h6 mb-1">
											Headline 6
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
			</v-col>
			<v-col cols="12" lg="12" class="px-6">
				<h3>Offres du moment :</h3>
			</v-col>
			<v-col v-for="index in 30" :key="index" >
				<v-card class="mx-auto glasscard" max-width="344" outlined>
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
	</div>
</template>

<script>

import Header from "../components/graphics/Header";

export default {
	components: {
		Header,
	}
}
</script>

<style>

</style>
