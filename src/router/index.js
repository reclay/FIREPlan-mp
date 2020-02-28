import Vue from 'vue'
import Router from 'vue-router'
// import indexComp from '../home/index.vue'
// import indexComp from '../home/indexKb.vue'
// import indexComp from '../home/indexMint.vue'
import indexComp from '../home/indexVux.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/index',
    name: 'index',
    component: indexComp
  }, {
    path: '/',
    redirect: '/index'
  }],
})
