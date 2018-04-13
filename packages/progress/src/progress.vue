<template>
  <div class="ru-progress">
    <div class="ru-progress__wrapper":style="{height: showText && textInside ? `${height * 3 < 20 ? height * 3 : height}px` : `${height}px`}">
      <div class="ru-progress__text" v-if="showText && !textInside">
        <span v-show="!showIcon">{{percent}}%</span>
        <RuIcon v-show="showIcon" :type="iconType" :class="iconClass"></RuIcon>
      </div>
      <div class="ru-progress__track" :style="trackStyle">
        <div class="ru-progress__text is-inside" v-if="showText && textInside">
          <span>{{percent}}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RuProgress',
  props: {
    showText: {
      type: Boolean,
      default: true
    },
    textInside: Boolean,
    height: {
      type: Number,
      default: 6
    },
    status: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#fe6f3d'
    },
    percent: {
      type: Number,
      default: 0,
      validator(val) {
        return val >=0 && val <= 100
      }
    }
  },
  data() {
    return {
      currentStatus: this.status
    }
  },
  computed: {
    trackStyle() {
      return {
        width: `${this.percent}%`,
        backgroundColor: this.backgroundColor
      }
    },
    backgroundColor() {
      if (this.currentStatus === 'success') return '#27c24c'
      if (this.currentStatus === 'error') return '#ef5050'
      return this.color
    },
    iconType() {
      if (this.currentStatus === '') return ''
      return {
        'success': 'ios-checkmark',
        'error': 'ios-close'
      }[this.currentStatus]
    },
    showIcon() {
      return this.currentStatus === 'error' || this.currentStatus === 'success'
    },
    iconClass() {
      if (this.currentStatus === 'success') return 'is-success'
      if (this.currentStatus === 'error') return 'is-error'
    }
  },
  mounted() {
    this.changeStatus(this.percent)
  },
  methods: {
    changeStatus(val) {
      if (this.currentStatus === 'error') return
      if (val < 100) {
        this.currentStatus = ''
      }
      if (val >= 100) {
        this.currentStatus = 'success'
      }
    }
  },
  watch: {
    percent(val) {
      this.changeStatus(val)
    },
    status(val) {
      this.currentStatus = val
    }
  }
}
</script>