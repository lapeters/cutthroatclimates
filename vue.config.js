module.exports = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/index.scss";`
      }
    }
  }
}
