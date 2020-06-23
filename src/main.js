import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import VCalendar from 'v-calendar';
import 'buefy/dist/buefy.css'
import 'bulma'

Vue.use(Buefy)
Vue.config.productionTip = false

import users from '../src/assets/global/data/users'

Vue.use(VCalendar);
Vue.use(Buefy);
Vue.config.productionTip = false;

store.dispatch("fetchUsers",  users);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
