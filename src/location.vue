<template>
  <div>
    <h2 class="title is-4 has-text-grey-dark has-text-centered">{{ville}}</h2>
      <div class="section is-small has-background-info-dark m-5">
        <div class="columns">
          <div class="column is-four-fifths">
            <h3 class="title is-5 has-text-white">Conditions actuelles</h3>
            <div>{{Math.round(mercure)}} &#176; {{unitsSymbol}}, ressentie {{Math.round(temperatureRessentie)}} &#176; {{unitsSymbol}}</div>
            <div class="description">
              <img :src="`http://openweathermap.org/img/wn/${weatherDecription.icon}@2x.png`">
              {{weatherDecription.description}}
            </div>
          </div>
          <div class="column">
            <div class="switchcontainer">
              <label class="switch"><input type="checkbox" v-model="unitIsToggle" @change="toggleUnits" />
                <div></div>
              </label>
            </div>
            <div class="is-flex">
              <p class="m-auto">&#176; C / &#176; F</p>
            </div>
          </div>
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
      unitIsToggle: false,
      currentUnits: "metric",
      unitsSymbol: "C"
    }
  },

  methods: {
    fetchWeather: async function ()
    {
      this.currentWeatherData = await getCurrentWeather(this.coordinatesX,this.coordinatesY, this.currentUnits);
      this.mercure = this.currentWeatherData.main.temp;
      this.temperatureRessentie = this.currentWeatherData.main.feels_like;
      this.weatherDecription = this.currentWeatherData.weather[0];
      this.ville = this.currentWeatherData.name;
    },

    toggleUnits: function ()
    {
      if (this.unitIsToggle)
      {
        this.currentUnits = "imperial";
        this.unitsSymbol = "F";
        this.fetchWeather();
      }
      else
      {
        this.currentUnits = "metric";
        this.unitsSymbol = "C";
        this.fetchWeather();
      }
      this.$emit('toggleOfUnits', this.currentUnits);
    },
  },

  async created() {
    this.fetchWeather();
  }
}
</script>

<style scoped>

.switchcontainer {
  height: 40px;
  margin: auto;
  text-align: center;
}

.switch input {
  position: absolute;
  opacity: 0;
}

.switch {
  display: inline-block;
  font-size: 20px; /* 1 */
  height: 1em;
  width: 2em;
  background: rgba(142, 143, 161, 0.96);
  border-radius: 1em;
}

.switch div {
  height: 1em;
  width: 1em;

  border-radius: 1em;
  background: #FFF;
  box-shadow: 0 0.1em 0.3em rgba(0,0,0,0.3);
  -webkit-transition: all 300ms;
  -moz-transition: all 300ms;
  transition: all 300ms;
}

.switch input:checked + div {
  -webkit-transform: translate3d(100%, 0, 0);
  -moz-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
}

</style>