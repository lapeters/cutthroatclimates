<template lang="html">
  <div class="game__controls row">
    <div class="game__button-group col--12">
      <button type="button" class="button button-game" v-on:click="attack(false)">Attack</button>
      <button type="button" class="button button-game" v-on:click="attack(true)">Special Attack</button>
      <button type="button" class="button button-game" v-on:click="heal()">Heal</button>
      <button type="button" class="button button-game" v-on:click="reset()">Reset</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['players']),
    isPlayerDeafeated: function () {
      return this.$store.getters.IS_PLAYER_DEFEATED
    }
  },
  methods: {
    getPlayerByName: function (name) {
      return this.$store.getters.GET_PLAYER_BY_NAME(name)
    },
    attack: function (special) {
      for (var i = 0, l = this.players.length; i < l; i++) {
        var payload = {
          special: special,
          name: this.players[i].name
        }
        if (this.isPlayerDeafeated.length === 0) {
          this.$store.dispatch('ATTACK', payload)
        }
      }
    },
    heal: function () {
      for (var i = 0, l = this.players.length; i < l; i++) {
        var name = this.players[i].name
        this.$store.dispatch('HEAL', name)
      }
    },
    reset: function () {
      this.$store.dispatch('RESET')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
