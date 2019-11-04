<template lang="html">
  <div id="app">
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
*, ::after, ::before {
    box-sizing: border-box;
}
:root {
  font-size: 18px;
}
html {
  min-height:100%;
  overflow:auto;
  font-weight:300;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}
body {
  margin:0;
  background: rgb(239,248,255);
  background: linear-gradient(153deg, rgba(239,248,255,1) 0%, rgba(239,250,254,1) 50%, rgba(244,254,255,1) 100%);
  background-repeat: no-repeat;
  font-family: $primary;
  font-size: 1rem;

  #app {
    position: relative;
    height:100%;
    width:100%;
    padding:55px 15px 0;
    display: flex;
    flex-direction: column;
  }
}
h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.01rem;
  color: $drk_blue;
  margin-top:0;
  .forecast__info & {
    font-weight:400;
    margin:1rem 0;
    color: $white;
  }
  & strong {
    font-weight: 900;
  }
}
h1, .h1 {
  font-size: 3rem;
  margin: 0 0 0.5rem;
  .forecast__info & {
    font-size:5rem;
  }
}
h2, .h2 {
  font-size: 1.5rem;
  text-transform: none;
  .forecast__info & {
    text-transform: uppercase;
  }
}
h3, .h3 {
  font-size: 1.25rem;
}
a {
  text-decoration: none;
}
input, button {
  border: 1px solid rgba(0,0,0,0.1);
  padding: 1rem;
  font-weight:300;
  color: $drk_blue;
}
button {
  cursor: pointer;
  transition: all .4s;
  &:disabled {
    opacity:0.5;
  }
}
</style>
