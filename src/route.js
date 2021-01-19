import { createDiv } from './create-dom'

export default [
  {
    path: '1',
    component: createDiv('1', true),
    children: [
      {
        path: '1',
        component: createDiv('1.1')
      },
      {
        path: '2',
        component: createDiv('1.2')
      },
      {
        path: '3',
        component: createDiv('1.3')
      }
    ]
  },
  {
    path: '2',
    component: createDiv('2', true),
    children: [
      {
        path: '1',
        component: createDiv('2.1')
      },
      {
        path: '2',
        component: createDiv('2.2')
      },
      {
        path: '3',
        component: createDiv('2.3')
      }
    ]
  },
  {
    path: '3',
    component: createDiv('3', true),
    children: [
      {
        path: '1',
        component: createDiv('3.1')
      },
      {
        path: '2',
        component: createDiv('3.2')
      },
      {
        path: '3',
        component: createDiv('3.3')
      }
    ]
  },
  {
    path: '4',
    component: createDiv('4', true),
    children: [
      {
        path: '1',
        component: createDiv('4.1')
      },
      {
        path: '2',
        component: createDiv('4.2')
      },
      {
        path: '3',
        component: createDiv('4.3')
      }
    ]
  }
]