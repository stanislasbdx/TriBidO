<template>
	<div>
		<Header title="Soumettre une enchère"></Header>

		<v-row justify="center">
			<v-col cols="12" sm="6">
				<v-card>
					<v-card-title>Titre</v-card-title>

					<v-card-text>
						<v-text-field v-model="bid.name" class="mt-0 pt-0"></v-text-field>
					</v-card-text>
				</v-card>
			</v-col>

			<v-col cols="12" sm="3" class="mx-4">
				<v-alert border="top" colored-border type="info" class="glass">
					Ajoutez des détails tels que la marque, la couleur, la taille, les caractéristiques, l'état, etc.
				</v-alert>
			</v-col>
		</v-row>

		<v-row justify="center">
			<v-col cols="12" sm="6">
				<v-card>
					<v-card-title>Détails</v-card-title>

					<v-card-text>
						<h3 class="font-weight-regular">État de votre bien</h3>
						<v-select class="mt-0 pt-0" v-model="bid.condition" :items="['État neuf', 'Très bon état', 'Bon état', 'État satisfaisant']"></v-select>
					</v-card-text>
				</v-card>
			</v-col>

			<v-col cols="12" sm="3" class="mx-4">
				<v-alert border="top" colored-border type="info" class="glass">
					Les acheteurs ont besoin de ces détails pour trouver votre objet.
				</v-alert>
			</v-col>

			<v-col cols="9">
				<v-divider class="my-12" style="border-color: #fff;"></v-divider>
			</v-col>
		</v-row>

		<v-row justify="center">
			<v-col cols="12" sm="6">
				<v-card>
					<v-card-title>Description courte</v-card-title>

					<v-card-text>
						<v-textarea v-model="bid.shortDesc" class="mt-0 pt-0" rows="2"></v-textarea>
					</v-card-text>
				</v-card>
			</v-col>

			<v-col cols="12" sm="3" class="mx-4">
				<v-alert border="top" colored-border type="info" class="glass">
					Utilisez cette description pour accrocher l'acheteur.
				</v-alert>
			</v-col>
		</v-row>
		<v-row justify="center">
			<v-col cols="12" sm="6">
				<v-card>
					<v-card-title>Description longue</v-card-title>

					<v-card-text>
						<v-textarea v-model="bid.longDesc" class=" mt-0 pt-0"></v-textarea>
					</v-card-text>
				</v-card>
			</v-col>

			<v-col cols="12" sm="3" class="mx-4">
				<v-alert border="top" colored-border type="info" class="glass">
					Décrivez les caractéristiques uniques de votre objet, ses défauts et la raison pour laquelle vous le vendez.
				</v-alert>
			</v-col>

			<v-col cols="12" sm="6">
				<v-card>
					<v-card-title>Images</v-card-title>

					<v-card-text>
						<v-row>
							<v-col cols="12" sm="6">
								<v-file-input truncate-length="15" v-model="importIMG.main" @change="uploadMainImage" accept="image/*" class="mt-0 pt-0"></v-file-input>
								<v-img v-if="bid.img.main" :src="bid.img.main" contain></v-img>
							</v-col>
							<v-col cols="12" sm="6">
								<v-file-input truncate-length="15" v-model="importIMG.secondary" @change="uploadSecondaryImage" accept="image/*" class="mt-0 pt-0"></v-file-input>
								<v-img v-if="bid.img.secondary" :src="bid.img.secondary" contain></v-img>
							</v-col>
						</v-row>
					</v-card-text>
				</v-card>
			</v-col>

			<v-col cols="12" sm="3" class="mx-4">
				<v-alert border="top" colored-border type="info" class="glass">
					Vous pouvez ajouter jusqu'à 2 photos pour inspirer confiance aux acheteurs.
				</v-alert>
			</v-col>

			<v-col cols="9">
				<v-divider class="my-12" style="border-color: #fff;"></v-divider>
			</v-col>
		</v-row>

		<v-row justify="center">
			<v-col cols="12" sm="6">
				<v-card>
					<v-card-title>Options de l'enchère</v-card-title>

					<v-card-text>
						<v-row>
							<v-col cols="12">
								<v-text-field class="mt-0 pt-0 col-6 pl-1" v-model="bid.prices.actual" type=" number" suffix="€" prepend-icon="fa fa-euro" label="Prix de départ"></v-text-field>
							</v-col>
							<v-col cols="12">

								<v-row class="px-2">
									<v-col cols="12" sm="6">
										<v-dialog ref="dateDialog" v-model="modals.datePicker" :return-value.sync="date" width="290px">
											<template v-slot:activator="{ on, attrs }">
												<v-text-field v-model="dateFormatted" label="Date de fin de l'enchère" @blur="date = parseDate(dateFormatted)" prepend-icon="far fa-calendar" readonly v-bind="attrs" v-on="on">
												</v-text-field>
											</template>
											<v-date-picker v-model="date" scrollable>
												<v-spacer></v-spacer>
												<v-btn text color="primary" @click="modals.datePicker = false">
													Annuler
												</v-btn>
												<v-btn text color="primary" @click="$refs.dateDialog.save(date)">
													Ok
												</v-btn>
											</v-date-picker>
										</v-dialog>
									</v-col>

									<v-col cols="12" sm="6">
										<v-dialog ref="timeDialog" v-model="modals.timePicker" :return-value.sync="time" width="290px">
											<template v-slot:activator="{ on, attrs }">
												<v-text-field v-model="time" label="Heure de fin de l'enchère" prepend-icon="far fa-clock" readonly v-bind="attrs" v-on="on">
												</v-text-field>
											</template>
											<v-time-picker v-if="modals.timePicker" v-model="time" full-width format="24hr">
												<v-spacer></v-spacer>
												<v-btn text color="primary" @click="modals.timePicker = false">
													Annuler
												</v-btn>
												<v-btn text color="primary" @click="$refs.timeDialog.save(time)">
													Ok
												</v-btn>
											</v-time-picker>
										</v-dialog>
									</v-col>
								</v-row>

							</v-col>
						</v-row>
					</v-card-text>
				</v-card>
			</v-col>

			<v-col cols="12" sm="3" class="mx-4">
				<v-alert border="top" colored-border type="info" class="glass">
					Fixez un prix de départ pour votre enchère et laissez jouer la concurrence.
				</v-alert>
			</v-col>
		</v-row>

		<v-row justify="center" class="pb-12">
			<v-col cols="12" sm="6">
				<v-btn color="primary" block @click="submit()">Envoyer</v-btn>
			</v-col>

			<v-col cols="12" sm="3" class="mx-4"></v-col>
		</v-row>
	</div>
