module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/scss/mixins.scss";`
      }
    }
  }
}
