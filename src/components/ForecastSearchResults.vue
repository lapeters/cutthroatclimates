<template lang="html">
  <div class="forecast__results">
    <div v-for="(item, index) in forecasts" v-bind:index="index" v-bind:key="index" class="forecast__results-card">
      <div class="forecast__info" v-bind:class="{ day: item.IsDayTime, night: !item.IsDayTime }">
        <h2>{{ item.City.Name }}, {{item.City.Area}}</h2>
        <h3 class="h1">{{ item.Temperature.Imperial.Value }}<sup>&deg;{{ item.Temperature.Imperial.Unit }}</sup></h3>
        <img v-bind:src="'https://www.accuweather.com/images/weathericons/'+ item.WeatherIcon +'.svg'">
        <h3 class="h2">{{ item.WeatherText }}</h3>
      </div>
      <template v-if="isForecastsFull">
        <router-link v-on:click.native="selectPlayer(index)" to="/game" class="button button-player">Select</router-link>
      </template>
      <button class="forecast__button-remove" v-on:click="removeForecast(index)">X</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    forecasts: function () {
      return this.$store.getters.FORECASTS
    },
    isForecastsFull: function () {
      return this.$store.getters.IS_FORECASTS_FULL
    }
  },
  methods: {
    removeForecast: function (payload) {
      this.$store.dispatch('REMOVE_FORECAST', payload)
    },
    selectPlayer: function (payload) {
      this.$store.dispatch('SELECT_FORECAST', payload)
    }
  }
}
</script>

<style lang="scss" scoped>
  .forecast__results {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width:100%;
    .forecast__results-game {
      flex: 0 0 100%;
      max-width: 100%;
      padding:0 15px;
    }
    .forecast__results-card {
      flex: 0 0 50%;
      max-width: 50%;
      padding:0 15px;
      position: relative;
      .forecast__info {
        text-align: center;
        padding:2rem 1.5rem;
        color: #fff;
        box-shadow:0 0 15px rgba(0,0,0,0.3);
        &.day {
          @include theme-gradients($day: true);
        }
        &.night {
          @include theme-gradients($day: false);
        }
        img {
          width: auto;
          max-width:20%;
          display:block;
          margin:0 auto;
        }
        sup, sub {
          font-size: 50%;
        }
        sup {
          top: -0.7em;
        }
      }
    }
    .forecast__button-remove {
      position:absolute;
      right:15px;
      top:0;
      border:none;
      background:transparent;
      color:#fff;
      padding:15px;
      cursor: pointer;
    }
  }
</style>
