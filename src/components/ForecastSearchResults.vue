<template lang="html">
  <div class="forecast__results">
    <template v-if="isForecastsFull">
      <div class="forecast__instructions col-12">
        <h2>Now Select Your Fighter!</h2>
        <a href="#">Uh....fighter?</a>
      </div>
    </template>
    <div v-for="(item, index) in forecasts" v-bind:index="index" v-bind:key="index" class="forecast__results-card col-6">
      <template v-if="isForecastsFull">
        <router-link v-on:click.native="selectPlayer(index)" to="/game" class="forecast__button-player">Select</router-link>
      </template>
      <div class="forecast__info" v-bind:class="{ day: item.IsDayTime, night: !item.IsDayTime }">
        <button class="forecast__button-remove" btn v-on:click="removeForecast(index)">X</button>
        <h2>{{ item.City.Name }}, {{item.City.Area}}</h2>
        <h3 class="h1">{{ item.Temperature.Imperial.Value }}<sup>&deg;{{ item.Temperature.Imperial.Unit }}</sup></h3>
        <img v-bind:src="'https://www.accuweather.com/images/weathericons/'+ item.WeatherIcon +'.svg'">
        <h3 class="h2">{{ item.WeatherText }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      forecasts: 'FORECASTS',
      isForecastsFull: 'IS_FORECASTS_FULL'
    })
  },
  methods: {
    ...mapActions({
      removeForecast: 'REMOVE_FORECAST',
      selectPlayer: 'SELECT_FORECAST'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
