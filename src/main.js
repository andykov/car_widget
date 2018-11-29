import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vueCustomElement from 'vue-custom-element'

Vue.config.productionTip = false

// без custom
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

// с custom
Vue.use(vueCustomElement)

App.store = store
App.router = router
Vue.customElement('vue-widget', App)
