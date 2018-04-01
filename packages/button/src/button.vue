<template>
  <button
    :disabled="disabled || loading"
    :type="nativeType"
    @click="handleClick"
    :class="[
      'ru-button',
      type ? `ru-button--${type}` : '',
      size ? `ru-button--${size}` : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-loading': loading,
        'is-disabled': disabled,
        'is-circle': circle
      }
    ]"
  >
  <RuIcon v-if="icon && !loading" :type="icon"></RuIcon>
  <RuIcon v-if="loading" type="load-c"></RuIcon>
  <span v-if="$slots.default"><slot></slot></span>
  </button>  
</template>

<script>
import RuIcon from '../../icon'
export default {
  name: 'RuButton',
  components: {
    RuIcon
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    plain: Boolean,
    round: Boolean,
    loading: Boolean,
    disabled: Boolean,
    icon: String,
    circle: Boolean
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>



