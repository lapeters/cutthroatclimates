<template lang="html">
  <div class="forecast__search">
    <p>Please search for any two cities. Only two cities at a time, we dont want a war!</p>
    <form class="forecast__form" v-on:submit.prevent="getCity">
      <input type="text" name="" value="" v-bind:placeholder="this.placeholder" v-model="city.search">
      <button class="button button-search" :disabled=disabled>Submit</button>
    </form>
    {{forecast}}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      placeholder: 'Type in a city or zipcode...',
      disabled: false,
      city: {
        search: '',
        name: '',
        area: '',
        ID: ''
      },
      loading: true,
      forecast: []
    }
  },
  watch: {
    disabled: function () {
      return this.forecast.length > 1
    }
  },
  methods: {
    getCity: function () {
      var self = this
      axios
        .get(process.env.VUE_APP_AW_URL + 'locations/v1/cities/search?apikey=' + process.env.VUE_APP_AW_API + '&q=' + self.city.search)
        .then(res => {
          if (res) {
            self.getForecast(res)
          }
        })
        .catch((error) => console.log(error))
    },
    getForecast: function (cityRes) {
      var self = this
      self.city.ID = cityRes.data[0].Key
      axios
        .get(process.env.VUE_APP_AW_URL + 'currentconditions/v1/' + self.city.ID + '?apikey=' + process.env.VUE_APP_AW_API)
        .then(res => {
          if (res) {
            self.parseForecast(cityRes.data, res.data)
          }
        })
        .catch((error) => console.log(error))
    },
    parseForecast: function (cityRes, forecastRes) {
      this.city.name = cityRes[0].EnglishName
      this.city.area = (cityRes[0].Country.ID === 'US' ? cityRes[0].AdministrativeArea.EnglishName : cityRes[0].Country.EnglishName)
      forecastRes[0].City = { Name: this.city.name, Area: this.city.area }
      this.forecast.push(forecastRes[0])
    }
  }
}
</script>

<style lang="css" scoped>
</style>
