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
									<v-btn class="secondary--text">Upload</v-btn>
								</v-col>
								<v-col class="d-flex align-center" cols="12" lg="4">
									<v-btn class="grey--text">Remove</v-btn>
								</v-col>
							</v-row>
						</v-col>

						<hr>

						<v-row class="pt-5 align-content-center">
							<v-col cols="12" lg="6">
								<v-text-field v-model="Name" label="Display name" hint="Visible to other members" persistent-hint clearable placeholder="James"></v-text-field>
							</v-col>
							<v-col cols="12" lg="6">
								<v-text-field v-model="FullName" label="Full name" hint="How do you want to be called ?" persistent-hint clearable placeholder="James McDowel"></v-text-field>
							</v-col>
						</v-row>

						<v-row class=" align-content-center">
							<v-col cols="12" lg="6">
								<v-text-field v-model="EmailAdress" label="Email adress" hint="For notification and logging in" persistent-hint clearable></v-text-field>
							</v-col>
							<v-col cols="12" lg="6">
								<v-text-field v-model="PhoneNumber" label="Phone number" hint="For receiving notifications" persistent-hint clearable></v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col>
								<v-text-field v-model="Adress" label="Adress" hint="For receiving notifications" persistent-hint clearable></v-text-field>
							</v-col>
						</v-row>
						<v-row class=" pb-10 align-content-center">
							<v-col cols="12" lg="6">
								<v-text-field v-model="DateBirth" label="Date of birth" hint="For notification and logging in" persistent-hint clearable></v-text-field>
							</v-col>
							<v-col cols="12" lg="6">
								<v-text-field v-model="Gender" label="Gender" hint="For receiving notifications" persistent-hint clearable></v-text-field>
							</v-col>
						</v-row>
						<hr>
						<v-row class=" pt-5 align-content-center">
							<v-col cols="12" lg="6">
								<v-text-field v-model="Username" label="Username" hint="For notification and logging in" persistent-hint clearable></v-text-field>
							</v-col>
							<v-col cols="12" lg="6">
								<v-text-field v-model="Password" label="Password" hint="For receiving notifications" persistent-hint clearable></v-text-field>
							</v-col>
						</v-row>
						<v-col class="pa-5 d-flex justify-end">
							<v-btn @click="signup()" color="secondary" x-large>Envoyer</v-btn>
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

		}
	},

	created() {

	}
}
</script>
