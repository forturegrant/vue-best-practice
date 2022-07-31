import Vue from 'vue/dist/vue.js'
import App from './App.vue'
// import Test from './components/Test.vue';
import store from './store';
import router from './router';

// new Vue({
//     store,
//     el: '#app',
//     // template: '<App />',
//     // components: { App, 'test': Test },
// });

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
