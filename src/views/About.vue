<template lang="html">
  <main class="about">
    <div class="about__wrapper row">
      <div class="about__content col--10">
        <h1>About</h1>
        <h2>Who Built This?</h2>
        <p>Hello, my name is Lindsay and I am a front end web developer based in Southern California. You can find my personal site <a href="https://www.lapeters.info/" target="_blank">here</a> and feel free to also visit my <a href="https://www.linkedin.com/in/lindsay-peters-dev/" target="_blank">LinkedIn</a> and <a href="https://github.com/lapeters" target="_blank">Github</a>.</p>

        <h2>Description</h2>
        <p>Cutthroat Climates is a weather app and fighting game built in one. A user first searches for two cities via name or zip code
          and is able to view the current weather conditions from the region.</p>
        <p>After two are selected the user may select which climate they would like to play as and faces off against the other forecast using a series of
          attacks, special attacks, and healing moves. All while keeping in mind that their opponent makes the same move afterwards, albeit with varrying strength.</p>
        <p>Each player has a hundred points of health and wins if they reduce their opponent to zero first.</p>

        <h2>Development</h2>
        <p>The app is built using the <strong>Vue</strong> JavaScript framework along with the <strong>Vuex</strong> and <strong>Vue Router</strong> libraries for state management and router configuration. Data on cities and weather conditions is gathered using the
        <strong>Accuweather API</strong> via <strong>Axios</strong> HTTP client.</p>
        <p>Cutthroat Climates uses <strong>Webpack</strong> bundling and Webpack dev server for local hosting. Styling for the site was done with the <strong>Sass</strong> preprocesser to extend CSS functionalities.
        For example, the site is structured with a class-based grid system built using <strong>Flexbox</strong> through Sass variables, mixins, and functions.</p>
        <p>The site is responsive and compatible across browsers and devices. For a closer look at the code please check out the <a href="https://github.com/lapeters/cutthroatclimates" target="_blank">Github repository</a>.</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
