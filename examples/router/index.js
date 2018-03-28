import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const icon = resolve => require(['@/doc/icon.md'], resolve)
const color = resolve => require(['@/doc/color.md'], resolve)
export default new Router({
  routes: [
    {
      path: '/color',
      component: color
    },
    {
      path: '/icon',
      component: icon
    }
  ]
})
