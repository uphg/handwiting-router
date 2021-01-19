export function createDiv(text, view) {
  const div = document.createElement('div')
  const h2 = document.createElement('h2')

  h2.innerHTML = text
  div.appendChild(h2)
  // 判断该元素是否有存在嵌套路由
  if (view) {
    const container = document.createElement('div')
    container.classList.add('view-container')
    container.setAttribute('data-hg', 'view')
    div.appendChild(container)
  }

  return div
}