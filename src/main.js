import Vue from 'vue'
import App from './App.vue'

// import SimpleCustomDemo from './index.js'
import SimpleCustomDemo from 'simple-custom-demo'
Vue.use(SimpleCustomDemo)

new Vue({
  el: '#app',
  render: h => h(App)
})
