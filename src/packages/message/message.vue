<template>
  <div :class="classes">{{ message }}</div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    type: {
      type: String,
      default: 'success'
    },
    message: {
      type: String
    }
  },
  setup (props) {
    const classes = computed(() => [
      'hw-message',
      `hw-message-${props.type}`
    ])

    return {
      classes
    }
  }
}
</script>

<style lang="scss">
@import url('../../style/message.scss');
</style>
