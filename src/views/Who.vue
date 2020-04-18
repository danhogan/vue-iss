<template>
    <v-card>
        {{json}}
        <h1>People Currently "Out of this World"</h1>
        <div v-if="json.people.length > 0">
            <ul v-for="person in json.people" :key="person.name">
                <li>{{person.name}}</li>
            </ul>
        </div>
        <div v-else>
            <h2>Everyone's At Home!</h2>
        </div>
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
        fetch("http://api.open-notify.org/astros.json")
            .then(r => r.json())
            .then(json => {
                this.json = json
            });
    }
}
</script>