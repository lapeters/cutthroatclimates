<template lang="html">
  <section class="forecast__results">
    <template v-if="isForecastsFull">
      <div class="results__wrapper col--12">
        <h2>Now Select Your <strong>Fighter</strong>!</h2>
        <button class="button button-bare" @click="showModal">Uh....fighter?!</button>
        <modal v-show="isModalVisible" v-bind:close="closeModal">
          <div slot="header"><strong>Thats Right!</strong></div>
          <div slot="body">
            <p>Cutthroat Climates is the weather app that turns into a weather-themed death match! The rules are simple:
            two climates walk in and only one walks out!</p>
            <p>In all seriousness, just select which local weather you'd like to play as. As of now there are no
            special advantages or disadvantages for any conditions.</p>
            <p>The weather forecast you don't select will be your opponent. You'll have a regular attack, special attack, and healing at your disposal.
            It'll make much more sense once the game begins so go ahead and choose!</p>
          </div>
          <div slot="footer"></div>
        </modal>
      </div>
    </template>
    <div class="results__wrapper col--12">
      <transition-group name="fade-results" class="row" tag="div">
        <div v-for="(item, index) in forecasts" v-bind:index="index" v-bind:key="item" class="fade-results-item results__card col--xxxl-4 col--lg-5 col--11">
          <template v-if="isForecastsFull">
            <router-link v-on:click.native="selectPlayer(index)" to="/game" class="button button-sunrise forecast__button-player">Select</router-link>
          </template>
          <div class="card__info" v-bind:class="{ day: item.IsDayTime, night: !item.IsDayTime }">
            <button class="button button-close" btn v-on:click="removeForecast(index)"><font-awesome-icon :icon="['fas', 'times']" size="lg" /></button>
            <h2>{{ item.City.Name }}, {{item.City.Area}}</h2>
            <h3 class="h1">{{ item.Temperature.Imperial.Value }}<sup>&deg;{{ item.Temperature.Imperial.Unit }}</sup></h3>
            <img v-bind:src="'https://www.accuweather.com/images/weathericons/'+ item.WeatherIcon +'.svg'">
            <h3>{{ item.WeatherText }}</h3>
          </div>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Modal from '@/components/Modal'

export default {
  data () {
    return {
      isModalVisible: false
    }
  },
  components: {
    Modal
  },
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
    }),
    showModal: function () {
      this.isModalVisible = true
    },
    closeModal: function () {
      this.isModalVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
