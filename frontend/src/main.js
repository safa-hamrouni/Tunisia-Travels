import axios from 'axios';
import * as firebase from 'firebase/app';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'firebase/analytics';
import 'firebase/auth';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyBx1t_VN7ghcFQnP1EqU3jCtitjRh2UdtU',
  authDomain: 'tunisia-travels.firebaseapp.com',
  databaseURL: 'https://tunisia-travels.firebaseio.com',
  projectId: 'tunisia-travels',
  storageBucket: 'tunisia-travels.appspot.com',
  messagingSenderId: '140954481093',
  appId: '1:140954481093:web:62ad45513ff9a472879bac',
  measurementId: 'G-CFX9F3KD1B',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
