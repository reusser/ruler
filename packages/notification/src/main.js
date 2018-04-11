import Vue from 'vue'
import notificationBase from './notification.vue'

const NotificationConstructor = Vue.extend(notificationBase)

const typeArr = ['success', 'info', 'warning', 'error']

const instances = []
let index = 1

const Notification = function(options) {
  options = options || {}
  const id = `ru-notification_${index++}`
  let closeFuncProps = options.onClose
  options.onClose = () => {
    Notification.close(id, closeFuncProps)
  }
  const instance = new NotificationConstructor({
    data: options
  })
  instance.vm = instance.$mount()
  instance.dom = instance.vm.$el
  document.body.appendChild(instance.vm.$el);
  instance.id = id
  instance.vm.visible = true;
  let topOffset = options.topOffset || 0
  instances.forEach(item => topOffset += item.$el.offsetHeight + 16)
  topOffset += 16
  instance.topOffset = topOffset
  instances.push(instance)
  return instance.vm
}

typeArr.forEach(type => {
  Notification[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Notification(options)
  }
})

Notification.close = function(id, func) {
  if (instances.length === 0) return
  let targetIndex = -1
  const [target] = instances.filter((item, index) => {
    if (item.id === id) {
      targetIndex = index
      return true
    }
    return false
  })
  
  if (!target) return
  if (typeof func === 'function') func(target)
  instances.splice(targetIndex, 1)
  
  let len = instances.length
  if (len === 0) return

  const offsetHeight = target.dom.offsetHeight
  for (let i = targetIndex; i < len; i++) {
    instances[i].dom.style.top = `${parseInt(instances[i].dom.style.top, 10) - offsetHeight - 16}px`
  }
}

export default Notification