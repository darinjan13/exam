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
                    <v-col>
                        <!-- Burger -->
                        <Dropdown title="Burger">
                            <v-col
                                v-for="burger in burgers"
                                :key="burger.productId"
                                cols="3"
                            >
                                <Products
                                    :productId="burger.productId"
                                    :filename="burger.fileName"
                                    :name="burger.productName"
                                    :price="burger.price"
                                />
                            </v-col>
                        </Dropdown>

                        <!-- Beverages -->
                        <Dropdown title="Beverages">
                            <v-col
                                v-for="drinks in beverages"
                                :key="drinks.productId"
                                cols="3"
                            >
                                <Products
                                    :productId="drinks.productId"
                                    :filename="drinks.fileName"
                                    :name="drinks.productName"
                                    :price="drinks.price"
                                />
                            </v-col>
                        </Dropdown>

                        <!-- Combo -->
                        <Dropdown title="Combo">
                            <v-col
                                v-for="meal in combo"
                                :key="meal.productId"
                                cols="6"
                            >
                                <Products
                                    :productId="meal.productId"
                                    :filename="meal.fileName"
                                    :name="meal.productName"
                                    :price="meal.price"
                                />
                            </v-col>
                        </Dropdown>
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
import Dropdown from "../shared/Dropdown.vue";
import Products from "../shared/Products.vue";
export default {
    components: {
        Products,
        Cart,
        Dropdown,
    },
    data() {
        return {
            dialog: false,
        };
    },
    mounted() {
        this.$store.dispatch('setProducts');
    },
    computed: {
        burgers() {
            return this.$store.getters.burgers;
        },
        beverages() {
            return this.$store.getters.beverages;
        },
        combo() {
            return this.$store.getters.combo;
        },
        totalItems() {
            var items = this.$store.getters.cartItems;
            return items.length;
        },
    },
};
</script>