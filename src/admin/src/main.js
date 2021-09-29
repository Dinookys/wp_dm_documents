import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from './store'
import VueMask from 'v-mask';


//CUSTOm
import dmIcon from './components/dm-icon';
import dmButton from './components/dm-button';
import dmLoading from './components/dm-loading';
import dmActions from './components/dm-actions';
import dmDocument from './components/dm-document';
import dmSidebarCategory from './components/dm-sidebar-category';
import dmNotificationAlert from './components/dm-notification-alert';
import dmNotice from './components/dm-notice';

require("./api");
require("./filters/index");

Vue.use(VueMask);

Vue.component('dm-icon', dmIcon);
Vue.component('dm-button', dmButton);
Vue.component('dm-loading', dmLoading);
Vue.component('dm-actions', dmActions);
Vue.component('dm-document', dmDocument);
Vue.component('dm-sidebar-category', dmSidebarCategory);
Vue.component('dm-notification-alert', dmNotificationAlert);
Vue.component('dm-notice', dmNotice);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#dm-document')
