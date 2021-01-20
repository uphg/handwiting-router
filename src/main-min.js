import route from './hash'

const app = document.querySelector('#app')
mounted()
window.addEventListener('hashchange', () => {
  console.log('地址栏变化了')
  app.innerHTML = ''
  clearView(app)
  mounted()
})


function mounted() {
  const path = getPath()
  let index = 0
  render(app, route)
  function render(el, route) {
    const hash = filterPath(route, path[index])

    // 插入子组件
    addComponent(el, hash, index)

    if (index < path.length - 1) {
      index += 1
      render(hash.component, hash.children)
    }
  }
}

function clearView(el) {
  const view = el.querySelector('div[data-hg="view"]')
  if(view) {
    view.innerHTML = ''
  }
}

function addComponent(el, hash, index) {
  if (index === 0) {
    clearView(hash.component)
    el.appendChild(hash.component)
    
  } else {
    const view = el.querySelector('div[data-hg="view"]')
    view.innerHTML = ''
    view.appendChild(hash.component)
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