<template lang="html">
  <div class="forecast__wrapper row">
    <div class="forecast__search col-12">
      <h1>Cutthroat <strong>Climates</strong></h1>
      <h2>Your run-of-the-mill weather app...with a touch of malice.</h2>
      <p>Please search for any two cities. Only two cities at a time, we dont want a war!</p>
      <form class="forecast__form" v-on:submit.prevent="getForecast(city.search)">
        <input type="text" name="" value="" v-bind:placeholder="this.placeholder" v-model="city.search">
        <button class="button button-search" v-bind:disabled="isForecastsFull">Submit</button>
      </form>
    </div>
    <template v-if="this.$store.getters.FORECASTS.length">
      <ForecastSearchResults></ForecastSearchResults>
    </template>
  </div>
</template>

<script>
import ForecastSearchResults from '@/components/ForecastSearchResults'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    ForecastSearchResults
  },
  data () {
    return {
      placeholder: 'Type in a city or zipcode...',
      city: {
        search: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      isForecastsFull: 'IS_FORECASTS_FULL'
    })
  },
  methods: {
    ...mapActions({
      getForecast: 'GET_FORECAST'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
