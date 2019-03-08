import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./registerServiceWorker";

import Vuetify from "vuetify";

Vue.use(Vuetify);
Vue.config.productionTip = false;

import "vuetify/dist/vuetify.min.css";

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
