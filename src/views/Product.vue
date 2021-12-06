<template>
	<div>
		<Header></Header>
        <v-row >
            <v-col justify="center" align="center" cols="7">
                <v-card class="glasscard pa-md-4 mx-lg-auto">
                    <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    max-height="300"
                    max-width="600"
                    src="https://picsum.photos/id/11/500/300"
                    ></v-img>
                </v-card>
            </v-col>
            <template>
                <v-card 
                    class="glasscard pa-md-4 mx-lg-auto"
                    width="250px"
                >
                    <v-card-text>
                    Adjust screen size to see spacing changes
                    </v-card-text>
                </v-card>
            </template>
        </v-row>
	</div>
</template>

<style>

</style>

<script>
import Header from "@/components/graphics/Header";

export default {
	name: "Product",

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