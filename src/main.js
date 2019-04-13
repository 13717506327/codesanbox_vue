import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;// dd
console.log("123")//
new Vue({
  render: h => h(App)
}).$mount("#app");
