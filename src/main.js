import Vue from 'vue'
import App from './App.vue'
import LhButton from './components/button.vue'
import './assets/iconfont/iconfont.css'
Vue.config.productionTip = false

Vue.component(LhButton.name, LhButton)
new Vue({
  render: h => h(App)
}).$mount('#app')
