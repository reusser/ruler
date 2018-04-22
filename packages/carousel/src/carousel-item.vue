<template>
  <div 
    class="ru-carousel-item"
    :class="{
      'is-active': active,
      'is-animate': isAnimate
    }"
    :style="{
      transform: `translateX(${translate}px)`
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'RuCarouselItem',
  componentName: 'RuCarouselItem',
  data() {
    return {
      translate: 0,
      active: false,
      isAnimate: false
    }
  },
  created() {
    this.$parent && this.$parent.getSlides()
  },
  destroyed() {
    this.$parent && this.$parent.getSlides()
  },
  methods: {
    itemTranslate(itemIndex, activeIndex, animateArr) {
      const parentWidth = this.$parent.$el.offsetWidth
      const length = this.$parent.slides.length

      this.isAnimate = animateArr.includes(itemIndex)
      if (length > 2) {
        itemIndex = this.setIndex(itemIndex, activeIndex, length)
      }
      
      this.active = activeIndex === itemIndex
      this.translate = parentWidth * (itemIndex - activeIndex)
    },
    setIndex(index, activeIndex, length) {
      if (activeIndex === 0 && index === length - 1) return -1
      else if (activeIndex === length - 1 && index === 0) return length
      return index
    }
  }
}
</script>
