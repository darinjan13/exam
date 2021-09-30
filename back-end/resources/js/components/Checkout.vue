<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col class="mx-auto" cols="6">
                    <v-card>
                        <v-simple-table height="500px">
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">Product Name</th>
                                        <th class="text-left">Quantity</th>
                                        <th class="text-left">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="item in cartItems"
                                        :key="item.id"
                                    >
                                        <td class="text-left">
                                            {{ item.productName }}
                                        </td>
                                        <td class="text-left">
                                            {{ item.quantity }}
                                        </td>
                                        <td class="text-left">
                                            ₱{{ item.price }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td class="text-right">Discount:</td>
                                        <td class="text-left">
                                            {{ discount * 100 }}%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td class="text-right">Total:</td>
                                        <td class="text-left">₱{{ total }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                        <v-col class="mx-auto" cols=8>
                            <v-btn block @click="placeOrder" color=success>Place Order</v-btn>
                        </v-col>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
<script>
export default {
    data() {
        return {
            discount: 0,
        };
    },

    computed: {
        cartItems() {
            return this.$store.getters.cartItems;
        },

        total() {
            var total = this.cartItems.reduce((acc, cur) => acc + cur.price, 0);
            if (total == 0) {
                return 0;
            } else return total - total * this.discount;
        },
        withCoupon() {
            return this.$store.getters.withCoupon;
        },
    },
    mounted() {
        console.log(this.withCoupon);
        this.setDiscount();
    },
    methods: {
        setDiscount() {
            if (this.withCoupon) {
                this.discount = 0.1;
                console.log(this.discount);
            } else {
                this.discount = 0;
                console.log(this.discount);
            }
        },
        placeOrder() {
            console.log(this.cartItems)
            console.log(this.total)
            var pota = {
                details: this.cartItems,
                discount: this.discount,
                tax: 0.12,
                total: this.total 
            }
            axios.post('api/place', pota).then(res => {
                console.log(res.data)
            })
        }
    },
};
</script>