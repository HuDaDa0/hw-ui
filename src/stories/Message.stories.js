import HwButton from '../packages/button/index.js'
import Message from '../packages/message/index.js'

export default {
  title: '组件/Message Component'
}

export const message = () => ({
  components: { HwButton },
  template: `
    <div>
      <hw-button type="success" @click="showMessage('success')">点我一下哦</hw-button>
      <br />
      <br />
      <hw-button type="warning" @click="showMessage('warning')">点我一下哦</hw-button>
      <br />
      <br />
      <hw-button type="info" @click="showMessage('info')">点我一下哦</hw-button>
      <br />
      <br />
      <hw-button type="danger" @click="showMessage('error')">点我一下哦</hw-button>
    </div>
  `,
  setup () {
    const showMessage = (type) => {
      Message[type]({ message: '哈哈哈' })
    }
    return {
      showMessage
    }
  }
})
