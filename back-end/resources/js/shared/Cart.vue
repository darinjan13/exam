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
                <tr v-for="(item, index) in cartItems" :key="item.id">
                    <td>{{ item.productName }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>₱{{ item.price }}</td>
                    <td>
                        <v-btn icon @click="remove(index)">
                            <v-icon> mdi-delete </v-icon>
                        </v-btn>
                    </td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
    {{coupon}}
    <v-card-actions>
        <v-col class="mr-n15" cols=4>
            <div class="text-subtitle-1">COUPON 10% DISCOUNT:</div>
        </v-col>
        <v-col cols=3>
            <v-text-field v-model="coupon"></v-text-field>
        </v-col>
        <v-col cols=3>
            <div class="text-h5">Total: ₱{{total}}</div>
        </v-col>
        <v-col cols=2>
            <v-btn @click="checkout">Confirm</v-btn>
        </v-col>        
    </v-card-actions>
    </v-card>
</template>
<script>
export default {
    name: "Cart",
    data() {
        return {
            coupon: null,
            withCoupon: false,
        }
    },
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
        checkout() {
            this.$store.dispatch("checkout", this.cartItems);
            if (this.total > 0) {
                if (this.coupon == "GO2018") {
                    this.withCoupon = true
                    this.$store.dispatch("withCoupon", this.withCoupon)
                    this.$router.push('/checkout')
                } else if (this.coupon == null) {
                    this.$store.dispatch("withCoupon", this.withCoupon)
                    this.$router.push('/checkout')
                } else {
                    alert("Invalid Coupon")
                    this.coupon = null
                }
            }
        }
    },
};
</script>
<style scoped>
    
</style>