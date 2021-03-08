<template>
  <button :class="classes" :disabled="disabled">
    <hw-icon v-if="icon && !loading" :icon="icon" class="icon"></hw-icon>
    <hw-icon v-if="loading" icon="loading" class="icon loading"></hw-icon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'HwButton',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator (type) {
        if (!['primary', 'success', 'warning', 'info', 'danger'].includes(type)) {
          throw new Error('type 只能是 primary success warning info danger 中的一种')
        }
        return true
      }
    },
    icon: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'left',
      validator (position) {
        if (!['left', 'right'].includes(position)) {
          throw new Error('position 只能是 left 或者 right')
        }
        return true
      }
    }
  },
  setup (props) {
    const classes = computed(() => [
      'hw-button',
      `hw-button-${props.type}`,
      props.loading ? 'is-loading' : '',
      props.disabled ? 'is-disabled' : '',
      (props.icon || props.loading) ? `hw-button-${props.position}` : ''
    ])

    return {
      classes
    }
  }
}
</script>
