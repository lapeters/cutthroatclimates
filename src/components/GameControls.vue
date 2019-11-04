<template lang="html">
  <div class="game__controls">
    <button type="button" v-on:click="attack(false)">Attack</button>
    <button type="button" v-on:click="attack(true)">Special Attack</button>
    <button type="button" v-on:click="heal()">Heal</button>
    <button type="button" v-on:click="reset()">Reset</button>
  </div>
</template>

<script>
export default {
  methods: {
    attack: function (special) {
      var payloadCPU = {
        special: special,
        name: 'cpu'
      }
      var payloadP1 = {
        special: special,
        name: 'player'
      }
      this.$store.dispatch('ATTACK', payloadCPU)
      this.$store.dispatch('ATTACK', payloadP1)
    },
    heal: function () {
      this.$store.dispatch('HEAL', 'player')
      this.$store.dispatch('HEAL', 'cpu')
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
