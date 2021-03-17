import Button from '../packages/button/index.js'

export default {
  title: '组件/Button Component',
  component: Button
}

export const button = () => ({
  components: { Button },
  template: `
    <div>
      <Button type="primary">主要的</Button>
      <Button type="success">成功的</Button>
      <Button type="warning">警告的</Button>
      <Button type="danger">危险的</Button>
      <Button type="info">信息的</Button>
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
