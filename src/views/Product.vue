<template>
	<div>
		<Header title="Titre produit"></Header>
        <v-row>
            <v-col justify="center" align="center" cols="8">
                <v-card class="glasscard pa-md-4 mx-lg-auto">
                    <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    src="https://picsum.photos/id/11/500/300"
                    ></v-img>
                </v-card>
                <v-card class="glasscard my-3">
                    <v-card-text class="py-1">
                        <h3 align="left">Temps restant</h3>
                        <p align="left"> 7 jours 10 heures 50 minutes 24 secondes </p>
                    </v-card-text>
                </v-card>
                 <v-card class="glasscard my-3">
                    <v-card-text>
                        <h3 align="left">Description</h3>
                        <p align="left"> Commencer la description par une accroche vivante. Choisir un point de vue (une description vue par un personnage ou vue de l'extérieur). Ne pas chercher à tout décrire, mais choisir les éléments significatifs. Ordonner sa description (pour un portrait, passer du portrait physique au portrait mental par exemple). </p>
                        <p align="left"> Commencer la description par une accroche vivante. Choisir un point de vue (une description vue par un personnage ou vue de l'extérieur).</p>
                    </v-card-text>
                </v-card>

            </v-col>
            <v-col justify="center" align="center" cols="4">
                <v-card class="glasscard">
                    <v-card-text>
                        Offre actuelle
                        <v-card class="glasscard mx-lg-auto">
                            <v-card-text>
                               <p> 250€ </p>
                            </v-card-text>
                        </v-card>

                        
                        5 dernieres offres
                        <v-card class="glasscard mx-lg-auto">
                            <v-card-text>
                                <p>Sarah 250€ </p>
                                <p>Laure 250€ </p>
                                <p>Jenny 250€ </p>
                                <p>Stanou 250€ </p>
                                <p>Irem 250€ </p>
                            </v-card-text>
                        </v-card>
                    </v-card-text>
                    <v-textarea
                                label="Prix à proposer"
                                auto-grow
                                rows="1"
                                class= "mx-3 py-0"
                    ></v-textarea>
                    <v-checkbox v-model="checkbox" :label="`Cacher mon pseudo`"
                                class= "ml-4 py-0"
                    ></v-checkbox>
                    <v-btn
                        color="primary"
                        elevation="3"
                        class="my-2">
                    <div> Passer au paiement </div>
                    </v-btn>
                </v-card>
                <v-card class="glasscard pd-10">
                    <v-card-text class="mt-3">
                       <h3>Acheter tout en sécurité</h3> 
                       <p>✓Votre paiement sera conservé jusqu'à ce que le vendeur ait envoyé votre article ou qu'il l'ait préparé pour son retrait sur place. </p>
                       <p>✓Toutes nos ventes sont soumises à un contrôle par notaire.</p>
                    </v-card-text>
                </v-card>
            </v-col>
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