import Button from './button'
import Icon from './icon'
import Menu from './menu'
import collapseTransition from './mixins/collapse-transtion'
import Slider from './slider'
import Notification from './notification'
import Message from './message'
import Progress from './progress'
import Circle from './circle'
import Carousel from './carousel'
import DatePicker from './date-picker'

const components = {
  Button,
  Icon,
  Menu,
  Submenu: Menu.Submenu,
  MenuItem: Menu.MenuItem,
  collapseTransition,
  Slider,
  Notification,
  Message,
  Progress,
  Circle,
  Carousel,
  CarouselItem: Carousel.CarouselItem,
  DatePicker
}

const install = (Vue, options = {}) => {
  if (install.installed) return
  Object.keys(components).forEach(component => {
    Vue.component(components[component].name, components[component])
  })
  Vue.prototype.$notice = Notification
  Vue.prototype.$message = Message
  install.installed = true
}
install.installed = false
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
  install.installed = true
}

const ruler = {
  ...components,
  install
}

export default ruler