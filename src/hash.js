import { createElement } from './create-dom'

export default [
  {
    path: '1',
    id: '1',
    component: createElement('1', true),
    children: [
      {
        id: '1/1',
        path: '1',
        component: createElement('1.1')
      },
      {
        id: '1/2',
        path: '2',
        component: createElement('1.2', true),
        children: [
          {
            id: '1/2/1',
            path: '1',
            component: createElement('1.2.1'),
          },
          {
            id: '1/2/2',
            path: '2',
            component: createElement('1.2.2'),
          },
          {
            id: '1/2/3',
            path: '3',
            component: createElement('1.2.3', true),
            children: [
              {
                id: '1/2/3/1',
                path: '1',
                component: createElement('1.2.3.1', true),
                children: [
                  {
                    id: '1/2/3/1/demo',
                    path: 'demo',
                    component: createElement('1.2.3.1 - demo', true),
                    children: [
                      {
                        id: '1/2/3/1/demo/part',
                        path: 'part',
                        component: createElement('1.2.3.1 - demo - part'),
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: '1/3',
        path: '3',
        component: createElement('1.3')
      }
    ]
  },
  {
    path: '2',
    id: '2',
    component: createElement('2', true),
    children: [
      {
        path: '1',
        id: '2/1',
        component: createElement('2.1', true),
        children: [
          {
            path: '1',
            id: '2/1/1',
            component: createElement('2.1.1'),
          },
          {
            path: '2',
            id: '2/1/2',
            component: createElement('2.1.2'),
          },
          {
            path: '3',
            id: '2/1/3',
            component: createElement('2.1.3'),
          }
        ]
      },
      {
        path: '2',
        id: '2/2',
        component: createElement('2.2')
      },
      {
        path: '3',
        id: '2/3',
        component: createElement('2.3')
      }
    ]
  },
  {
    path: '3',
    id: '3',
    component: createElement('3', true),
    children: [
      {
        path: '1',
        id: '3/1',
        component: createElement('3.1')
      },
      {
        path: '2',
        id: '3/2',
        component: createElement('3.2')
      },
      {
        path: '3',
        id: '3/3',
        component: createElement('3.3')
      }
    ]
  },
  {
    path: '4',
    id: '4',
    component: createElement('4', true),
    children: [
      {
        path: '1',
        id: '4/1',
        component: createElement('4.1')
      },
      {
        path: '2',
        id: '4/2',
        component: createElement('4.2')
      },
      {
        path: '3',
        id: '4/3',
        component: createElement('4.3')
      }
    ]
  }
]