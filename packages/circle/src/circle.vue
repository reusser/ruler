<template>
  <div :style="{width: `${size}px`, height: `${size}px`}" class="ru-circle">
    <svg viewBox="0 0 100 100">
      <path :d="besselString" fill-opacity="0" :stroke="backColor" :stroke-width="backWidth"></path>
      <path :d="besselString" :stroke="strokeColor" :stroke-width="strokeWidth" fill-opacity="0" :stroke-linecap="linecap" :style="besselStyle"></path>
    </svg>
    <div class="ru-circle__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RuCircle',
  props: {
    size: {
      type: Number,
      default: 120
    },
    strokeWidth: {
      type: Number,
      default: 6
    },
    strokeColor: {
      type: String,
      default: '#fe6f3d'
    },
    backColor: {
      type: String,
      default: '#e4e4e4'
    },
    backWidth: {
      type: Number,
      default: 5
    },
    linecap: {
      type: String,
      default: 'round',
      validator(val) {
        return val === 'square' || val === 'round'
      } 
    },
    percent: {
      type: Number,
      default: 30,
      validator(val) {
        return val >=0 && val <= 100
      }
    }
  },
  computed: {
    besselString() {
      return `M 50,50 m 0, -${this.radius}
      a ${this.radius}, ${this.radius} 0 1 1 0, ${2 * this.radius}
      a ${this.radius}, ${this.radius} 0 1 1 0, -${2 * this.radius}
      `
    },
    radius() {
      return 50 - this.strokeWidth / 2
    },
    length() {
      return 2 * Math.PI * this.radius
    },
    besselStyle() {
      return {
        'stroke-dasharray': `${this.length}px ${this.length}px`,
        'stroke-dashoffset': `${((100 - this.percent) / 100 * this.length)}px`,
        'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
      }
    }
  }
}
</script>
