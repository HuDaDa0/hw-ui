import { getCurrentInstance, provide } from 'vue'
import TreeNode from './tree-node.jsx'
import { flattenTree } from './utils.js'

export default {
  name: 'HwTree',
  props: {
    data: {
      type: Array,
      default: () => []
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

    const flatMap = flattenTree(props.data)

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
      }
    }
    provide('TREE_PROVIDER', {
      treeMethods: methods,
      slot: context.slots.default
    })

    // 将方法绑定要上下文中去，这样从组件外面也可以调用方法
    const instance = getCurrentInstance()
    instance.ctx.getCheckNodes = methods.getCheckNodes

    return () => { // render 函数
      return (
        <div className="hw-tree">
          { renderNode(props.data) }
        </div>
      )
    }
  }
}
