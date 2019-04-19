import Vue from 'vue'
import Router from 'vue-router'
import MainView from '../components/main-view.vue'

Vue.use(Router)
export default new Router({
  routes:[
    {
      path:'/',
      name: 'Main',
      component: MainView
    }
  ]
})
