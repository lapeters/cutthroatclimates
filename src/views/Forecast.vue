<template lang="html">
  <transition name="fade" appear>
    <main class="forecast">
      <ForecastSearch />
    </main>
  </transition>
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
