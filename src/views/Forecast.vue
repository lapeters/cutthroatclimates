<template lang="html">
  <div class="forecast">
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
