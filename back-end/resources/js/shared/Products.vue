<template>
    <v-app>
        <v-card>
            <v-img
                height="200px"
                :src="require(`../../images/${filename}.jpg`).default"
            ></v-img>
            <v-divider></v-divider>
            <v-card-title>{{ name }}</v-card-title>
            <v-card-actions>
                <v-btn @click="addToCart">Add to cart</v-btn>
                <v-btn @click="subtract" icon>
                    <v-icon> mdi-minus </v-icon>
                </v-btn>
                {{ quantity }}
                <v-btn @click="add" icon>
                    <v-icon dark> mdi-plus </v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-app>
</template>
<script>
import Cart from './Cart.vue';
export default {
    name: 'Products',
    components: { Cart },
    props: {
        filename: String,
        name: String,
    },
    data() {
        return {
            quantity: 0,
        };
    },
    methods: {
        addToCart() {
            console.log(this.quantity);
            console.log(this.name);
        },
        add() {
            this.quantity++;
        },
        subtract() {
            this.quantity--;
        },
    },
};
</script>