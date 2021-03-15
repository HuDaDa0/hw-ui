<template>
  <hw-tree :data="treeData" ref="tree" :load="loadFn">
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
          children: []
          // children: [
          //   { id: '1-1', name: '菜单1-1', children: [{ id: '1-1-1', name: '菜单1-1-1' }] }
          // ]
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

    function loadFn (data, cb) {
      if (data.id === '1') {
        setTimeout(() => {
          const getData = [{ id: '1-1', name: '菜单1-1', children: [] }]
          cb(getData)
        }, 1000)
      } else if (data.id === '1-1') {
        setTimeout(() => {
          const getData = [{ id: '1-1-1', name: '菜单1-1-1' }]
          cb(getData)
        }, 1000)
      }
    }

    return {
      ...toRefs(state),
      tree,
      getCheckNodes,
      loadFn
    }
  }
}
</script>
