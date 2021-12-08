export let models = {
	bid: {
		name: String(),
		
		shortDesc: String(),
		longDesc: String(),

		condition: String(),

		img: {
			main: String(),
			secondary: String(),
		},

		prices: {
			actual: Number(),
			start: Number()
		},

		timeOptions: {
			bidStartTime: Number(),
			bidStopTime: Number(),
			createdAt: Number()
		}
	}
};
