<template>
  <div class="hw-button-group">
    <slot></slot>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted } from 'vue'

export default {
  name: 'HwButtonGroup',
  setup () {
    onMounted(() => {
      // 获取当前实例对象 this
      const context = getCurrentInstance()
      const ele = context.ctx.$el
      const children = ele.children

      for (let i = 0; i < children.length; i++) {
        console.assert(children[i].tagName === 'BUTTON', 'hw-button-group组件里面只能包含button组件')
        if (children[i].tagName !== 'BUTTON') {
          break
        }
      }
    })
  }
}
</script>
