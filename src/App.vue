<template>
  <div>
    <br />
    <br />
    <Button></Button>

    <br />
    <br />

    <Icon></Icon>

    <br />
    <br />
    <ButtonGroup></ButtonGroup>

    <br>
    <br>
    <Carousel></Carousel>
  </div>
</template>

<script>
import Button from './examples/button'
import Icon from './examples/icon'
import ButtonGroup from './examples/button-group'
import Carousel from './examples/carousel'

export default {
  name: 'App',
  components: {
    Button,
    Icon,
    ButtonGroup,
    Carousel
  }
}
</script>

<style lang="scss">
@import url('//at.alicdn.com/t/font_2404683_su7oxwu7sy.css');
</style>
