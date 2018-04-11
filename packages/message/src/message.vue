<template>
  <transition name="ru-message-list">
    <div 
      class="ru-message"
      :class="[typeClass, {'is-center': center}]"
      @mouseenter="clearTimer"
      @mouseleave="setTimer"
      v-show="visible"
    >
      <RuIcon 
        :type="icon || iconType"
        :class="['ru-message__icon', typeClass]"
      >
      </RuIcon>
      <p class="ru-message__text">{{message}}</p>
      <div class="ru-message__close-btn" @click="close">
        <RuIcon type="ios-close-empty"></RuIcon>
      </div>
    </div>
  </transition>
  
</template>

<script>
const typeMap = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info',
  loading: 'loading'
}
const iconMap = {
  'info': 'information-circled',
  'success': 'checkmark-circled',
  'warning': 'android-alert',
  'error': 'close-circled',
  'loading': 'load-c'
}
import RuIcon from '../../icon'
export default {
  name: 'message',
  components: {
    RuIcon
  },
  data() {
    return {
      type: '',
      icon: '',
      duration: 3000,
      timer: null,
      visible: false,
      message: '',
      center: false
    }
  },
  computed: {
    iconType() {
      return this.type && typeMap[this.type] ? iconMap[this.type] : 'information-circled'
    },
    typeClass() {
      return {
        success: 'is-success',
        error: 'is-error',
        info: 'is-info',
        warning: 'is-warning',
        loading: 'is-loading'
      }[this.type]
    }
  },
  mounted() {
    this.setTimer()
  },
  methods: {
    setTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (this.visible) {
            this.close()
          }
        }, this.duration)
      }
    },
    clearTimer() {
      clearTimeout(this.timer)
    },
    close() {
      this.visible = false
      if (typeof this.onClose === 'function') {
        this.onClose()
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
      if (!val) this.$el.addEventListener('transitionend', this.destroyEelement)
    }
  }
}
</script>
