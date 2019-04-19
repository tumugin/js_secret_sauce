import approuter from './router/router'
import Vue from 'vue'
import App from './app.vue'
import store from './store/main-store'

new Vue({
  el: '#root',
  router: approuter,
  store: store,
  components: { App },
  template: '<App/>'
})
