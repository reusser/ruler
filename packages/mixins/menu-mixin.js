import {findParentComponent, findParentComponents, findChildrenComponents} from '../utils'

export default {
  data() {
    return {
      menu: findParentComponent(this, 'RuMenu')
    }
  },
  computed: {
    mode() {
      return this.menu.mode
    },
    hasSubmenuParent() {
      return !!findParentComponent(this, 'RuSubmenu')
    },
    submenuParentNum() {
      return findParentComponents(this, 'RuSubmenu').length
    }
  }
}