<template>
  <div>
    <hw-button type="success" @click="show">点击一下了</hw-button>
  </div>
</template>

<script>
import { ref } from 'vue'
import Message from '../packages/message'

export default {
  setup () {
    const num = ref(1)
    const show = () => {
      num.value++
      Message.error({ message: '哈哈哈' + num.value })
    }

    return {
      show,
      num
    }
  }

}
</script>
