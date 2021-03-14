
export const flattenTree = (data) => {
  let key = 0

  function flat (data, parent) {
    return data.reduce((obj, currentNode) => {
      currentNode.key = key
      obj[key] = {
        parent,
        node: currentNode
      }
      key++

      if (currentNode.children) {
        obj = { ...obj, ...flat(currentNode.children, currentNode) }
      }
      return obj
    }, {})
  }

  return flat(data)
}

// [
//   {
//     id: '',
//     name: '',
//     children: [{ id: '', name: '' }]
//   }
// ]

// {
//   0: {
//       key: 0,
//       id: '',
//       name: '',
//       children: [ { id: '', name: '', key: 1 } ]
//     },
//   1: {}
// }
