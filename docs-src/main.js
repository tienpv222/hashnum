import Vue from 'vue'
import App from './App'

Vue.config.keyCodes = {
  bs: 8,
}

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
})
