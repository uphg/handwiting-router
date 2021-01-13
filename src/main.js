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

router(app)

window.addEventListener('hashchange', () => {
  router(app)
})

// 根据路由将元素插入到 DOM 中
function router(el) {
  let number = window.location.hash.substr(1)
  // 如果 number 不存在，默认显示 div1
  number = number || 1
  el.innerHTML = ''
  const div = hash[number]
  // 如果 div 不存在，则渲染 404 页面
  if (div) {
    el.appendChild(div)
  } else {
    el.appendChild(page404)
  }
}
// 创建 div
function createDiv(text) {
  const div = document.createElement('div')
  div.innerHTML = text
  return div
}