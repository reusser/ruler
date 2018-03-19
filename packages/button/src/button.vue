<template>
  <button
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      'ru-button',
      type ? `ru-button--${type}` : '',
      size ? `ru-button--${size}` : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-loading': loading,
        'is-disabled': disabled
      }
    ]"
  >
  <span v-if="$slots.default"><slot></slot></span>
  </button>  
</template>

<script>
export default {
  name: 'RuButton',
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
    }
  }  
}
</script>



