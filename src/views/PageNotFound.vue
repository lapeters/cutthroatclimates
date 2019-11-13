<template lang="html">
  <transition name="fade" appear>
    <main class="page-404">
      <div class="page-404__wrapper row">
        <div class="page-404__content col--10">
          <h1>404</h1>
          <p class="lead">Unfortunately, this page cannot be found or has been moved. Lets return <router-link to="/">Home</router-link> and try again!</p>
        </div>
      </div>
    </main>
  </transition>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
</style>
