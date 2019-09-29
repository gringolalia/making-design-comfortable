import Vue from 'vue'
import App from './App'
// import 'vue-material-adapter/dist/vue-material-adapter.min.css'
// import VueMaterialAdapter from 'vue-material-adapter'
// Vue.use(VueMaterialAdapter)
import Router from 'vue-router'
Vue.use(Router)

Vue.config.productionTip = false

new Vue({
  el: 'body',
  components: { App }
})
