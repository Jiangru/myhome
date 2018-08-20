// 首页
const Welcome = r => require.ensure([], () => r(require('@/views/index/welcome')), 'Welcome')
// studyVue
const VueIndex = r => require.ensure([], () => r(require('@/views/studyVue/index')), 'VueIndex')
const OnEmit = r => require.ensure([], () => r(require('@/views/studyVue/onEmit')), 'OnEmit')
const SlotPage = r => require.ensure([], () => r(require('@/views/studyVue/slotPage')), 'SlotPage')
// studyCss
const RequestAnimationFrame = r => require.ensure([], () => r(require('@/views/studyCss/requestAnimationFrame')), 'RequestAnimationFrame')
// css-index
const CssIndex = r => require.ensure([], () => r(require('@/views/studyCss/index')), 'CssIndex')
// animation
const Animation = r => require.ensure([], () => r(require('@/views/studyCss/animation')), 'Animation')
// 学习路由
const Router = r => require.ensure([], () => r(require('@/views/study/router')), 'Router')
// 路由嵌套、子路由
const ChildRoute = r => require.ensure([], () => r(require('@/views/study/routeChild')), 'ChildRoute')
const ChildRouteOne = r => require.ensure([], () => r(require('@/views/study/routeChildOne')), 'ChildRouteOne')

const routes = [
    {
        path: '/',
        redirect: '/welcome'
    },
    {
        path: '/welcome',
        name: 'welcome',
        meta: {
            requiresAuth: true
        },
        component: Welcome,
        alias: '/hahahah'
    },
    {
        path: '/study-vue',
        name: 'vue',
        meta: {
          requiresAuth: true
        },
        component: VueIndex,
        children: [
          {
            path: 'on-emit',
            name: 'onemit',
            meta: {
              requiresAuth: true
            },
            component: OnEmit
          },
          {
            path: 'slot-page',
            name: 'slotpage',
            meta: {
              requiresAuth: true
            },
            component: SlotPage
          }
        ]
    },
    {
        path: '/study-css',
        name: 'css3',
        meta: {
          requiresAuth: true
        },
        component: CssIndex,
        children: [
          {
            path: 'animation',
            name: 'animation',
            meta: {
              requiresAuth: true
            },
            component: Animation
          }
        ]
    },
    {
      path: '/study-router',
      name: 'studyRouter',
      meta: {
        // requiresAuth: true
      },
      component: Router,
      children: [
        {
          path: 'route',
          components: {
            default: ChildRoute,
            one: ChildRouteOne
          }
        }
      ]
    }
]

export default routes
