<template lang="html">
  <div id="app" class="container-fluid">
    <TheHeader />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script>
import 'normalize.css'
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
body {
  font-size:1rem;
}
</style>
