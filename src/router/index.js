import Vue from 'vue'
import Router from 'vue-router'
import path from '@/router/path'
// import getToken from '@/utils/getToken'

// let token = ''
const { index } = path
const routes = [
  {
    path: '/',
    component: index,
  }
]

// [log] not login
// const paths = routes.reduce((total, route) => {
//   if (route.path === '/404') {
//     return total
//   }

//   if (route.children && route.children.length) {
//     route.children.reduce((innerTotal, childRoute) => {
//       innerTotal.push(`${route.path}/${childRoute.path}`)
//       return innerTotal
//     }, total)
//     return total
//   } else {
//     total.push(route.path)
//     return total
//   }
// }, [])

Vue.use(Router)

const VueRouter = new Router({ routes })
// [log] not login
// VueRouter.beforeEach((to, from, next) => {
//   if (to.path === '/404' || (to.path === '/login' && !token)) {
//     next()
//     return
//   }

//   if (!token) {
//     token = getToken()
//   }

//   if (token && paths.includes(to.path) && (to.path === '/login' || to.path === '/register')) {
//     next(from.path)
//     return
//   }

//   token ?
//     paths.includes(to.path) ? next() : next('/404')
//     : next('/login')
// })

export default VueRouter
