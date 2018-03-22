<template>
  <i 
    :class="type ? `ru-icon-${type}` : ''"
    :style="styles"
  >
  </i>
</template>

<script>
export default {
  name: 'RuIcon',
  props: {
    type: String,
    size: [Number, String],
    color: String
  },
  computed: {
    styles() {
      const style = {}

      if (this.color) {
        style.color = this.color
      }
      if (this.size) {
        style.size = this.size
      }

      return style
    }
  }
}
</script>

