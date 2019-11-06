<template lang="html">
  <div class="game__records row">
    <div v-if="isPlayerDeafeated.length > 0" class="col-12">
      <h2>Game Over</h2>
      <p>{{ this.$store.getters.IS_PLAYER_DEFEATED[0].name }} has lost</p>
    </div>
    <div v-for="(log, index) in gameLog" v-bind:index="index" v-bind:key="index" class="game__log col-12">
      <div class="w-50" v-bind:class="{ log__attack: log.action === 'attacks', log__heal: log.action === 'heals' }">
        <p><span class="log__player">{{ log.player }}</span> {{ log.action }} for <strong>{{ log.hit }} points</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    isPlayerDeafeated: function () {
      return this.$store.getters.IS_PLAYER_DEFEATED
    },
    ...mapState(['gameLog'])
  }
}
</script>

<style lang="scss" scoped>
</style>
