import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const icon = resolve => require(['@/doc/icon.md'], resolve)
const font = resolve => require(['@/doc/font.md'], resolve)
const color = resolve => require(['@/doc/color.md'], resolve)
const button = resolve => require(['@/doc/button.md'], resolve)
const slider = resolve => require(['@/doc/slider.md'], resolve)
const notification = resolve => require(['@/doc/notification.md'], resolve)
const message = resolve => require(['@/doc/message.md'], resolve)
const progress = resolve => require(['@/doc/progress.md'], resolve)
const circle = resolve => require(['@/doc/circle.md'], resolve)
const carousel = resolve => require(['@/doc/carousel.md'], resolve)
const datePicker = resolve => require(['@/doc/date-picker.md'], resolve)
const menu = resolve => require(['@/doc/menu.md'], resolve)
const install = resolve => require(['@/doc/install.md'], resolve)
const start = resolve => require(['@/doc/start.md'], resolve)
export default new Router({
  routes: [
    {
      path: '/color',
      component: color
    },
    {
      path: '/icon',
      component: icon
    },
    {
      path: '/font',
      component: font
    },
    {
      path: '/button',
      component: button
    },
    {
      path: '/slider',
      component: slider
    },
    {
      path: '/notification',
      component: notification
    },
    {
      path: '/message',
      component: message
    },
    {
      path: '/progress',
      component: progress
    },
    {
      path: '/circle',
      component: circle
    },
    {
      path: '/carousel',
      component: carousel
    },
    {
      path: '/datePicker',
      component: datePicker
    },
    {
      path: '/menu',
      component: menu
    },
    {
      path: '/install',
      component: install
    },
    {
      path: '/start',
      component: start
    }
  ]
})
