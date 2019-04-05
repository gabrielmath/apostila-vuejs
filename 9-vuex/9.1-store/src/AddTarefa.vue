<template>
    <div>
        <input type="text" v-model="tarefa">
        <button @click="submeterTarefa">Adicionar</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "lv-addTarefa",
        data() {
            return {
                tarefa: ''
            }
        },
        methods: {
            /*adicionar() {
                if(this.tarefa != '') {
                    // this.$store.commit('ADD_TAREFA', this.tarefa);
                    this.$store.dispatch('adicionarTarefa', this.tarefa);
                }
                this.tarefa = '';
            }*/
            ...mapActions({
                adicionar: 'adicionarTarefa'
            }),
            submeterTarefa() {
                if(this.tarefa != ''){
                    this.adicionar(this.tarefa);
                }
                this.tarefa = '';
            }
        }
    }
</script>

<style scoped>

</style>
