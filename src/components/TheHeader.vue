<template lang="html">
  <header class="header row">
    <div class="header__wrap col-12">
      <div class="logo">CC</div>
      <nav>
        <ul>
          <router-link to="/" v-slot="{ href, route, navigate, isActive, isExactActive }">
            <li :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']">
              <a :href="href" @click="navigate">Home</a>
            </li>
          </router-link>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
</style>
