// 首页
const Welcome = r => require.ensure([], () => r(require('@/views/index/welcome')), 'Welcome')
// 博客
const Blog = r => require.ensure([], () => r(require('@/views/blog/blogIndex')), 'BlogIndex')
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
        path: '/blog',
        name: 'blog',
        meta: {
          requiresAuth: true
        },
        component: Blog
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
