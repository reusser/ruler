<template>
  <li :class="classes">
    <div 
      :class="`${prefixClass}__title`"
      @click.stop="clickHandler"
    >
      <slot 
        name="title" 
        :style="subMenuTitleStyle"
      >
      </slot>
      <ru-icon 
        :type="'ios-arrow-up'" 
        :class="`${prefixClass}__title-icon`"
      >
      </ru-icon>
    </div>
    <slot></slot>
  </li>
</template>

<script>
import RuIcon from '../../icon/'
import {menuMixin} from '../../mixins'

const prefixClass = 'ru-submenu'
export default {
  name: 'RuSubmenu',
  components: {
    RuIcon
  },
  mixins: [menuMixin],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      isOpen: false,
      isActive: false,
      prefixClass: prefixClass
    }
  },
  computed: {
    classes() {
      return [
        `${prefixClass}`,
        {
          'is-open': this.isOpen,
          'is-active': this.isActive,
          'is-disabled': this.disabled
        }
      ]
    },
    subMenuTitleStyle() {
      return this.mode !== 'horizon' ? {
        paddingLeft: `${(~~ this.SubmenuParentNum + 1) * 24}px`
      } : {}
    },
    uniqueOpen() {
      return this.menu.uniqueOpen
    }
  },
  methods: {
    clickHandler() {
      if (this.disabled || this.mode !== 'vertical') return
      if (this.uniqueOpen && !this.isOpen) {
        this.$parent.$children.forEach(children => {
          if (children.$options.name === 'RuSubmenu') children.isOpen = false
        })
      }
      this.isOpen = !this.isOpen
    }
  }
}
</script>

