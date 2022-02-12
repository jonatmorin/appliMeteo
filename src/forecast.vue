<template>
  <div class="section is-small has-background-info-dark m-5">
    <h3 class="title is-5 has-text-white">Prévisions 5 jours</h3>

    <div class="is-mobile px-5 columns is-flex-mobile is-flex-wrap-wrap">
    <div class="column is-half-mobile is-one-third-tablet is-one-fifth-widescreen"
     v-for="day in this.forecast.data"
     v-bind:key="day.valid_date">
      <h3>{{day.valid_date}}</h3>

      <span>{{day.temp}} &#176; C</span>
        <img :src="`https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`">
        {{day.weather.description}}

    </div>
      </div>




  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "forecast",

  data: function () {
      return {
        forecast: '',
        coordinatesX: window.localStorage.getItem('navpositionX'),
        coordinatesY: window.localStorage.getItem('navpositionY'),

      }
    },

  // props: ['navcoord'],

  methods: {
    getForecast: async function () {

      const response = await axios.get(
          "https://api.weatherbit.io/v2.0/forecast/daily/",
          {
            params: {
              lat: this.coordinatesX,
              lon: this.coordinatesY,
              key: "edcec330cb664df7aef7052c98a9fbb2",
              lang: "fr",
              days: 5,

            },
          },
      );
        this.forecast = response.data;
      },
    },

  mounted:
  function () {
    this.getForecast()
  }


}
</script>

<style scoped>

</style>