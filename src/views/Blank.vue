<template>
	<div>
		<Header></Header>
	</div>
</template>

<style>

</style>

<script>
import Header from "@/components/graphics/Header";

export default {
	name: "Blank",

	components: {
		Header
	},

	data() {
		return {
			
		}
	},

	created() {
		/*const userId = "P6ON6uHfbWfOT6I0GRz2OOzUwHB2";

		this.$db.ref(`users/${userId}`).set({
			displayName: this.$firebase.auth().currentUser.displayName,
			email: this.$firebase.auth().currentUser.email,
			phoneNumber: this.$firebase.auth().currentUser.phoneNumber,
			photoURL: this.$firebase.auth().currentUser.photoURL,

			favorites: []
		});

		this.$db.ref(`products/`).push({
			avatar: "http://s1.picswalls.com/wallpapers/2014/07/25/basketball-desktop-wallpaper_041014235_92.jpg",
			name: 'Ballon de basket',
			
			prices: {
				start: 147,
				actual: 1000000000
			},

			timeOptions: {
				createdAt: new Date(1638781932).getTime(),
				bidStartTime: new Date(1646564400).getTime(),
				bidTime: '24h',
				bidStopTime: new Date(1646650800).getTime(),
			},

			shortDesc: "C'est un super ballon de basket basique, mais il est super !",
			longDesc: "Lorem ipsum dolor sit amet",

			bids: []
		});*/

		/*this.$db.ref(`bids/`).push({
			from: 'P6ON6uHfbWfOT6I0GRz2OOzUwHB2',
			createdAt: new Date()
		});

		let data = [];

		var documentRef = this.$firebase.database().ref(`products/`);

		documentRef.on("child_added", snap => {
			data.push({
				...snap.val(),
				id: snap.getRef().key
			});
		});

		console.log(data)*/
	}
}
</script>