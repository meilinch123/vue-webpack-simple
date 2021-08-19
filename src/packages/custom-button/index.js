import CustomButton from './CustomButton'

CustomButton.install = function(Vue) {
  Vue.component(CustomButton.name, CustomButton)
}

export {
  CustomButton
}

export default CustomButton