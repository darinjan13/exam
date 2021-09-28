<template>
    <v-app>
        <v-container fluid>
            <v-card>
                <v-card-title class="justify-center">
                    Simple Online Menu Ordering Application
                </v-card-title>
                <v-divider></v-divider>
                <v-row>
                    <v-col cols="6">
                        <v-card-title>Products</v-card-title>
                    </v-col>
                    <v-col cols="6">
                        <v-card-title class="justify-end">
                            <v-btn icon @click.stop="dialog = true">
                                <v-icon> mdi-cart </v-icon>
                                <span>{{ totalItems }}</span>
                            </v-btn>
                        </v-card-title>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col v-for="name in names" :key="name.productId" cols="3">
                        <Products
                            :productId="name.productId"
                            :filename="name.fileName"
                            :name="name.productName"
                            :price="name.price"
                        />
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
        <v-dialog v-model="dialog" width="700px">
                <Cart />
            </v-dialog>
    </v-app>
</template>
<script>
import Cart from "../shared/Cart.vue";
import Products from "../shared/Products.vue";
export default {
    components: {
        Products,
        Cart,
    },
    data() {
        return {
            dialog: false,
        };
    },
    computed: {
        names() {
            return this.$store.getters.names;
        },
        totalItems() {
            var items = this.$store.getters.cartItems;
            return items.length;
        },
    },
};
</script>