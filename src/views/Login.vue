<template>
	<div>
		<v-col justify="center" align="center" style="background-color: #f3f3f3">
			<h2>Connexion</h2>
			<v-text-field v-model="email" label="Email"> </v-text-field>
			<v-text-field v-model="password" label="Mot de passe">
			</v-text-field>

			<v-btn @click="login()">Connexion</v-btn>
			<p>
				<router-link to="/signup"> Créer un compte </router-link>
			</p>
		</v-col>

		<v-col justify="center" align="center" style="background-color: #f3f3f3">
			<h2>Inscription</h2>
			<v-text-field label="username" type="text" v-model="username"></v-text-field>
			<v-text-field label="Email" type="email" v-model="email"></v-text-field>
			<v-row class="align-content-center py-2">
				<v-col cols="12" lg="6" class="py-0">
					<v-text-field v-model="password" label="Mot de passe">
					</v-text-field>
				</v-col>
				<v-col cols="12" lg="6" class="py-0">
					<v-text-field v-model="password2" label="Confirmation de mot de passe">
					</v-text-field>
				</v-col>
			</v-row>
			<v-container class="py-8">
				<v-btn @click="signup()">Inscription</v-btn>
			</v-container>
			<p>
				<router-link to="/login"> J'ai un compte </router-link>
			</p>
		</v-col>
	</div>
</template>

<style scoped>
	h2 {
		text-align: center;
	}

	.v-btn {
		margin: 25px;
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