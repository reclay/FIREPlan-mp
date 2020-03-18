import Vue from "vue";
import Router from "vue-router";
import { sync } from "vuex-router-sync";
import App from "../App.vue";
import store from "../store";
// import indexComp from '../home/index.vue'
// import indexComp from '../home/indexKb.vue'
// import indexComp from "../home/indexMint.vue";
import indexComp from '../home/indexVant.vue'

// import KboneUI from 'kbone-ui'
// import 'kbone-ui/lib/weui/weui.css'

// import MintUI from "mint-ui";
// import "mint-ui/lib/style.css";

// import Vant from 'vant';
// import 'vant/lib/index.css';

import Cell from 'vant/lib/cell';
import Form from 'vant/lib/form';
import Field from 'vant/lib/field';
import RadioGroup from 'vant/lib/radio-group';
import Radio from 'vant/lib/radio';

import 'vant/lib/cell/style';
import 'vant/lib/form/style';
import 'vant/lib/field/style';
import 'vant/lib/radio-group/style';
import 'vant/lib/radio/style';

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
  // Vue.use(MintUI);
  // Vue.use(Vant);
  Vue.use(Cell);
  Vue.use(Form);
  Vue.use(Field);
  Vue.use(RadioGroup);
  Vue.use(Radio);

  sync(store, router);

  return new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
  });
}
