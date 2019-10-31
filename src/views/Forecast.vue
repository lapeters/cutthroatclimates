<template lang="html">
  <div class="forecast">
    <h1>Cutthroat <strong>Climates</strong></h1>
    <h2>Your run-of-the-mill weather app...with a touch of malice.</h2>
    <ForecastSearch />
  </div>
</template>

<script>
import ForecastSearch from '@/components/ForecastSearch'
export default {
  name: 'forecast',
  components: {
    ForecastSearch
  }
}
</script>

<style lang="css" scoped>
.forecast {
  text-align: center;
}
</style>
