<template>
    <v-card>
        <v-img
            height="200px"
            :src="require(`../../images/${filename}.jpg`).default"
        ></v-img>
        <v-divider></v-divider>
        <v-row>
            <v-col cols="8">
                <div class="ml-5 text-h6">{{ name }}</div>
            </v-col>
            <v-col cols="4">
                <div class="text-h6">₱{{ price }}</div>
            </v-col>
        </v-row>
        <v-card-actions>
            <v-row>
                <v-col cols="7">
                    <v-btn @click="addToCart()">Add to cart</v-btn>
                </v-col>
                <v-col cols="5">
                    <v-btn @click="subtract" icon>
                        <v-icon> mdi-minus </v-icon>
                    </v-btn>
                    {{ quantity }}
                    <v-btn @click="add" icon>
                        <v-icon dark> mdi-plus </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-actions>
    </v-card>
</template>
<script>
import Cart from "./Cart.vue";
export default {
    name: "Products",
    components: { Cart },
    props: {
        productId: Number,
        filename: String,
        name: String,
        price: Number,
    },
    data() {
        return {
            quantity: 1,
        };
    },
    methods: {
        addToCart(item) {
            var item = {
                productId: this.productId,
                productName: this.name,
                price: this.price * this.quantity,
                quantity: this.quantity,
            };
            this.$store.dispatch("addToCart", item);
        },
        add() {
            if (this.quantity > 99) {
                this.quantity = 10;
            } else {
                this.quantity++;
            }
        },
        subtract() {
            if (this.quantity < 2) {
                this.quantity = 1;
            } else {
                this.quantity--;
            }
        },
    },
};
</script>