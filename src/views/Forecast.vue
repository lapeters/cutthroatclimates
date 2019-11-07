<template lang="html">
  <main class="forecast">
    <ForecastSearch />
  </main>
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
</style>
