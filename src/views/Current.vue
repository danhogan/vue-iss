<template>
    <v-card>
        <!-- {{json}} -->
        <h1>Current Location</h1>
        <p>Latitude: {{marker.lat}}</p>
        <p>Longitude: {{marker.lng}}</p>
        <p>City: {{locationJson.city}}</p>
        <div style="height: 600px; width: 100%">
            <l-map
                :zoom="zoom"
                :center="center"
                :options="mapOptions"
                style="height: 100%"
            >
                <l-marker :lat-lng="marker"></l-marker>
                <l-tile-layer :url="url" :attribution="attribution" />
            </l-map>
        </div>
    </v-card>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import 'leaflet/dist/leaflet.css';

import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
    components: {
        LMap,
        LTileLayer,
        LMarker
    },
    data() {
        return {
            json: null,
            locationJson: null,
            zoom: 4,
            center: latLng(47.41322, -1.219482),
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            marker: latLng(47.41322, -1.219482),
            currentZoom: 11.5,
            mapOptions: {
                zoomSnap: 0.5
            }
        }
    },
    created: function () {
        fetch("http://api.open-notify.org/iss-now.json")
            .then(r => r.json())
            .then(json => {
                this.json = json;
                let where = latLng(json.iss_position.latitude, json.iss_position.longitude)
                this.marker = where
                this.center = where

                return where
            })
            .then(where => {
                return fetch(`https://geocode.xyz/${where.lat},${where.lng}?json=1`)
            })
            .then(r => r.json())
                .then(json => {
                    console.log('json:', json)
                    this.locationJson = json                    
                });
    }
}
</script>

<style lang="scss" scoped>
    #mapid {
        height: 180px;
    }
</style>