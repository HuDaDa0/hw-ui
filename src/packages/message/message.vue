<template>
  <transition name="hw-message"  @after-leave="handleAfterLeave">
    <div v-show="visible" :class="classes">{{ message }}</div>
  </transition>
</template>

<script>
import { computed, ref, onMounted, getCurrentInstance } from 'vue'
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

    const visible = ref(true)

    const handleAfterLeave = () => {
      const app = getCurrentInstance()
      const ele = app.ctx.$el
      ele.parentNode.removeChild(ele)
      // this.$destroy(true)
      // this.$el.parentNode.removeChild(this.$el)
    }
    onMounted(() => {
      const app = getCurrentInstance()
      console.log(app)
    })

    return {
      classes,
      visible,
      handleAfterLeave
    }
  }
}
</script>

<style lang="scss">
@import url('../../style/message.scss');
</style>
