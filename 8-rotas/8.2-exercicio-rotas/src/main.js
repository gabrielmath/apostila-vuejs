import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './LvHome';
import Lista from './LvLista';
import Postagem from './LvPostagem';
import Comentario from './LvComentario';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home

        },
        {
            path: '/postagens',
            component: Lista,
            children:[
                {
                    path: 'comentarios',
                    component: Comentario,
                },
                {
                    path: ':id',
                    component: Postagem,
                    props: true,
                }
            ]
        },


    ]
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
