import HwButton from '../packages/button/index.js'

export default {
  title: '组件/Button Component',
  component: HwButton
}

export const button = () => ({
  components: { HwButton },
  template: `
    <div>
      <hw-button type="primary">主要的</hw-button>
      <hw-button type="success">成功的</hw-button>
      <hw-button type="warning">警告的</hw-button>
      <hw-button type="danger">危险的</hw-button>
      <hw-button type="info">信息的</hw-button>
    </div>
  `
})

// const Template = (args) => ({
//   components: { Button },
//   setup () {
//     return { args }
//   },
//   template: '<Button v-bind="args">按钮</Button>'
// })

// export const Warning = () => ({
//   components: { Button },
//   template: '<Button type="warning">警告的</Button>'
// })

// export const Success = () => ({
//   components: { Button },
//   template: '<Button type="success">成功的</Button>'
// })

// export const Danger = () => ({
//   components: { Button },
//   template: '<Button type="danger">危险的</Button>'
// })

// export const Info = () => ({
//   components: { Button },
//   template: '<Button type="info">信息的</Button>'
// })

// export const Info = Template.bind({})
// Info.args = {
//   type: 'info'
// }
