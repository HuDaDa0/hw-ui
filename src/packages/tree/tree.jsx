import { getCurrentInstance, provide, watch, reactive } from 'vue'
import TreeNode from './tree-node.jsx'
import { flattenTree } from './utils.js'

export default {
  name: 'HwTree',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    load: {
      type: Function
    },
    draggable: {
      type: Boolean,
      default: false
    }
  },
  components: {
    [TreeNode.name]: TreeNode
  },
  setup (props, context) {
    const renderNode = (data) => {
      if (data && data.length === 0) {
        return <div>暂无数据</div>
      }

      return data.map(item => <hw-tree-node data={item}></hw-tree-node>)
    }

    const state = reactive({
      dropPosition: '', // 拖拽的位置  0 放到里面作为 儿子  1 哥哥  -1 弟弟
      dragNodeData: null, // 拖的是谁数据
      showDropIndicator: false, // 推拽标尺
      draggingNode: null // 拖拽的节点
    })

    let flatMap = flattenTree(props.data)

    watch(props.data, () => {
      flatMap = flattenTree(props.data)
    })

    const methods = {
      getCheckNodes () {
        return Object.values(flatMap).filter(item => item.node.checked)
      },
      updateTreeDown (node, checked) {
        if (node.children) {
          node.children.forEach(child => {
            child.checked = checked
            methods.updateTreeDown(child, checked)
          })
        }
      },
      updateTreeUp (node, checked) {
        // 获取当前元素的 父节点
        const parentNode = flatMap[node.key].parent
        if (!parentNode) return

        if (checked) {
          // 选中，
          parentNode.checked = parentNode.children.every(child => child.checked)
        } else {
          // 没有选中，那么 父节点 也是没有选中
          parentNode.checked = checked
        }

        methods.updateTreeUp(parentNode, checked)
      },
      dragStart (e, nodeInstance, data) {
        state.dragNodeData = data // 拖拽的数据
        state.draggingNode = nodeInstance // 拖拽的实例节点
      },
      dragOver (e, nodeInstance, data) {
        if (state.dragNodeData.key === data.key) {
          // 拖动节点在自己身上，不必要做处理
          return
        }
        if (state.draggingNode.ctx.$el.contains(e.target)) {
          // 不能将节点拖动到儿子身上
          return
        }
        const overEle = nodeInstance.ctx.$el
        // 获取目标节点第一个孩子的label节点
        const targetPosition = overEle.firstElementChild.getBoundingClientRect()
        // 获取树的位置
        const treePosition = instance.ctx.$el.getBoundingClientRect()

        const distance = e.clientY - targetPosition.top //  鼠标相对于 label 的位置
        if (distance < targetPosition.height * 0.2) {
          state.dropPosition = 1
        } else if (distance > targetPosition.height * 0.8) {
          state.dropPosition = -1
        } else {
          state.dropPosition = 0
        }

        const iconPosition = overEle.querySelector('.hw-icon').getBoundingClientRect()
        let indicatorTop = -9999
        if (state.dropPosition === 1) {
          indicatorTop = iconPosition.top - treePosition.top
        } else if (state.dropPosition === -1) {
          indicatorTop = iconPosition.bottom - treePosition.top
        }

        state.showDropIndicator = state.dropPosition === 1 || state.dropPosition === -1

        const indicator = instance.ctx.$refs.indicator
        indicator.style.top = indicatorTop + 'px'
        indicator.style.left = iconPosition.right - treePosition.left + 'px'
      },
      dragEnd (e, nodeInstance, data) {
        state.dropPosition = ''
        state.dragNodeData = ''
        state.showDropIndicator = false
        state.draggingNode = null
      }
    }
    provide('TREE_PROVIDER', {
      treeMethods: methods,
      slot: context.slots.default,
      load: props.load,
      draggable: props.draggable
    })

    // 将方法绑定要上下文中去，这样从组件外面也可以调用方法
    const instance = getCurrentInstance()
    instance.ctx.getCheckNodes = methods.getCheckNodes

    return () => { // render 函数
      return (
        <div className="hw-tree">
          { renderNode(props.data) }

          {/* 拉动时候 出现的一条位置线 */}
          <div className="hw-tree-indicator" ref="indicator" vShow={state.showDropIndicator}></div>
        </div>
      )
    }
  }
}
