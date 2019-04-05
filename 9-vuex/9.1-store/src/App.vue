<template>
    <div id="app">
        <busca></busca>
        <lv-add-tarefa></lv-add-tarefa>
        <tarefas></tarefas>
    </div>
</template>

<script>
    import LvAddTarefa from "./AddTarefa";
    import Tarefas from "./Tarefas";
    import Busca from "./Busca";
    import {mapState} from 'vuex';
    export default {
        name: 'app',
        components: {Busca, Tarefas, LvAddTarefa},
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        computed:{
            ...mapState(['nome'])
        }
    }
</script>

<style lang="scss">

</style>
