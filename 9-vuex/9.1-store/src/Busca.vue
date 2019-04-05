<template>
    <div>
        <label for="">Busca por</label>
        <input type="text" v-model="termo">
        <ul>
            <li v-for="tarefa in resultado(termo)">{{ tarefa }}</li>
        </ul>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "busca",
        data() {
            return {
                termo: ''
            }
        },
        computed: {
            /*resultado() {
                return this.$store.getters.buscaTarefas(this.termo);
            }*/
            ...mapGetters({
                resultado: 'buscaTarefas'
            })
        }
    }
</script>

<style scoped>

</style>
