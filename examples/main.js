// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ruler from '../packages/index'
import code from './components/code.vue'
import '../packages/theme-style/index.scss'

Vue.config.productionTip = false

Vue.use(ruler)
Vue.component(code.name, code)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
