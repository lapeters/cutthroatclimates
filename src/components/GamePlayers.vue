<template lang="html">
  <div class="game__players row">
    <div v-for="(item, index) in forecasts" v-bind:index="index" v-bind:key="index" class="game__player col--6" v-bind:class="{ 'game__player-1': item.Player, 'game__player-CPU': !item.Player }">
      <h2>{{ item.WeatherText }}</h2>
      <img v-bind:src="'https://www.accuweather.com/images/weathericons/'+ item.WeatherIcon +'.svg'">
      <div class="game__health-wrapper col--12">
        <div class="game__health-sum"><h3>{{ getPlayerByName(item).health }}</h3></div>
        <div class="game__health-bar" v-bind:style="{ width: getPlayerByName(item).health + '%' }"></div>
      </div>
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
</style>
