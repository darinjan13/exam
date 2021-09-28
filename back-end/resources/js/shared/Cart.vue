<template>
    <v-app>
        <v-card>
            <v-card-title>Products</v-card-title>
            <v-card-title>{{ productName }}</v-card-title>
            <v-card-title>{{ quantity }}</v-card-title>
        </v-card>
    </v-app>
</template>
<script>
export default {
    props: {
        productName: String,
        quantity: Number
    }
}
</script>