import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
// import Parse from 'parse'
import Parse from './Parse'
import geb from 'vue-geb'
Vue.use(geb)
import store from './store'
Vue.config.productionTip = false
// Vue.prototype.Parse = Parse
/* eslint-disable */
new Vue({
  store,
  Parse,
  render: h => h(App)
}).$mount('#app')
