<template>
	<div>
		<Header></Header>
		<v-row justify="center">
			<v-col justify="center" align="center" cols="5">
				<v-card class="glasscard py-5">
					<v-card-text>
						<v-icon x-large class="py-4" color="white">fas fa-user-circle</v-icon>
						<h2 class="white--text">Connexion</h2>
						<v-row class="align-content-center pt-10 px-12">
							<v-col class="px-0" cols="12">
								<v-text-field v-model="email" label="Email" > </v-text-field>
								<v-text-field v-model="password" type="password" label="Mot de passe" ></v-text-field>
							</v-col>

							<v-row>
								<v-col cols="12" lg="6">
									<v-checkbox class="mt-0" v-model="saveme" :label="`Se souvenir de moi`"></v-checkbox>
								</v-col>
								<v-col cols="12" lg="6" align="right" class="mt-1">
									<span style="cursor: pointer; line-height: 20px; letter-spacing: normal; font-size: 16px; font-weight: 400;">
										Mot de passe oublié ?
										<v-icon small class="mb-1">
											fas fa-share-square
										</v-icon>
									</span>
								</v-col>
							</v-row>
						</v-row>
						
						<div>
							<v-btn @click="login()" color="secondary" large>Connexion</v-btn>
							
							<v-spacer class="mt-4"></v-spacer>

							<span style="cursor: pointer; line-height: 20px; letter-spacing: normal; font-size: 16px; font-weight: 400;" @click="$router.push('register')">
								Je n'ai pas de compte
								<v-icon small class="mb-1">
									fas fa-share-square
								</v-icon>
							</span>
						</div>

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
			password: "",

			saveme: false
		};
	},

	methods: {
		async login() {
			try {
				await this.$firebase.auth().signInWithEmailAndPassword(this.email, this.password);

				this.$db.ref(`users/${this.$firebase.auth().currentUser.uid}`).set({
					displayName: this.$firebase.auth().currentUser.displayName,
					email: this.$firebase.auth().currentUser.email,
					phoneNumber: this.$firebase.auth().currentUser.phoneNumber,
					photoURL: this.$firebase.auth().currentUser.photoURL
				});

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
