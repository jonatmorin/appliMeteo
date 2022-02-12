<template>
<div class="has-background-info">

  <h1 class="title is-3 has-text-grey-dark has-text-centered">Mon application de météo</h1>

  <location></location>
  <forecast></forecast>

</div>
</template>

<script>

import forecast from "@/forecast"
import location from "@/location";

export default {
  name: 'App',
  components: {
    location,
    forecast,
  },

  data: function () {
    return {
      navcoord: [],
    }
  },

  methods: {
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

<style>

</style>
