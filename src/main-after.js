import route from './hash'
import { createElement } from './create-dom'

const app = document.querySelector('#app')

// 生成 404 页面
const page404 = createElement('404')

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
  let beforeIndex = 0
  let basePath = path
  addElement(container, route)
  // 根据路由添加元素
  function addElement(container, route) {

    // 获取当前路由对象
    const beforePath = filterPath(route, basePath[beforeIndex])

    // 路由不存在，退出
    if (!beforePath) { return false }

    // 获取路由所渲染的组件
    let outermost = beforePath.component

    // 如果 div 不存在，则渲染 404 页面
    if (!outermost) {
      goTo404(container)
      return false
    }

    let childView = outermost.querySelector('div[data-hg="view"]')
    if(childView) {
      // 不论之前是否有元素，每次重载路由都要清除它的子元素
      clearNode(outermost.querySelector('div[data-hg="view"]'))
    }

    let childPath = null
    let childObject = null
    // 判断路由数组的 length - 1 是否大于循环次数，如果大于，说明已经没有子路由
    if (beforeIndex < basePath.length - 1) {
      beforeIndex += 1
      // 获取子路由对象
      childObject = beforePath.children
      childPath = filterPath(childObject, basePath[beforeIndex])
      childView.appendChild(childPath.component)
    }

    if(container !== outermost) {
      container.appendChild(outermost)
    }

    // 判断是否存在子路由，存在继续循环
    if(childPath && childPath.children) {
      addElement(childPath.component, childObject)
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

// 跳转至 404
function goTo404(el) {
  console.log('el')
  console.log(el)
  el.appendChild(page404)
}