import Button from './button.vue'
import '../../style/button.scss'

Button.install = (app) => {
  app.component(Button.name, Button)
}

export default Button
