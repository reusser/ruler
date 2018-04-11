<template>
  <transition name="ru-notification-list">
    <div 
      class="ru-notification right"
      v-show="visible"
      :style="offsetStyle"
      @click="click"
      @mouseenter="clearTimer"
      @mouseleave="setTimer"
    >
      <RuIcon 
        :type="icon || typeClass" 
        class="ru-notification__icon"
        :class="{
          'is-success': type === 'success',
          'is-warning': type === 'warning',
          'is-error': type === 'error'
        }"
      >
      </RuIcon>
      <div class="ru-notification__wrapper" 
      :class="{
        'is-has-icon': typeClass || icon, 
        'is-success': type === 'success',
        'is-warning': type === 'warning',
        'is-error': type === 'error'
      }
      ">
        <h2 class="ru-notification__title">{{title}}</h2>
        <p v-if="useHTMLString" v-html="message"></p>
        <p v-else class="ru-notification__text">{{message}}</p>
        <div class="ru-notification__close-btn" @click.stop="close">
          <RuIcon type="ios-close-empty"></RuIcon>  
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
const typeMap = {
  success: 'success',
  info: 'info',
  error: 'error',
  warning: 'warning'
}
const iconMap = {
  success: 'checkmark-circled',
  info: 'information-circled',
  warning: 'android-alert',
  error: 'close-circled'
}
import RuIcon from '../../icon'
export default {
  components: {
    RuIcon
  },
  data() {
    return {
      duration: 3000,
      title: '',
      message: '',
      icon: '',
      visible: false,
      timer: null,
      type: '',
      useHTMLString: false,
      onClose: '',
      onClick: '',
      topOffset: 0
    }
  },
  computed: {
    typeClass() {
      return this.type && typeMap[this.type] ? iconMap[this.type] : ''
    },
    offsetStyle() {
      return {top: `${this.topOffset}px`}
    }
  },
  mounted() {
    this.setTimer()
  },
  methods: {
    clearTimer() {
      clearTimeout(this.timer)
    },
    setTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (this.visible) {
            this.close()
          }
        }, this.duration)
      }
    },
    close() {
      this.visible = false
      if (typeof this.onClose === 'function') {
        this.onClose()
      }
    },
    click() {
      if (typeof this.onClick === 'function') {
        this.onClick()
      }
    },
    destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    }
  },
  watch: {
    visible(val) {
      if (!val) {
        this.$el.addEventListener('transitionend', this.destroyElement);
      }
    }
  }
}
</script>
