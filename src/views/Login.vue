<template>
	<div>
		<v-row>
			<v-col justify="center" align="center" cols="5">
				<v-card class="glasscard py-5">
					<v-card-text class="white--text">
						<h2>Connexion</h2>
						<v-text-field v-model="email" label="Email"> </v-text-field>
						<v-text-field v-model="password" label="Mot de passe">
						</v-text-field>

						<v-btn @click="login()">Connexion</v-btn>
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
export default {
	name: "Login",

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
