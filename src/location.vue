<template>
  <div>
    <h2 class="title is-4 has-text-grey-dark has-text-centered">{{ville}}</h2>
    <div class="section is-small has-background-info-dark m-5">
      <h3 class="title is-5 has-text-white">Conditions actuelles</h3>
      <div>{{mercure}} &#176; C, ressentie {{temperatureRessentie}} &#176; C</div>
      <div class="description">
        <img :src="`http://openweathermap.org/img/wn/${weatherDecription.icon}@2x.png`">
        {{weatherDecription.description}}
      </div>
    </div>
  </div>
</template>

<script>

import {getCurrentWeather} from "./api/openWeatherMapApi";

export default {
  name: "location",
  data: function () {
    return {
      currentWeatherData: [],
      ville: '',
      weatherDecription: [],
      mercure: '',
      temperatureRessentie: '',
      coordinatesX: window.localStorage.getItem('navpositionX'),
      coordinatesY: window.localStorage.getItem('navpositionY'),
    }
  },

  methods: {
  },

  async created() {
    this.currentWeatherData = await getCurrentWeather(this.coordinatesX,this.coordinatesY);
    this.mercure = this.currentWeatherData.main.temp;
    this.temperatureRessentie = this.currentWeatherData.main.feels_like;
    this.weatherDecription = this.currentWeatherData.weather[0];
    this.ville = this.currentWeatherData.name;
  }
}
</script>

<style scoped>

</style>