import { toRefs, computed, inject, ref, getCurrentInstance } from 'vue'
import HwIcon from '../icon/index'

export default {
  name: 'HwTreeNode',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    [HwIcon.name]: HwIcon
  },
  setup (props) {
    const { data } = toRefs(props)
    const { treeMethods, slot, load, draggable } = inject('TREE_PROVIDER')

    const isLoaded = ref(false) // 判断是否加载完毕
    const showArrow = computed(() => {
      return (data.value.children && data.value.children.length > 0) || (load && !isLoaded.value)
    })

    const classes = computed(() => {
      return [
        'hw-tree-node',
        !showArrow.value && 'hw-tree-no-expand',
        draggable && 'hw-tree-draggable'
      ]
    })

    const methods = {
      handleExpand () {
        if (data.value.children && data.value.children.length === 0) { // 如果没有孩子 或者 孩子为空
          if (load) { // 有加载方法就进行加载
            data.value.loading = true
            load(data.value, (children) => {
              data.value.children = children
              data.value.loading = false
              isLoaded.value = false
            })
          }
        } else {
          // 加载完毕
          isLoaded.value = true
        }
        data.value.expend = !data.value.expend
      },
      handleCheck (e) {
        e.stopPropagation()
        data.value.checked = !data.value.checked
        treeMethods.updateTreeDown(data.value, data.value.checked)
        treeMethods.updateTreeUp(data.value, data.value.checked)
      }
    }

    const instance = getCurrentInstance()

    const dragEvent = {
      ...(draggable ? {
        onDragstart (e) {
          e.stopPropagation()
          treeMethods.dragStart(e, instance, data.value)
        },
        onDragover (e) {
          e.stopPropagation()
          treeMethods.dragOver(e, instance, data.value)
        },
        onDragend (e) {
          e.stopPropagation()
          treeMethods.dragEnd(e, instance, data.value)
        }
      } : {})
    }

    return () => (
      <div class={classes.value} {...dragEvent}>
        <div className="hw-tree-label" onClick={methods.handleExpand}>
          {
            data.value.loading
              ? <hw-icon icon="loading"></hw-icon>
              : <hw-icon icon="arrow-right" class={ data.value.expend && 'arrow-down' }></hw-icon>
          }
          <input type="checkbox" style="vertical-align: middle;" checked={data.value.checked} onClick={methods.handleCheck} />
          <span >{ slot ? slot(data.value) : data.value.name }</span>
        </div>
        <div className="hw-tree-list" vShow={data.value.expend}>
          { data.value.children && data.value.children.map(child => <hw-tree-node data={child}></hw-tree-node>) }
        </div>
      </div>
    )
  }
}
