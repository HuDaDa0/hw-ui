import HwTree from '../packages/tree/index.js'
import { reactive, toRefs } from 'vue'

export default {
  title: '组件/tree Component',
  component: HwTree
}

export const tree = () => ({
  components: { HwTree },
  template: `
    <hw-tree :data="treeData">
      <template v-slot="{ name, id }">
        {{ name }} ({{ id }})
      </template>
    </hw-tree>
  `,
  setup () {
    const state = reactive({
      treeData: [
        {
          id: '1',
          name: '菜单1',
          children: [
            { id: '1-1', name: '菜单1-1', children: [{ id: '1-1-1', name: '菜单1-1-1' }] }
          ]
        },
        {
          id: '2',
          name: '菜单2',
          children: [
            { id: '2-1', name: '菜单2-1', children: [{ id: '2-1-1', name: '菜单2-1-1' }] },
            { id: '2-2', name: '菜单2-2', children: [{ id: '2-2-1', name: '菜单2-2-1' }] }
          ]
        }
      ]
    })

    return {
      ...toRefs(state)
    }
  }
})
