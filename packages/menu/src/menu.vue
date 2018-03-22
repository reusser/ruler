<template>
  <ul :class="classes">
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
    activeName: {
      type: [Number, String]
    },
    collapse: Boolean,
    router: Boolean
  },
  data() {
    return {
      currentActiveName: this.activeName
    }
  },
  computed: {
    classes() {
      return [
        `${prefixClass}`,
        `${prefixClass}--${this.theme}`,
        `${prefixClass}--${this.mode}`
      ]
    }
  },
  mounted() {
    this.updateActiveName()
    this.$on('menuItemSelect', name => {
      this.currentActiveName = name
      this.$emit('select', name)
    })
  },
  methods: {
    updateActiveName() {
      if (this.currentActiveName === undefined) return
      this.broadcast('RuMenuItem', 'updateActiveName', this.currentActiveName)
    }
  },
  watch: {
    currentActiveName() {
      this.updateActiveName()
    },
    activeName(val) {
      this.currentActiveName = val
      console.log(this.currentActiveName)
    }
  }
}
</script>
