import Vue from 'vue'
import three from 'three'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  three,
  router,
  render: h => h(App)
}).$mount('#app')
