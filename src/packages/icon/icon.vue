<template>
  <i :class="['hw-icon', 'iconfont', `icon-${icon}`]"></i>
</template>

<script>
export default {
  name: 'HwIcon',
  props: {
    icon: String
  }
}
</script>
