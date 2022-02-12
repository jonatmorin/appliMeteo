<template>
  <div>

    <!--Ville-->
      <h2 class="title is-4 has-text-grey-dark has-text-centered">{{ville}}</h2>
    <!--/Ville-->

    <!--Condition actuelle-->
    <div class="section is-small has-background-info-dark m-5">

<!--        <h3 class="title is-5 has-text-white">Conditions actuelles en date du {{temp.ob_time}}</h3>-->
      <h3 class="title is-5 has-text-white">Conditions actuelles</h3>


      <div>{{mercure}} &#176; C, ressentie {{temperatureRessentie}} &#176; C</div>
      <div class="description">
        <img :src="`http://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`">
        {{currentWeather.description}}
      </div>
    </div>
    <!--/Condition actuelle-->
  </div>
</template>

<script>

//import axios from "axios";
import {getCurrentWeather} from "./api/openWeatherMapApi";

export default {



  name: "location",

  data: function () {
    return {
      ville: '',
      currentWeather: [],
      mercure: '',
      temperatureRessentie: '',
      coordinatesX: window.localStorage.getItem('navpositionX'),
      coordinatesY: window.localStorage.getItem('navpositionY'),
    }
  },

  methods: {
    getWeather: async function () {
      let weather = getCurrentWeather(this.coordinatesX,this.coordinatesY);
      this.mercure = weather.data.main.temp;
      this.temperatureRessentie = weather.data.main.feels_like;
      this.currentWeather = weather.data.weather[0];
      this.ville = weather.data.name;
    },



/*    getCurrentWeather: async function () {
      const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather/",
          {
            params: {
              lat: this.coordinatesX,
              lon: this.coordinatesY,
              appid: "5d08576bf748affb068993b10407670e",
              units: "metric"
            }
          }
      )
      this.mercure = response.data.main.temp;
      this.temperatureRessentie = response.data.main.feels_like;
      this.currentWeather = response.data.weather[0];
      this.ville = response.data.name;
    },*/
  },

  created:
    function () {
      this.getWeather();
    },


}




</script>

<style scoped>

</style>