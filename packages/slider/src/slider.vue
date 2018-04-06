<template>
  <div 
  :class="[
    'ru-slider-wrapper',
    mode ? `ru-slider-wrapper--${mode}` : ''
  ]"
  :style="mode === 'vertical' ? {height: `${height}px`} : {}"
   @mousedown="skip(...arguments, mode === 'horizon' ? 'width' : 'height')"
  >
    <div class="ru-slider-track-wrapper" ref="track">
      <div class="ru-slider-track" :style="trackStyle"></div>
      <div class="ru-dot" :style="mode === 'horizon' ? {left: dotOffset} : {bottom: dotOffset}" @mousedown.stop="moveInit"></div>
      <template v-if="showPoints">
        <div 
          v-for="num in Math.ceil(max / step - 1)" 
          :key="num"
          class="ru-break-point"
          :style="mode === 'horizon' ? {left: `${num * step / max * 100}%`} : {bottom: `${num * step / max * 100}%`}"
        >
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RuSlider',
  props: {
    mode: {
      type: String,
      default: 'horizon'
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    disabled: Boolean,
    step: {
      type: Number,
      default: 1
    },
    range: Boolean,
    value: {
      type: [Number, Array],
      default() {
        return 20
      }
    },
    showPoints: Boolean,
    height: Number
  },
  data() {
    let val = this.checkLimits(Array.isArray(this.value) ? this.value : [this.value])
    return {
      currentValue: val,
      isdragging: false
    }
  },
  computed: {
    trackStyle() {
      if (!this.range) {
        return this.mode === 'horizon' ? {width: `${this.prePos}%`} : {height: `${this.prePos}%`}
      } else {
        return {}
      }
    },
    dotOffset() {
      return `${this.prePos}%`
    },
    trackRange() {
      return this.max - this.min
    },
    prePos() {
      return (this.formateValue[0] - this.min) / this.trackRange * 100
    },
    nextPos() {
      return (this.formateValue[1] - this.min) / this.trackRange * 100
    },
    formateValue() {
      let n = this.step.toString().split('.')[1]
      let length = n ? n.length : 0
      return this.currentValue.map(item => Number(item.toFixed(length)))
    }
  },
  methods: {
    checkLimits([min, max]) {
      min = Math.max(this.min, min)
      min = Math.min(this.max, min)

      max = Math.max(min, max)
      max = Math.min(this.max, max)

      return [min, max]
    },
    skip(e, type) {
      if (this.disabled) return
      let pos = 0
      if (this.mode === 'horizon') {
        let skipWidth = e.clientX - this.$refs.track.getBoundingClientRect().left
        pos = skipWidth / this.$refs.track.clientWidth * this.trackRange + this.min
      } else {
        let skipHeight = this.$refs.track.getBoundingClientRect().bottom - e.clientY
        pos = skipHeight / this.height * this.trackRange + this.min
      }
      pos = this.checkLimits([pos, this.max])[0]
      if (!this.range || pos <= this.prePos) this.changeValue(pos, 'pre')
      else if (pos >= this.nextPos) this.changeValue(pos, 'next')
      else this.changeValue(pos, (pos - this.prePos) <= (this.nextPos - pos) ? 'pre' : 'next')
    },
    changeValue(pos, dotOrder) {
      const index = dotOrder === 'pre' ? 0 : 1
      const value = this.currentValue
      const remainder = this.getRemainder(pos, this.step)
      value[index] = remainder > this.step / 2 ? Math.ceil(pos / this.step) * this.step : pos - remainder
      this.currentValue = [...value]
    },
    getRemainder(pos, step) {
      if (step < 1) {
        let mi = 0;
        let stepString = step.toString()
        mi = stepString.split('.')[1] ? stepString.split('.')[1].length : 0
        let multiplier = Math.pow(10, mi)
        return (pos * multiplier) % (step * multiplier) / multiplier
      } else {
        return pos % step
      }
    },
    moveInit(e) {
      document.addEventListener('mousemove', this.moveHandler, false)
      document.addEventListener('mouseup', this.upHandler, false)
    },
    moveHandler(e) {
      this.isdragging = true
      this.skip(e, 'pre')
    },
    upHandler() {
      this.isdragging = false
      document.removeEventListener('mousemove', this.moveHandler, false)
      document.removeEventListener('mouseup', this.upHandler, false)
    }
  },
  watch: {
    formateValue(val) {
      let value = this.range ? val : val[0]
      this.$emit('input', value)
      this.$emit('change', value)
    }
  }
}
</script>
