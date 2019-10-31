module.exports = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      scss: {
        prependData: `@import "~@/scss/index.scss";`
      }
    }
  }
}
