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
  </div>
</template>

<script>
import Button from './examples/button'
import Icon from './examples/icon'
import ButtonGroup from './examples/button-group'

export default {
  name: 'App',
  components: {
    Button,
    Icon,
    ButtonGroup
  }
}
</script>

<style lang="scss">
@import url('//at.alicdn.com/t/font_2404683_su7oxwu7sy.css');
</style>
