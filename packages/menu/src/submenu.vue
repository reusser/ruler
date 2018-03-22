<template>
  <li :class="classes">
    <div 
      :class="`${prefixClass}__title`"
      @click.stop="clickHandler"
      :style="subMenuTitleStyle"
    >
      <slot name="title"></slot>
      <ru-icon 
        :class="[`${prefixClass}__title-icon`, 'ru-icon-ios-arrow-up']"
      >
      </ru-icon>
    </div>
    <collapse-transition v-if="mode === 'vertical'">
      <ul
        :class="'ru-menu'"
        v-show="isOpen"
      >
        <slot></slot>
      </ul>
    </collapse-transition>
  </li>
</template>

<script>
import RuIcon from '../../icon/'
import {menuMixin, emitter, collapseTransition} from '../../mixins'
import {findParentComponent} from '../../utils'

const prefixClass = 'ru-submenu'
export default {
  name: 'RuSubmenu',
  components: {
    RuIcon
  },
  mixins: [menuMixin, emitter],
  components: {
    collapseTransition
  },
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
        paddingLeft: `${40 + (~~ this.submenuParentNum - 1) * 20}px`
      } : {}
    },
    uniqueOpen() {
      return this.menu.uniqueOpen
    }
  },
  mounted() {
    
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

