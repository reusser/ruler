<template>
  <div class="ru-carousel" @mouseenter="carouselHover" @mouseleave="carouselLeave">
    <div 
      class="ru-carousel__items" 
      v-if="$slots.default"
      :style="{height: height}"
    >
      <slot></slot>
    </div>
    <transition name="arrow-left">
      <button 
        class="ru-carousel__arrow is-left" 
        v-if="showArrow !== 'never'" 
        v-show="showArrow === 'always' || isHover"
        @click="changeActiveIndex(-1)"
      >
        <RuIcon type="chevron-left"></RuIcon>
      </button>
    </transition>
    <transition name="arrow-right">
      <button 
        class="ru-carousel__arrow is-right"
        v-if="showArrow !== 'never'" 
        v-show="showArrow === 'always' || isHover"
        @click="changeActiveIndex(1)"
      >
        <RuIcon type="chevron-right"></RuIcon>
      </button>
    </transition>
    <div class="ru-carousel__dots-wrapper" :class="{'is-outside': dotsOutside}">
      <div 
        v-for="(item, index) in slides"
        :key="index"
        :class="[
          'ru-carousel__dot',
          {'is-active': index === activeIndex}
        ]"
        @mouseenter="trigger === 'hover' && dotTrigger(index)"
        @click="dotTrigger(index)"
      >
      </div>
    </div>
  </div>
</template>

<script>
import RuIcon from '../../icon'

export default {
  name: 'RuCarousel',
  components: {
    RuIcon
  },
  props: {
    dotsOutside: Boolean,
    height: String,
    duration: {
      type: Number,
      default: 1000
    },
    showArrow: {
      type: String,
      default: 'hover',
      validator(val) {
        return ['always', 'hover', 'never'].includes(val)
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(val) {
        return val === 'click' || val === 'hover'
      }
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      slides: [],
      activeIndex: -1,
      timer: null,
      isHover: false,
      animateArr: []
    }
  },
  computed: {
    slidesLength() {
      return this.slides.length
    }
  },
  mounted() {
    this.getSlides()
    this.activeIndex = this.index >= this.slidesLength ? this.slidesLength - 1 : this.index
    this.setTimer()
  },
  methods: {
    getSlides() {
      this.slides = this.$children.filter(item => item.$options.componentName === 'RuCarouselItem')
    },
    changeItemsTranslate(animateArr) {
      this.slides.forEach((item, index) => item.itemTranslate(index, this.activeIndex, animateArr))
    },
    setTimer() {
      if (this.duration > 0) {
        this.timer = setInterval(() => this.changeActiveIndex(1), this.duration)
      }
    },
    clearTimer() {
      clearInterval(this.timer)
    },
    changeActiveIndex(num) {
      num = parseInt(num)
      if (isNaN(num)) return false
      if (num >= 0) {
        this.activeIndex + num >= this.slidesLength ? this.activeIndex = 0 : this.activeIndex += num
      } else {
        this.activeIndex + num < 0 ? this.activeIndex = this.slidesLength - 1 : this.activeIndex += num
      }
    },
    carouselHover() {
      this.isHover = true
      this.clearTimer()
    },
    carouselLeave() {
      this.isHover = false
      this.setTimer()
    },
    dotTrigger(index) {
      if (index === this.activeIndex) return false
      if (this.activeIndex === this.slidesLength - 1 && index === 0) return this.changeActiveIndex(1)
      if (this.activeIndex === 0 && index === this.slidesLength - 1) return this.changeActiveIndex(-1)
      return this.changeActiveIndex(index - this.activeIndex)
    }
  },
  watch: {
    activeIndex(val, oldVal) {
      this.animateArr = []
      if (Math.abs(oldVal - val) === this.slidesLength - 1) this.animateArr = [oldVal, val]
      else this.animateArr = val > oldVal ? [... new Array(val + 1).keys()].slice(oldVal) : [... new Array(oldVal + 1).keys()].slice(val)
      this.changeItemsTranslate(this.animateArr)
    },
    index() {
      this.activeIndex = this.index >= this.slidesLength ? this.slidesLength - 1 : this.index
    }
  }
}
</script>
