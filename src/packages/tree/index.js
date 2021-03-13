import Tree from './tree.jsx'
import '../../style/tree.scss'

Tree.install = (app) => {
  app.component(Tree.name, Tree)
}

export default Tree
