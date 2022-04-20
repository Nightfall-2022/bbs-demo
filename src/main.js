import Vue from 'vue'
import App from './App.vue'
import { Tabbar, TabbarItem } from 'vant';
import router from '@/router'

Vue.use(Tabbar);
Vue.use(TabbarItem);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
