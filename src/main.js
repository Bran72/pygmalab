import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@mdi/font/css/materialdesignicons.css'
import Buefy from 'buefy'
import VCalendar from 'v-calendar';
import 'buefy/dist/buefy.css'
import 'bulma'

Vue.use(Buefy)
Vue.config.productionTip = false

import users from '../src/assets/global/data/users'
import models from '../src/assets/global/data/models'
import categories from '../src/assets/global/data/categories'

Vue.use(VCalendar);
Vue.use(Buefy);
Vue.config.productionTip = false;

store.dispatch("fetchUsers",  users);
store.dispatch("fetchModels",  models);
store.dispatch("fetchCategories",  categories);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
