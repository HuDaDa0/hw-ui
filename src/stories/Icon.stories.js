import HwIcon from '../packages/icon/index.js'

export default {
  title: '组件/Icon Component',
  component: HwIcon
}

export const icon = () => ({
  components: { HwIcon },
  template: `
    <div>
      <hw-icon icon="edit"></hw-icon>
      <hw-icon icon="loading"></hw-icon>
      <hw-icon icon="arrow-right"></hw-icon>
    </div>
  `
})
