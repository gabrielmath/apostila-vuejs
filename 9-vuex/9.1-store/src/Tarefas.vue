<template>
    <div>
        <ul>
            <li v-for="tarefa in tarefas">
                <lv-del-tarefa :tarefa="tarefa"></lv-del-tarefa>
                {{ tarefa }}
            </li>
        </ul>
    </div>
</template>

<script>
    import LvDelTarefa from "./DelTarefa";
    import {mapGetters} from 'vuex';
    export default {
        name: "Tarefas",
        components: {LvDelTarefa},
        data() {
            return {}
        },
        computed: {
            /*tarefas() {
                return this.$store.getters.listaTarefas;
            }*/
            ...mapGetters({
                tarefas: 'listaTarefas'
            })
        }
    }
</script>

<style scoped>

</style>
