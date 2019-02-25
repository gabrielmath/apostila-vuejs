import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Inicial from './LvInicial';
import Usuarios from './LvUsuarios';
import LvNovoUsuario from "./LvNovoUsuario";
import LvNotificacao from "./LvNotificacao";


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Inicial
        },
        {
            path: '/usuarios',
            component: Usuarios,
            children: [
                {
                    path: 'novo',
                    component: LvNovoUsuario
                },
                {
                    path: ':msg',
                    component: LvNotificacao,
                    props: true
                }
            ]
        }
    ]
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
