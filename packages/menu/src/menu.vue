<template>
  <ul 
    :class="classes"
    :style="{backgroundColor: backgroundColor || ''}"
  >
    <slot></slot>
  </ul>
</template>

<script>
import {emitter} from '../../mixins'

const prefixClass = 'ru-menu'

export default {
  name: 'RuMenu',
  mixins: [emitter],
  props: {
    theme: {
      type: String,
      default: 'light'
    },
    mode: {
      type: String,
      default: 'vertical'
    },
    uniqueOpen: {
      type: Boolean,
      default: true
    },
    backgroundColor: String,
    textColor: String,
    activeTextColor: String,
    collapse: Boolean
  },
  data() {
    return {}
  },
  mounted() {
    this.broadcast('RuMenuItem', 'test', '10000')
  },
  computed: {
    classes() {
      return [
        `${prefixClass}`,
        `${prefixClass}--${this.theme}`,
        `${prefixClass}--${this.mode}`
      ]
    }
  }
}
</script>
