<template>
        <v-expansion-panels>
            <v-expansion-panel>
                <v-expansion-panel-header>{{ title }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row>
                    <slot />
                    </v-row>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
</template>
<script>
export default {
    props: {
        title: String
    }
}
</script>