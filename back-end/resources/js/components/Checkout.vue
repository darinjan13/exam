<template>
    <v-app> asdasd </v-app>
</template>
<script>
export default {
    created() {
        axios.get("api/burgers").then((res) => {
            console.log(res);
        });
        console.log(this.$store.getters.burgers)
    },
};
</script>