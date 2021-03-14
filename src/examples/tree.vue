<template>
  <hw-tree :data="treeData"></hw-tree>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
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
}
</script>
