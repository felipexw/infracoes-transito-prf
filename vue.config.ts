const webpack = require("webpack");
const path = require("path");

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": path.resolve(__dirname, "src/"),
        components: path.resolve(__dirname, "src/components"),
        domains: path.resolve(__dirname, "src/domains"),
        store: path.resolve(__dirname, "src/store"),
        router: path.resolve(__dirname, "src/router")
      }
    }
  }
};
