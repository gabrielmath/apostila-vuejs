<template>
    <div id="app">
        <input v-model="nome" type="text">
        <small v-text="status"></small>
        <div v-if="status == ''">
            {{ nome | valorMaiusculo }} tem
            {{ nomeCaracteres }} caracteres
        </div>
        <br>
        <button @click="alertaOla()" >Hello!</button>
    </div>
</template>

<script>
    export default {
        name: "Exercicios5",
        data () {
            return {
                nome: '',
                status: 'Digite seu nome acima',
            }
        },
        methods: {
            alertaOla() {
                alert(`Olá, ${this.nome}`);
            },
            respostaStatus() {
                let valor = this.status;
                setTimeout(() => {
                    if(valor == this.status)
                        this.status = '';
                }, 500);
            }
        },
        watch: {
            nome: function (novoValor, valorAntigo) {
                this.status = 'Recebendo seu nome...';
                this.respostaStatus();
            }
        },
        filters: {
            valorMaiusculo ( valor ){
                return valor.toUpperCase();
            }
        },
        computed:{
            nomeCaracteres: {
                get: function(){
                    return this.nome.length;
                }
            }
        }
    }
</script>

<style scoped>

</style>
