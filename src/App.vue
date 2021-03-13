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

    <hr />
    <br />
    <br />
    <!-- <button @click="deleteDOM">delete DOM</button> -->
    <button @click="show = !show">transition</button>
    <div ref="box">
      <transition name="test">
        <div v-if="show" class="test-box" key="1">hahahha</div>
      </transition>
    </div>

    <br />
    <br />

  <transition name="slide-fade">
    <p v-if="show">hello</p>
  </transition>

  <br>
  <br>
  <Tree></Tree>
  </div>
</template>

<script>
import Button from './examples/button'
import Icon from './examples/icon'
import ButtonGroup from './examples/button-group'
import Carousel from './examples/carousel'
import Message from './examples/message'
import Tree from './examples/tree'

export default {
  name: 'App',
  components: {
    Button,
    Icon,
    ButtonGroup,
    Carousel,
    Message,
    Tree
  },
  data () {
    return {
      show: true
    }
  },
  methods: {
    deleteDOM () {
      this.$refs.box.firstChild && this.$refs.box.removeChild(this.$refs.box.firstChild)
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('//at.alicdn.com/t/font_2404683_su7oxwu7sy.css');

.test-box {
  width: 180px;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  padding: 15px 15px 15px 20px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  margin-top: 20px;
}
.test-enter-active, .test-leave-active {
  transition: all 1s ease;
}
.test-enter-from, .test-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
.test-enter-to, .test-leave {
  opacity: 1;
}

body {
  margin: 30px;
}

.slide-fade-enter-active {
  transition: all .3s ease-out;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
