import route from './hash'

const app = document.querySelector('#app')

mounted(app, route)
window.addEventListener('hashchange', () => {
  mounted(app, route)
})

function mounted(app, route) {
  const base = getPath()
  if (!base || !base[0]) { return false }

  clearNode(app)
  let index = 0

  // 挂载最外层组件
  const hash = filterPath(route, base[index])
  app.appendChild(hash.component)

  render(route)
  function render(route) {
    const hash = filterPath(route, base[index])
    if (!hash) { return false }
    const view = hash.component.querySelector('div[data-hg="view"]')

    if (view) { view.innerHTML = '' } // view.appendChild(hash.component)
    
    if (index < base.length - 1) {
      index += 1
      const childHash = filterPath(hash.children, base[index])
      view.appendChild(childHash.component)
      render(hash.children)
    }
  }
}

// 获取路由路径信息
function getPath() {
  const string = window.location.hash.substr(1)
  return String(string).split('/') || false
}

function filterPath(array, value) {
  const result = array.filter(item => item.path === value)
  return result[0]
}
// 清空当前节点子元素
function clearNode(el) {
  el.innerHTML = ''
}
