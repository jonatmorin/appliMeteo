<template>
<div>
  <location @toggleOfUnits="updateUnits"></location>
  <forecast v-bind:currentUnits="currentUnits"></forecast>
</div>
</template>

<script>
import location from "./location";
import forecast from "./forecast";

export default {
  name: "meteo",

  components: {
    location,
    forecast,
  },

  data: function () {
    return {
      navcoord: [],
      currentUnits: "metric",
    }
  },

  methods: {
    updateUnits: function (unitsToUse) {
      this.currentUnits = unitsToUse;
    },

    askLocation: function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      }
    },

    showPosition: function (position) {
      const a = position.coords.latitude;
      const b = position.coords.longitude;
      this.navcoord = [a, b];
      window.localStorage.setItem('navpositionX', this.navcoord[0]);
      window.localStorage.setItem('navpositionY', this.navcoord[1]);
    }
  },

  created:
      function () {
        this.askLocation();
      },
}
</script>

<style scoped>

</style>