import Vue from 'vue'
import './plugins/vuetify'
import Vuetify from 'vuetify'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'md'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