</template>

<style>

</style>

<script>
	import Header from "@/components/graphics/Header";
	import { v4 as uuidv4 } from 'uuid';

	export default {
		name: "Offer",

		components: {
			Header
		},

		data() {
			return {
				user: {},

				importIMG: {},
				imagesLoading: false,

				bid: this.$models.bid,

				modals: {
					datePicker: false,
					timePicker: false
				},
				
				date: '',
				dateFormatted: '',
				time: '23:59'
			}
		},

		watch: {
			date: function() {
				this.dateFormatted = this.formatDate(this.date);
				this.regreshTime();
			},
			time: function() {
				this.regreshTime();
			}
		},

		methods: {
			regreshTime() {
				this.bid.timeOptions.bidStopTime = new Date(`${this.date} ${this.time}`).getTime();
				console.log(new Date(`${this.date} ${this.time}`));
			},

			formatDate (date) {
				if (!date) return null

				const [year, month, day] = date.split('-')
				return `${month}/${day}/${year}`
			},
			parseDate (date) {
				if (!date) return null

				const [month, day, year] = date.split('/')
				return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
			},

			submit() {
				this.bid.timeOptions.bidStartTime = new Date().getTime();
				this.bid.timeOptions.createdAt = new Date().getTime();

				this.$db.ref(`products/`).push({
					...this.bid
				}).then(res => {
					this.$router.push(`${res.getRef().key}`);
				});
			},

			uploadMainImage(e){
				if(!e) return;
				this.uploadImage(e, "main");
			},
			uploadSecondaryImage(e){
				if(!e) return;
				this.uploadImage(e, "secondary");
			},
			uploadImage(file, importType){
				if(!file) return;

				if(!file.type.includes("image")) return this.importIMG[importType] = null;

				var storage = this.$firebase.app().storage("gs://tribido-236f1.appspot.com");

				var uploadTask = storage.ref(`${this.$firebase.auth().currentUser.uid}/bid_src/${uuidv4()}`).put(file);

				uploadTask.on('state_changed', 
					(snapshot) => {
						this.imagesLoading = true;

						var progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

						if(progress > 80) {
							this.imagesLoading = "success";
						}
					},
					(error) => {
						console.log(error);
					},
					() => {
						uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
							console.log(downloadURL)
							this.bid.img[importType] = downloadURL;

							this.imagesLoading = false;
						});
					}
				);
			}
		},

		created() {
			this.$firebase.database().ref('users/' + this.$firebase.auth().currentUser.uid).on('value', (snapshot) => {
				this.user = snapshot.val();
			});
		}
	}

</script>
