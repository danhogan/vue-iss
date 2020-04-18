<template>
    <v-app>
        <v-toolbar max-height=64>
            <v-toolbar-title class="headline text-uppercase">
                <span>International Space Station</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-items>
                <v-btn text to="/current">Current Location</v-btn>
                <v-btn text to="/times">Pass Over Times</v-btn>
                <v-btn text to="/who">Who's in Space?</v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: 'App'
    };
</script>

<style>
.v-content {
    margin: 2em;
}
</style>
