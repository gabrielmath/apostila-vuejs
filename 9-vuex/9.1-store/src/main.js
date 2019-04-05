import Vue from 'vue'
import App from './App.vue'
import loja from './loja/raiz';

new Vue({
    el: '#app',
    store: loja,
    render: h => h(App)
})
