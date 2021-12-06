<template>
	<div>
		<Header></Header>
		<v-row justify="center">
			<v-col justify="center" align="center" cols="5">
				<v-card class="glasscard py-5 rounded-xl">
					<v-card-text class="white--text">
						<v-icon x-large class="py-4" color="white">fas fa-user-circle</v-icon>
						<h2 class="pb-12">Inscription</h2>
						<v-row class="align-content-center py-2">
							<v-col cols="12" lg="12" class="py-0 px-16">
								<v-text-field label="Pseudo" type="text" v-model="username" outlined rounded></v-text-field>
								<v-text-field label="Email" type="email" v-model="email" outlined rounded></v-text-field>
							</v-col>
						</v-row>

						<v-row class="align-content-center py-2">
							<v-col cols="12" lg="12" class="py-0 pt-16 px-16">
								<v-text-field v-model="password2" label="Confirmation de mot de passe" outlined rounded>
								</v-text-field>
								<v-text-field v-model="password" label="Mot de passe" outlined rounded>
								</v-text-field>
							</v-col>
						</v-row>

						<v-btn @click="signup()" class="rounded-xl" color="secondary" x-large>Envoyer</v-btn>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<style scoped>
	h2 {
		text-align: center;
	}
</style>


<script>

import Header from "../components/graphics/Header";

export default {
	name: "Register",

	components: {
		Header
	},

	data() {
		return {
			email: "",
			username: "",

			password: "",
			password2: "",
		};
	},

	methods: {

		verifyPassword: function() {
			if (this.password == this.password2) {
				return true;
			}
			return false;
		},

		signup() {
			if (this.verifyPassword()) {
				this.$firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(credentials => {
					credentials.user.updateProfile({
						displayName: this.username
					});

					this.$db
						.collection("users")
						.doc(credentials.user.uid)
						.set({
							username: this.username,
							email: this.email,
							creationDate: new Date()
						});
				});
			}
		}
	}
};
</script>
