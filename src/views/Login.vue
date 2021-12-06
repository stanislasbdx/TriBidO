<template>
	<div>
		<Header></Header>
		<v-row justify="center">
			<v-col justify="center" align="center" cols="5">
				<v-card class="glasscard py-5">
					<v-card-text class="white--text">
						<v-icon x-large class="py-4" color="white">fas fa-user-circle</v-icon>
						<h2>Connexion</h2>
						<v-row class="align-content-center pt-10">
							<v-col class="py-0 px-16">
								<v-text-field v-model="email" label="Email" > </v-text-field>
								<v-text-field v-model="password" label="Mot de passe" ></v-text-field>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12" lg="6" class="d-flex align-center justify-center py-0">
								<v-checkbox v-model="checkbox" :label="`Se souvenir de moi`"></v-checkbox>
							</v-col>
							<v-col cols="12" lg="6" class="d-flex align-center justify-center py-0">
								<a href="#">Mot de passe oublié ?</a>
							</v-col>
						</v-row>
						<v-col>
							<v-btn @click="login()" color="secondary" x-large>Connexion</v-btn>
						</v-col>

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
	name: "Login",

	components: {
		Header,
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
		async login() {
			try {
				await this.$firebase.auth().signInWithEmailAndPassword(this.email, this.password);

				this.$router.replace({
					path: "/"
				});
			} catch (error) {
				console.log(error);
			}
		},

	}
};
</script>
