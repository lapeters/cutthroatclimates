<template lang="html">
  <header class="header">
    <div class="header__wrap">
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
.header {
  min-height:55px;
  height: auto;
  /*position:fixed;*/
  padding-bottom:1rem;
  top:0;
  width:100%;
  left:0;
  display:flex;
  .header__wrap {
    width: 100%;
    padding:0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav {
      ul {
        padding:0;
        list-style-type: none;
        margin:0;
      }
    }
  }
}
</style>
