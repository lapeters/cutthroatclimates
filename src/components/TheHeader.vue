<template lang="html">
  <header class="header row" v-on:scroll.passive="handleScroll" v-bind:class="{ sticky: this.scrolled }">
    <div class="header__wrap col--12">
      <div class="logo"><img src="../assets/logo.png"> <strong>Cutthroat Climates</strong></div>
      <nav>
        <ul>
          <router-link to="/" v-slot="{ href, route, navigate, isActive, isExactActive }">
            <li :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']">
              <a :href="href" @click="navigate">Home</a>
            </li>
          </router-link>
          <router-link to="/about" v-slot="{ href, route, navigate, isActive, isExactActive }">
            <li :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']">
              <a :href="href" @click="navigate">About</a>
            </li>
          </router-link>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      scrolled: false
    }
  },
  methods: {
    handleScroll: function () {
      let header = document.querySelector('header.header')
      if (window.scrollY > 50 && !header.classList.contains('sticky')) {
        this.scrolled = true
      } else if (window.scrollY < 50) {
        this.scrolled = false
      }
    }
  },
  created: function () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
</style>
