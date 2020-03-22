import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import create from "@/components/create";

Vue.prototype.$bus = new Vue();
Vue.prototype.$create = create;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
