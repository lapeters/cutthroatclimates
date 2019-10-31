<template lang="html">
  <div class="forecast__results">
    <div v-for="(res, index) in results" v-bind:index="index" v-bind:key="index" class="forecast__results-card">
      <div class="forecast__info" v-bind:class="{ day: res.IsDayTime, night: !res.IsDayTime }">
        <h2>{{ res.City.Name }}, {{res.City.Area}}</h2>
        <h3 class="h1">{{ res.Temperature.Imperial.Value }}<sup>&deg;{{ res.Temperature.Imperial.Unit }}</sup></h3>
        <img v-bind:src="'https://www.accuweather.com/images/weathericons/'+ res.WeatherIcon +'.svg'">
        <h3 class="h2">{{ res.WeatherText }}</h3>
      </div>
      <button class="forecast__button-remove" v-on:click="results.splice(index, 1)">X</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    results: Array
  }
}
</script>

<style lang="scss" scoped>
  .forecast__results {
    padding:3rem 0 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width:100%;
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
