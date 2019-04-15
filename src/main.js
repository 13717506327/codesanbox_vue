import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import "vue-easytable/libs/themes-base/index.css";
import { VTable } from "vue-easytable";

// 注册到全局
Vue.component(VTable.name, VTable);

console.log("123"); //
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
