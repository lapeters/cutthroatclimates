<template lang="html">
  <div class="forecast__search">
    <p>Please search for any two cities. Only two cities at a time, we dont want a war!</p>
    <form class="forecast__form">
      <input type="text" name="" value="" v-bind:placeholder="this.placeholder">
      <button class="button-search">Submit</button>
    </form>
  </div>
</template>

<script>

export default {
  data () {
    return {
      placeholder: 'Type in a city or zipcode...'
    }
  }
}
</script>

<style lang="css" scoped>
</style>
