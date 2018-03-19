<template>
  <li
    :class="classes"
    @click.stop="clickHandler"
    :style="itemStyle"
  >
  <slot></slot>
  </li>
</template>

<script>
import {emitter} from '../../mixins'
export default {
  name: 'RuMenuItem',
  mixins: [emitter],
  props: {
    name: {
      type: [Number, String],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      prefixClass: 'ru-menu-item',
      isActive: false
    }
  },
  computed: {
    classes() {
      return [
        this.prefixClass,
        {
          'is-active': this.isActive,
          'is-disabled': this.disabled
        }
      ]
    },
    itemStyle() {
      return
    }
  },
  methods: {
    clickHandler() {
      if (this.disabled) return
      this.dispatch('RuMenu', 'menuItemSelect', this.name)
    }
  }
}
</script>

