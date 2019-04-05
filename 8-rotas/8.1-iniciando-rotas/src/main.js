import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Inicial from './LvInicial';
import Usuarios from './LvUsuarios';
import NovoUsuario from "./LvNovoUsuario";
import Notificacao from "./LvNotificacao";


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
                    component: NovoUsuario
                },
                {
                    path: ':msg',
                    component: Notificacao,
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
