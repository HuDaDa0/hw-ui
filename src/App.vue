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

    <br>
    <br>
    <Message></Message>
  </div>
</template>

<script>
import Button from './examples/button'
import Icon from './examples/icon'
import ButtonGroup from './examples/button-group'
import Carousel from './examples/carousel'
import Message from './examples/message'

export default {
  name: 'App',
  components: {
    Button,
    Icon,
    ButtonGroup,
    Carousel,
    Message
  }
}
</script>

<style lang="scss">
@import url('//at.alicdn.com/t/font_2404683_su7oxwu7sy.css');
</style>
