<template>
	<div>
		<Header></Header>
		<v-row justify="center">
			<v-col cols="7">
				<v-card class="glasscard py-5 px-6">
					<v-card-text class="white--text">
						<v-row>
							<v-col lg="2">
								<v-avatar color="secondary" size="80">IMG</v-avatar>
							</v-col>
							<v-col lg="6" class="d-flex align-center">
								<v-col>

									<h3 v-text="email"></h3>
									<h3 v-text="username"></h3>

								</v-col>
							</v-col>
							<v-col lg="0" class="d-flex align-center justify-end ">
								<v-btn @click="signup()" color="secondary" x-medium>Modifier</v-btn>
							</v-col>

						</v-row>

					</v-card-text>
				</v-card>
			</v-col>
		</v-row>

		<v-row justify="center">
			<v-col cols="12">
				<v-card class="glasscard pb-10 px-8">
					<v-col>
						<h2 align="center" class="white--text d-flex align-start justify-center">Mes Enchères</h2>
					</v-col>

					<v-row>
						<v-col lg="3">
							<v-card class="mx-auto glasscard">
								<v-img height="20vh" src="http://s1.picswalls.com/wallpapers/2014/07/25/basketball-desktop-wallpaper_041014235_92.jpg"></v-img>

								<v-card-title class="pb-0">Ballon de basket</v-card-title>

								<v-card-text>
									<div class="text-subtitle-1">
										{{ Math.round(Math.random() * 500).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€ • 32 enchères
									</div>

									<div>C'est un super ballon de basket basique, mais il est super !</div>
								</v-card-text>

								<v-divider class="mx-4"></v-divider>

								<v-card-title>Dernières offres</v-card-title>

								<v-card-text>
									<v-row>
										<v-col v-for="index in 2" :key="index" class="pb-1 pt-0">
											<v-chip class="glass">
												Sarahlpb {{ Math.round(Math.random() * 500).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€
											</v-chip>
										</v-col>
									</v-row>
								</v-card-text>
							</v-card>
						</v-col>
						<v-col lg="3">

							<v-card class="mx-auto glasscard">
								<v-img height="20vh" src="http://s1.picswalls.com/wallpapers/2014/07/25/basketball-desktop-wallpaper_041014235_92.jpg"></v-img>

								<v-card-title class="pb-0">Ballon de basket</v-card-title>

								<v-card-text>
									<div class="text-subtitle-1">
										{{ Math.round(Math.random() * 500).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€ • 32 enchères
									</div>

									<div>C'est un super ballon de basket basique, mais il est super !</div>
								</v-card-text>

								<v-divider class="mx-4"></v-divider>

								<v-card-title>Dernières offres</v-card-title>

								<v-card-text>
									<v-row>
										<v-col v-for="index in 2" :key="index" class="pb-1 pt-0">
											<v-chip class="glass">
												Sarahlpb {{ Math.round(Math.random() * 500).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€
											</v-chip>
										</v-col>
									</v-row>
								</v-card-text>
							</v-card>

						</v-col>
						<v-col lg="3">

							<v-card class="mx-auto glasscard">
								<v-img height="20vh" src="http://s1.picswalls.com/wallpapers/2014/07/25/basketball-desktop-wallpaper_041014235_92.jpg"></v-img>

								<v-card-title class="pb-0">Ballon de basket</v-card-title>

								<v-card-text>
									<div class="text-subtitle-1">
										{{ Math.round(Math.random() * 500).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€ • 32 enchères
									</div>

									<div>C'est un super ballon de basket basique, mais il est super !</div>
								</v-card-text>

								<v-divider class="mx-4"></v-divider>

								<v-card-title>Dernières offres</v-card-title>

								<v-card-text>
									<v-row>
										<v-col v-for="index in 2" :key="index" class="pb-1 pt-0">
											<v-chip class="glass">
												Sarahlpb {{ Math.round(Math.random() * 500).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€
											</v-chip>
										</v-col>
									</v-row>
								</v-card-text>
							</v-card>

						</v-col>
						<v-col lg="3">

							<v-card class="mx-auto glasscard">
								<v-img height="20vh" src="http://s1.picswalls.com/wallpapers/2014/07/25/basketball-desktop-wallpaper_041014235_92.jpg"></v-img>

								<v-card-title class="pb-0">Ballon de basket</v-card-title>

								<v-card-text>
									<div class="text-subtitle-1">
										{{ Math.round(Math.random() * 500).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€ • 32 enchères
									</div>

									<div>C'est un super ballon de basket basique, mais il est super !</div>
								</v-card-text>

								<v-divider class="mx-4"></v-divider>

								<v-card-title>Dernières offres</v-card-title>

								<v-card-text>
									<v-row>
										<v-col v-for="index in 2" :key="index" class="pb-1 pt-0">
											<v-chip class="glass">
												Sarahlpb {{ Math.round(Math.random() * 500).toLocaleString(undefined, {minimumFractionDigits: 2}) }}€
											</v-chip>
										</v-col>
									</v-row>
								</v-card-text>
							</v-card>
							
						</v-col>
					</v-row>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
	import Header from "@/components/graphics/Header";
	export default {
		name: "Profile",

		components: {
			Header
		},

		data() {
			return {
				email: 'Dididier',
				username: 'dididier.gus212@gmail.com'
			}
		},

		created() {

		}
	}

</script>

<style scoped>

</style>
