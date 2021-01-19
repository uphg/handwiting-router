import route from './route'
import { createDiv } from './create-dom'

const app = document.querySelector('#app')

// 生成 404 页面
const page404 = createDiv('404')

router(app, route)

window.addEventListener('hashchange', () => {
  router(app, route)
})

// 根据路由将元素插入到 DOM 中
function router(container, route) {
  // 获取路径
  const path = getRoute()

  if (!path[0]) {
    container.appendChild(createDiv('1'))
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
    // debugger
    // 获取当前路由对象
    const beforePath = route.filter(item => item.path === basePath[beforeIndex])

    // 路由不存在，退出
    if (beforePath.length < 1) { return false }

    // 获取路由所渲染的组件
    let outermost = beforePath[0].component

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
      childObject = beforePath[0].children

      childPath = childObject.filter(item => item.path === basePath[beforeIndex])

      childView.appendChild(childPath[0].component)

    }

    if(beforeIndex === 0 || beforeIndex === 1) {
      container.appendChild(outermost)
    }

    if(childPath && childPath[0].children) {
      addElement(childPath[0].component, childObject)
    }
  }

}

// 获取路由路径信息
function getRoute() {
  const string = window.location.hash.substr(1)
  return String(string).split('/') || false
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