<template>
    <v-card>
        <v-card-title>
            Cart
        </v-card-title>
        <v-simple-table fix-header height="300px">
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">Product Name</th>
                    <th class="text-left">Quantity</th>
                    <th class="text-left">Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in cartItems" :key="item.productId">
                    <td>{{ item.productName }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.price }}</td>
                    <td>
                        <v-btn icon @click="remove(index)">
                            <v-icon> mdi-delete </v-icon>
                        </v-btn>
                    </td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
    <v-card-actions class="justify-end">
        <div class="text-h5 mx-10">Total: {{total}}</div>
        <v-btn>Checkout</v-btn>
    </v-card-actions>
    </v-card>
</template>
<script>
export default {
    name: "Cart",
    computed: {
        cartItems() {
            return this.$store.getters.cartItems;
        },

        total() {
            return this.cartItems.reduce((acc, cur) => acc + cur.price, 0);
        },
    },
    methods: {
        remove(index) {
            this.$store.dispatch("remove", index);
        },
    },
};
</script>