export function createDiv(text, view) {
  const div = document.createElement('div')
  const h2 = document.createElement('h2')
  let container = null
  if (view) {
    container = document.createElement('div')
    container.classList.add('view-container')
    container.setAttribute('data-demo', 'view')
  }

  h2.innerHTML = text
  div.appendChild(h2)
  if (view) {
    div.appendChild(container)
  }

  return div
}