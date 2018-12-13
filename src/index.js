import { installComponents } from 'js-utils/src/install-utils.js'
import ljsTreeTable from '../packages/ljs-tree-table'
import mContextMenu from '../packages/m-context-menu'

const components = {
  ljsTreeTable
}

let API = { name: 'ljs-tree-table', version: undefined, ...components, components }

API.install = (Vue, option) => {
  installComponents(API, Vue, option)
  Vue.prototype.$menu = mContextMenu
}

/** cdn引用方式安装 */
if (window && window.Vue) window.Vue.use(API)
export default API
