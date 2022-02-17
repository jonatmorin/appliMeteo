<template>
  <div class="section is-small has-background-info-dark m-5">
    <h3 class="title is-5 has-text-white">Prévisions 5 jours</h3>

    <div class="is-mobile px-5 columns is-flex-mobile is-flex-wrap-wrap">
    <div class="column is-half-mobile is-one-third-tablet is-one-fifth-widescreen"
     v-for="day in this.sevenDaysForecast.slice(1,6)"
     v-bind:key="day.dt">
      <h3>{{convertUnixTime(day.dt)}}</h3>

      <span>{{Math.round(day.temp.day)}} &#176; C</span>
        <img :src="`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`">
        {{day.weather.description}}

      </div>
    </div>
  </div>
</template>

<script>
import {getForecast5Days} from "./api/openWeatherMapApi";

export default {
  name: "forecast",

  data: function () {
      return {
        sevenDaysForecast: [],
        forecast: '',
        coordinatesX: window.localStorage.getItem('navpositionX'),
        coordinatesY: window.localStorage.getItem('navpositionY'),

      }
    },

  methods: {
    convertUnixTime: function (unix_timestamp) {
      let convertedDate = new Date (unix_timestamp * 1000);
      return convertedDate.toDateString();
    }
  },

  async created() {
    this.sevenDaysForecast = await getForecast5Days(this.coordinatesX, this.coordinatesY);
  }
}
</script>

<style scoped>

</style>