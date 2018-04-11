import MessageBase from './message.vue'
import Vue from 'vue'

const MessageConstructor = Vue.extend(MessageBase)

const typeMap = ['loading', 'success', 'error', 'info', 'warning']

const Message = function(options) {
  options = options || {}
  if (typeof options === 'string') options = {message: options}
  const instance = new MessageConstructor({data: options})
  instance.vm = instance.$mount()
  instance.dom = instance.vm.$el
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instance.dom.style.top = '16px'
  return instance.vm
}

typeMap.forEach(item => {
  Message[item] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = item
    return Message(options)
  }
})

export default Message
