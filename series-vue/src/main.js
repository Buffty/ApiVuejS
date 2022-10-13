import Vue from 'vue'
import './plugins/axios'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
