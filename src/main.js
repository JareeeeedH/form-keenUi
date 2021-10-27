import Vue from 'vue'
import App from './App.vue'

import KeenUI from 'keen-ui';
import 'keen-ui/dist/keen-ui.css';

Vue.use(KeenUI);



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
