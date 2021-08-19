import Vue from 'vue'
import App from './App.vue'

// import { CustomButton, CustomInput } from './index.js'
// import SimpleCustomDemo from 'simple-custom-demo'
// Vue.use(SimpleCustomDemo)
import { CustomButton, CustomInput } from 'simple-custom-demo'
Vue.use(CustomButton).use(CustomInput)

new Vue({
  el: '#app',
  render: h => h(App)
})
