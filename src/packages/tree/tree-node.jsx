import { toRefs, computed, inject } from 'vue'

export default {
  name: 'HwTreeNode',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  setup (props) {
    const { data } = toRefs(props)
    const { treeMethods } = inject('TREE_PROVIDER')

    const showArrow = computed(() => {
      return data.value.children && data.value.children.length > 0
    })

    const classes = computed(() => {
      return [
        'hw-tree-node',
        !showArrow.value && 'hw-tree-no-expand'
      ]
    })

    const methods = {
      handleExpand () {
        data.value.expend = !data.value.expend
      },
      handleCheck (e) {
        e.stopPropagation()
        data.value.checked = !data.value.checked
        treeMethods.updateTreeDown(data.value, data.value.checked)
        treeMethods.updateTreeUp(data.value, data.value.checked)
      }
    }

    return () => (
      <div class={classes.value}>
        <p className="hw-tree-label" onClick={methods.handleExpand}>
          <hw-icon icon="arrow-right" class={ data.value.expend && 'arrow-down' }></hw-icon>
          <input type="checkbox" style="vertical-align: middle;" checked={data.value.checked} onClick={methods.handleCheck} />
          <span >{ data.value.name }</span>
        </p>
        <div className="hw-tree-list" vShow={data.value.expend}>
          { data.value.children && data.value.children.map(child => <hw-tree-node data={child}></hw-tree-node>) }
        </div>
      </div>
    )
  }
}
