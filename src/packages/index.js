import Button from './button/index.js'
import ButtonGroup from './button-group/index.js'
import Icon from './icon/index.js'
import Carousel from './carousel/index.js'
import CarouselItem from './carousel-item/index.js'
import Message from './message/index.js'
import Tree from './tree/index.js'

const plugins = [
  Button,
  ButtonGroup,
  Icon,
  Carousel,
  CarouselItem,
  Tree
]

const install = (app) => {
  plugins.forEach(plugin => app.use(plugin))
}

export default {
  install
}

export {
  Button,
  ButtonGroup,
  Icon,
  Carousel,
  CarouselItem,
  Message,
  Tree
}
