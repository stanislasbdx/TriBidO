<template>
	<div>
		<Header></Header>
		<v-row justify="center">
			<v-col justify="center"  cols="5">
				<v-card class="glasscard py-5 px-8">
					<v-card-text class="white--text">
						<h1 class="pb-6">Inscription</h1>
						<v-col cols="12" lg="12">
							<h2 class="pb-2">Avatar</h2>

							<v-row class="pb-6">
								<v-col lg="3">
									<v-avatar color="secondary" size="70">IMG</v-avatar>
								</v-col>
								<v-col class="d-flex align-center" cols="12" lg="4">
									<v-btn class="secondary--text">Télécharger</v-btn>
								</v-col>
								<v-col class="d-flex align-center" cols="12" lg="4">
									<v-btn class="grey--text">Supprimer</v-btn>
								</v-col>
							</v-row>
						</v-col>

						<hr>

						<v-row class="pt-5 align-content-center">
							<v-col cols="12" lg="6">
								<v-text-field v-model="Name" label="Pseudo" hint="Visible par les autres membres" persistent-hint clearable placeholder="James"></v-text-field>
							</v-col>
							<v-col cols="12" lg="6">
								<v-text-field v-model="FullName" label="Nom complet" hint="Comment voulez-vous être appelé ?" persistent-hint clearable placeholder="James McDowel"></v-text-field>
							</v-col>
						</v-row>

						<v-row class=" align-content-center">
							<v-col cols="12" lg="6">
								<v-text-field v-model="EmailAdress" label="Adresse mail" hint="Recevoir les notifications et se connecter" persistent-hint clearable></v-text-field>
							</v-col>
							<v-col cols="12" lg="6">
								<v-text-field v-model="PhoneNumber" label="Numéro de téléphone" hint="Pour recevoir les notifications" persistent-hint clearable></v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col>
								<v-text-field v-model="Adress" label="Adresse postale"  persistent-hint clearable></v-text-field>
							</v-col>
						</v-row>
						<v-row class=" pb-10 align-content-center">
							<v-col cols="12" lg="6">
								<v-text-field v-model="DateBirth" label="Date de naissance"  persistent-hint clearable></v-text-field>
							</v-col>
							<v-col cols="12" lg="6">
								<v-text-field v-model="Gender" label="Genre"  persistent-hint clearable></v-text-field>
							</v-col>
						</v-row>
						<hr>
						<v-col class="pa-5 d-flex justify-end">
							<v-btn @click="signup()" color="secondary" large>Envoyer</v-btn>
						</v-col>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</div>


</template>

<script>

import Header from "@/components/graphics/Header";

export default {
name: "Account",
	components: {
		Header
	},

	data() {
		return {
			Name: "",
			FullName: "",
			EmailAdress: "",
			PhoneNumber: "",
			Adress: "",
			DateBirth: "",
			Gender: "",
		}
	},

	created() {

	}
}
</script>
