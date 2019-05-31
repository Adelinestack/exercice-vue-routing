import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/Home';
import Department from './components/Department';
import ArtObject from './components/ArtObject';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  {
    path: '/department/:id',
    name: 'department',
    component: Department,
    props: true,
  },
  { path: '/object/:id', name: 'object', component: ArtObject, props: true },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
