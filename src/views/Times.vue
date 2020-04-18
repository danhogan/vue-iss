<template>
    <v-card>
        {{json}}
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            json: null
        }
    },
    created: function () {
        fetch("http://api.open-notify.org/iss-pass.json?lat=45.0&lon=-122.3")
            .then(r => r.json())
            .then(json => {
                console.log('json:', json)
                this.json = json;
            });
    }
}
</script>