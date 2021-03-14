import TreeNode from './tree-node.jsx'

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
  setup (props) {
    const renderNode = (data) => {
      if (data && data.length === 0) {
        return <div>暂无数据</div>
      }

      return data.map(item => <hw-tree-node data={item}></hw-tree-node>)
    }

    return () => { // render 函数
      return (
        <div className="hw-tree">
          { renderNode(props.data) }
        </div>
      )
    }
  }
}
