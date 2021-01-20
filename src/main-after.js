import route from './hash'
import { createElement } from './create-dom'

const app = document.querySelector('#app')

router(app, route)

window.addEventListener('hashchange', () => {
  router(app, route)
})

// 根据路由将元素插入到 DOM 中
function router(container, route) {
  // 获取路径
  const path = getRoute()

  if (!path[0]) {
    container.appendChild(createElement('1'))
    return false
  }

  clearNode(container)

  render(container, path, route)

}

function render(container, path, route) {
  let index = 0
  let base = path
  addElement(container, route)
  // 根据路由添加元素
  function addElement(container, route) {

    // 获取当前路由对象
    const hash = filterPath(route, base[index])

    // 路由不存在，退出
    if (!hash) { return false }

    // 获取路由所渲染的组件
    let DOM = hash.component

    let childView = DOM.querySelector('div[data-hg="view"]')
    if (childView) {
      // 不论之前是否有元素，每次重载路由都要清除它的子元素
      clearNode(DOM.querySelector('div[data-hg="view"]'))
    }

    let childHash = null
    // 判断路由数组的 length - 1 是否大于循环次数，如果大于，说明已经没有子路由
    if (index < base.length - 1) {
      index += 1
      // 获取子路由对象
      childHash = filterPath(hash.children, base[index])
      childView.appendChild(childHash.component)
    }

    if (container !== DOM) {
      container.appendChild(DOM)
    }

    // 判断是否存在子路由，存在继续循环
    if (childHash && childHash.children) {
      addElement(childHash.component, hash.children)
    }
  }

}

// 获取路由路径信息
function getRoute() {
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
