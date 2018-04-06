import Button from './button'
import Icon from './icon'
import Menu from './menu'
import collapseTransition from './mixins/collapse-transtion'
import Slider from './slider'

const components = {
  Button,
  Icon,
  Menu,
  Submenu: Menu.Submenu,
  MenuItem: Menu.MenuItem,
  collapseTransition,
  Slider,
}

const install = (Vue, options = {}) => {
  if (install.installed) return
  Object.keys(components).forEach(component => {
    Vue.component(components[component].name, components[component])
  })

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