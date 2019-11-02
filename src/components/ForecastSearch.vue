<template lang="html">
  <div class="forecast__search">
    <p>Please search for any two cities. Only two cities at a time, we dont want a war!</p>
    <form class="forecast__form" v-on:submit.prevent="getCity">
      <input type="text" name="" value="" v-bind:placeholder="this.placeholder" v-model="city.search">
      <button class="button button-search" v-bind:disabled="isForecastsFull">Submit</button>
    </form>
    <template v-if="this.$store.getters.FORECASTS.length">
      <ForecastSearchResults></ForecastSearchResults>
    </template>
  </div>
</template>

<script>
import ForecastSearchResults from '@/components/ForecastSearchResults'

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
    isForecastsFull: function () {
      return this.$store.getters.IS_FORECASTS_FULL
    }
  },
  methods: {
    getCity: function () {
      let payload = {
        term: this.city.search
      }
      this.$store.dispatch('GET_CITY', payload).then((result) => {
        this.getForecast(result.data[0])
      })
    },
    getForecast: function (result) {
      let payload = {
        id: result.Key,
        name: result.EnglishName,
        area: (result.Country.ID === 'US' ? result.AdministrativeArea.EnglishName : result.Country.EnglishName)
      }
      this.$store.dispatch('GET_FORECAST', payload)
    }
  }
}
</script>

<style lang="scss" scoped>
.forecast__search {
  text-align: center;
  .forecast__form {
    input {
      min-width: 30%;
    }
    .button-search {
      @include theme-gradients($day: true);
      color: $white;
      font-weight:400;
      text-transform: uppercase;
      &:hover {
        @include theme-gradients($day: false);
      }
      &:disabled {
        &:hover {
          @include theme-gradients($day: true);
        }
      }
    }
  }
}
</style>
