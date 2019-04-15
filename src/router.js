import Vue from "vue";
import Router from "vue-router";

// 引入路由页面
import Home from "./views/Home";
import Table from "./views/Table";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/table",
      name: "table",
      component: Table
    }
  ]
});
