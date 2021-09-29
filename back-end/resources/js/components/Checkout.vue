<template>
    <v-app> </v-app>
</template>
<script>
export default {
    mounted() {
        console.log(this.$store.getters.checkedOut);
    },
};
</script>