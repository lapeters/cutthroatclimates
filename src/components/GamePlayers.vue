<template lang="html">
  <div class="game__players">
    <div v-for="(item, index) in forecasts" v-bind:index="index" v-bind:key="index" class="game__player" v-bind:class="{ 'game__player-1': item.Player, 'game__player-CPU': !item.Player }">
      <h2>{{ item.WeatherText }}</h2>
      <img v-bind:src="'https://www.accuweather.com/images/weathericons/'+ item.WeatherIcon +'.svg'">
      <div class="game__health" v-bind:style="{ width: getPlayerByName(item).health + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    forecasts: function () {
      return this.$store.getters.FORECASTS
    }
  },
  methods: {
    getPlayerByName: function (item) {
      var name = (item.Player ? 'player' : 'cpu')
      return this.$store.getters.GET_PLAYER_BY_NAME(name)
    }
  }
}
</script>

<style lang="scss" scoped>
  .game__players {
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .game__player {
      flex: 0 0 50%;
      max-width:50%;
      text-align: center;
      padding:0 15px;
      &.game__player-1 {
        order:1;
      }
      &.game__player-CPU {
        order:2;
      }
      h2 {
        text-transform: uppercase;
      }
      .game__health {
        width: 100%;
        height:40px;
        background: red;
      }
    }
  }
</style>
