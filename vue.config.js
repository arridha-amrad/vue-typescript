module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/_shared.scss";`,
      },
    },
  },
};
