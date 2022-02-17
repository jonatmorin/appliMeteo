<template>
<div class="has-background-info">

  <h1 class="title is-3 has-text-grey-dark has-text-centered">Mon application de météo</h1>


  <meteo></meteo>

</div>
</template>

<script>

import Meteo from "./meteo";
export default {
  name: 'App',
  components: {
    Meteo
  },
}




</script>

<style>

</style>
