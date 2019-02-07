import Vue from 'vue';
import App from './App.vue';
import router from './router';

// TODO remove if not working
import QuestionaryPlugin from './model/questionary/questionary-plugin';

Vue.config.productionTip = false;

// TODO remove if not working
Vue.use(QuestionaryPlugin);

export const bus = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
