import Vue from 'vue'
import App from './App.vue'
import Fragment from 'vue-fragment'

import '../css/tailwind.css'

Vue.config.productionTip = false
Vue.use(Fragment.Plugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
