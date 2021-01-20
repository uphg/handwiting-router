import hashTab from './hash'

class Router {
  constructor(props) {
    this.el = props.el // 需要挂载的元素
    this.base = props.base // 路由表
    this.init()
  }
  // 初始化路由
  init() {
    // 第一次挂载路由
    this.mounted()
    // 监听 hash 变化，重新挂载路由
    window.addEventListener('hashchange', () => {
      // 重新挂载路由
      this.mounted()
    })
  }
  // 挂载路由
  mounted() {
    this.updated()
    this.clearNode(this.el)
    const hash = this.filterPath(this.base, this.path[0])
    this.el.appendChild(hash.component)
    this.render(this.base)
  }
  // 更新路径信息
  updated() {
    this.index = 0
    this.path = this.getPath() // 路径组成的数组
  }
  // 渲染路由组件
  render(hashTab) {
    // 获取当前路由对象
    const hash = this.filterPath(hashTab, this.path[this.index])
    const DOM = hash.component
    const view = DOM.querySelector('div[data-hg="view"]')
    this.clearNode(view)
    // 获取下一级路由对象
    this.index += 1
    const childHash = this.filterPath(hash.children, this.path[this.index])
    // 判断是否存在子路由对象，不存在直接退出
    if (!childHash) return false
    view.appendChild(childHash.component)
    // 判断当前路径是否存在子路径，存在继续递归
    if (this.index < this.path.length - 1) {
      this.render(hash.children)
    }
  }
  // 获取地址栏路径
  getPath() {
    const string = window.location.hash.substr(1)
    return String(string).split('/')
  }
  // 根据路径获取当前路由对象
  filterPath(array, value) {
    const result = array.filter(item => item.path === value)
    return result[0]
  }
  // 清空当前元素的内容
  clearNode(element) {
    if (element) {
      element.innerHTML = ''
    } else {
      console.log('clearNode：元素不存在')
    }
  }
}

new Router({
  el: document.querySelector('#app'),
  base: hashTab
})
