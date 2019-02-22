import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/es5/util/colors'


import QuestionaryPlugin from './model/questionary/questionary-plugin';

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: colors.cyan.lighten3, // #E53935
    secondary: colors.cyan.darken3, // #FFCDD2
    accent: colors.indigo.base, // #3F51B5
  },
});

Vue.use(QuestionaryPlugin);

export const bus = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
