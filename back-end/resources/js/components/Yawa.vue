<template>
    <v-app>
        <v-container>
            <v-card>
                <v-card-title class="justify-center"
                    >Simple Online Menu Ordering Application</v-card-title
                >
                <v-divider></v-divider>
                <v-row>
                    <v-col cols="6">
                        <v-card-title>Products</v-card-title>
                    </v-col>
                    <v-col cols="6">
                        <v-card-title class="justify-end">
                            <v-btn icon>
                                <v-icon> mdi-cart </v-icon>
                            </v-btn>
                        </v-card-title>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col v-for="name in names" :key="name.id" cols="3">
                        <Products
                            :filename="name.fileName"
                            :name="name.productName"
                        />
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
        <Cart />
    </v-app>
</template>
<script>
import Cart from '../shared/Cart.vue';
import Products from "../shared/Products.vue";
export default {
    components: {
        Products,
        Cart
    },
    data() {
        return {
            names: [
                { fileName: "burger", productName: "Regular Burger" },
                { fileName: "cheeseburger", productName: "Cheese Burger" },
                { fileName: "french_fry", productName: "French Fries" },
                { fileName: "hotdog", productName: "Hotdog Sandwich" },
            ],
        };
    },
};
</script>