import route from './route'
import { createDiv } from './create-dom'

const app = document.querySelector('#app')

// 创建路由 hash 表
const hash = {
  '1': createDiv('1'),
  '2': createDiv('2'),
  '3': createDiv('3'),
  '4': createDiv('4')
}

// 生成 404 页面
const page404 = createDiv('404')

router(app, route)

window.addEventListener('hashchange', () => {
  console.log(app)
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
  // const div = hash[number]
  const beforePath = route.filter(item => item.path === path[0])
  const outermost = beforePath[0].component
  let childView = outermost.querySelector('.view-container')
  // 不论之前是否有元素，都要清除它的子元素
  clearNode(childView)
  // 如果 div 不存在，则渲染 404 页面
  if (!outermost) {
    goTo404(container)
    return false
  }
  // 如果存在子元素，获取子元素的 view 容器
  if (path.length === 2) {
    const array = beforePath[0].children
    const childPath = array.filter(item => item.path === path[1])
    childView.appendChild(childPath[0].component)
  }
  container.appendChild(outermost)
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
  el.appendChild(page404)
}