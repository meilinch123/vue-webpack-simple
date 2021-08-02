import CustomButton from './packages/button/index.js';
import CustomInput from './packages/input/index.js';

const components = [
  CustomButton,
  CustomInput,
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  CustomButton,
  CustomInput,
}