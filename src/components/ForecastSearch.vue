<template lang="html">
  <transition name="fade">
    <div class="forecast__wrapper row">
      <section class="forecast__search col--12">
        <h1>Cutthroat <strong>Climates</strong></h1>
        <p class="lead">Your run-of-the-mill weather app...with a touch of malice.</p>
        <p>Please search for any two cities. Only two cities at a time, we dont want a war!</p>
        <form class="forecast__form" v-on:submit.prevent="getForecast(city.search)">
          <input type="text" name="" value="" v-bind:placeholder="this.placeholder" v-model="city.search">
          <button class="button button-day button-search" v-bind:disabled="isForecastsFull"><font-awesome-icon :icon="['fas', 'search']" /></button>
        </form>
      </section>
      <template v-if="this.$store.getters.FORECASTS.length">
        <ForecastSearchResults></ForecastSearchResults>
      </template>
    </div>
  </transition>
</template>

<script>
import ForecastSearchResults from '@/components/ForecastSearchResults'
import { mapGetters, mapState } from 'vuex'
import NProgress from 'nprogress'

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
    ...mapState(['loading']),
    ...mapGetters({
      isForecastsFull: 'IS_FORECASTS_FULL'
    })
  },
  watch: {
    loading: function (newVal, oldVal) {
      if (newVal === 1) return NProgress.start()
      if (newVal === 0) return NProgress.done()
    }
  },
  methods: {
    getForecast: function (term) {
      this.$store.dispatch('GET_FORECAST', term)
      this.city.search = ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
