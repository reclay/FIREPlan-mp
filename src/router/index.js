import Vue from 'vue'
import Router from 'vue-router'
import indexComp from '../home/index.vue'

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
