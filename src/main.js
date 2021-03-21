import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-router';  // router-config
import App from './App.vue';
import { routes } from './routes';    // router-config

Vue.use(VueRouter);                   // router-config

// router-config
const router = new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  el: "#app",
  router,                             // router-config
  render: h => h(App)
});
