<template>
    <div><button @click="apagar(tarefa)">D</button></div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "lv-delTarefa",
        props: {
            tarefa: {
                required: true,
                type: String
            }
        },
        methods: {
            /*apagar() {
                // this.$store.commit('DEL_TAREFA', this.tarefa);
                this.$store.dispatch('removerTarefa', this.tarefa);
            }*/
            ...mapActions({
                apagar: 'removerTarefa'
            })
        },
        data() {
            return {}
        },
    }
</script>

<style scoped>

</style>
