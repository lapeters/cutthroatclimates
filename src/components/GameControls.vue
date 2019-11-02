<template lang="html">
  <div class="game__controls">
    <button type="button" v-on:click="attack(false)">Attack</button>
    <button type="button">Special Attack</button>
    <button type="button">Reset</button>
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
