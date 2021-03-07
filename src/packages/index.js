import Button from './button/index.js'
import ButtonGroup from './button-group/index.js'
import Icon from './icon/index.js'

const plugins = [
  Button,
  ButtonGroup,
  Icon
]

const install = (app) => {
  plugins.forEach(plugin => app.use(plugin))
}

export default {
  install
}
