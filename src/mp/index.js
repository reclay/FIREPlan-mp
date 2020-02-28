import Vue from "vue";
import Router from "vue-router";
import { sync } from "vuex-router-sync";
import App from "../App.vue";
import store from "../store";
// import indexComp from '../home/index.vue'
// import indexComp from '../home/indexKb.vue'
import indexComp from "../home/indexMint.vue";

// import KboneUI from 'kbone-ui'
// import 'kbone-ui/lib/weui/weui.css'

import MintUI from "mint-ui";
import "mint-ui/lib/style.css";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/index",
      name: "index",
      component: indexComp
    },
    {
      path: "/",
      redirect: "/index"
    }
  ]
});

export default function createApp() {
  const container = document.createElement("div");
  container.id = "app";
  document.body.appendChild(container);

  Vue.config.productionTip = false;
  //   Vue.use(KboneUI);
  Vue.use(MintUI);

  sync(store, router);

  return new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
  });
}
