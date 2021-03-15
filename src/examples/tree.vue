<template>
  <hw-tree :data="treeData" ref="tree">
    <template v-slot="{ name, id }">
      {{ name }} ({{ id }})
    </template>
  </hw-tree>

  <br>
  <button @click="getCheckNodes">点击获取内容</button>
</template>

<script>
import { reactive, toRefs, ref } from 'vue'

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

    const tree = ref(null)

    function getCheckNodes () {
      console.log(tree.value.getCheckNodes())
      console.log(state)
    }

    return {
      ...toRefs(state),
      tree,
      getCheckNodes
    }
  }
}
</script>
