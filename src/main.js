import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
// import KboneUI from 'kbone-ui'
// import 'kbone-ui/lib/weui/weui.css'
// Vue.use(KboneUI)

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

// import { XInput } from 'vux'
// Vue.component('x-input', XInput)

// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

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

Vue.use(Cell);
Vue.use(Form);
Vue.use(Field);
Vue.use(RadioGroup);
Vue.use(Radio);

Vue.config.productionTip = false

sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
