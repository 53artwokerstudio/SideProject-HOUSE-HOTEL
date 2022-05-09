import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from 'axios';
import VueAxios from 'vue-axios';

import VCalendar from 'v-calendar';

import "./assets/css/style.min.css";
import "./assets/tailwind.css";

Vue.config.productionTip = false;

Vue.use( VueAxios , axios)

const conf = {
  baseURL: process.env.VUE_APP_AXIOS_BASEURL,
};
axios.create(conf);


Vue.use(VCalendar, {
  componentPrefix: 'vc', 
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");