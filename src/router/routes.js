// 首页
const Welcome = r => require.ensure([], () => r(require('@/views/index/welcome')), 'Welcome')
// 博客
const Blog = r => require.ensure([], () => r(require('@/views/blog/blogIndex')), 'BlogIndex')

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
        component: Welcome
    },
    {
        path: '/blog',
        name: 'blog',
        meta: {
          requiresAuth: true
        },
        component: Blog
    }
]

export default routes
