<template lang="html">
  <main class="game">
    <template v-if="isForecastsFull">
      <GamePlayers />
      <GameControls />
      <GamePlayersRecord />
    </template>
    <template v-else>
      <Game404 />
    </template>
  </main>
</template>

<script>
import GamePlayers from '@/components/GamePlayers'
import GameControls from '@/components/GameControls'
import GamePlayersRecord from '@/components/GamePlayersRecord'
import Game404 from '@/components/Game404'

export default {
  components: {
    GamePlayers,
    GameControls,
    GamePlayersRecord,
    Game404
  },
  computed: {
    isForecastsFull: function () {
      return this.$store.getters.IS_FORECASTS_FULL
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
