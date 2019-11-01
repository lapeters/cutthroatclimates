<template lang="html">
  <div class="game">
    <GamePlayers />
    <GameControls />
    <GamePlayersRecord />
  </div>
</template>

<script>
import GamePlayers from '@/components/GamePlayers'
import GameControls from '@/components/GameControls'
import GamePlayersRecord from '@/components/GamePlayersRecord'

export default {
  components: {
    GamePlayers,
    GameControls,
    GamePlayersRecord
  },
  props: {
    res: Array,
    i: Number
  }
}
</script>

<style lang="scss" scoped>
</style>
