import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'

import vueCustomElement from 'vue-custom-element'

Vue.config.productionTip = false

//#### без custom
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

//### с custom
// Vue.use(vueCustomElement)

// App.store = store
// App.router = router
// Vue.customElement('vue-widget', App)

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
    created() {
        // конфиг Firebase
        var config = {
            apiKey: "AIzaSyCRUHeucePzy9mHYaCFNHye48ByjElzkLg",
            authDomain: "fbcarwidget.firebaseapp.com",
            databaseURL: "https://fbcarwidget.firebaseio.com",
            projectId: "fbcarwidget",
            storageBucket: "fbcarwidget.appspot.com",
            messagingSenderId: "313817778122"
          };
        firebase.initializeApp(config); // инициализация Firebase
    }
})
