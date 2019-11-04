<template lang="html">
  <div class="game__controls">
    <button type="button" v-on:click="attack(false)">Attack</button>
    <button type="button" v-on:click="attack(true)">Special Attack</button>
    <button type="button" v-on:click="heal()">Heal</button>
    <button type="button" v-on:click="reset()">Reset</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['players'])
  },
  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'ATTACK') {
        var player = this.getPlayerByName(mutation.payload.name)
        if (player.health === 0) {
          console.log(player.name + ' lost')
        }
      }
    })
  },
  methods: {
    getPlayerByName: function (name) {
      return this.$store.getters.GET_PLAYER_BY_NAME(name)
    },
    attack: function (special) {
      var payload
      for (var i = 0, l = this.players.length; i < l; i++) {
        payload = {
          special: special,
          name: this.players[i].name
        }
        this.$store.dispatch('ATTACK', payload)
      }
    },
    heal: function () {
      for (var i = 0, l = this.players.length; i < l; i++) {
        this.$store.dispatch('HEAL', this.players[i].name)
      }
    },
    reset: function () {
      this.$store.dispatch('RESET')
    }
  }
}
</script>

<style lang="scss" scoped>
  .game__controls {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      margin:0 15px;
    }
  }
</style>
