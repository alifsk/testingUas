import Vue from 'vue';
import * as firebase from 'firebase';
import store from './store';
import App from './App.vue';
import router from './router';
import '@/plugins';


Vue.config.productionTip = false

const configOptions = {
  apiKey: "AIzaSyCIXg_X-__A0VlXIEbuQg3tI7ruOP4GZS0",
  authDomain: "vueuas.firebaseapp.com",
  databaseURL: "https://vueuas.firebaseio.com",
  projectId: "vueuas",
  storageBucket: "vueuas.appspot.com",
  messagingSenderId: "472188320573",
  appId: "1:472188320573:web:f17c3a1820c8d1a49da354",
  measurementId: "G-4J5VKMZGWR"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
