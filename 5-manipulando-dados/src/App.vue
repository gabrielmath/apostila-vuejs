<template>
    <div id="app">
        <p>{{ total }}</p>
        <button @click="calcula('-')"> - </button>
        <button @click="calcula('+')"> + </button>
        <br><br><br>
        <p>Nome iniciado: {{ nome }}</p>
        <p>Nome filtrado: {{ nome | formataNome }}</p>
        <br>
        <p>Nome Computado: {{ nomeFormatado }}</p>
        <label>Input a computar</label>
        <input v-model="nomeFormatado" type="text">
        <br><br><br>
        <input v-model="busca" type="text">
        <p v-text="resultado"></p>
        <hr>
        <exercicios5></exercicios5>
    </div>
</template>

<script>
    import Exercicios5 from "./Exercicios5";
    export default {
        name: 'lv-contador',
        components: {Exercicios5},
        data() {
            return {
                total: 10,
                nome: 'josé antônio',
                resultado: '',
                busca: ''
            }
        },
        watch:{
            busca: function(novoValor, valorAntigo) {
                this.resultado = 'Aguardando o término da digitação...'
                this.recolheResposta();
            }
        },
        methods: {
            calcula(sinal) {
                this.total = (sinal === '-') ? this.total - 1 : this.total + 1;
            },
            recolheResposta() {
                let valor = this.busca;
                setTimeout(() => {
                    if(valor == this.busca)
                        this.resultado = 'Terminou de digitar.'
                }, 500)
            }
        },
        filters: {
            formataNome( valor ) {
                console.log('executando filter formataNome');
                valor = valor.toLowerCase();
                let cortar = valor.split(' ');
                let resultado = '';

                for (let nome of cortar) {
                    resultado += nome.charAt(0).toUpperCase() + nome.slice(1) + ' '
                }

                return resultado;
            }
        },
        computed: {
            nomeFormatado: {
                get: function() {
                    console.log('executando computed nomeFormatado');
                    return this.nome.toUpperCase();
                },
                set: function(novoValor) {
                    this.nome = novoValor.substr(0, 3);
                }
            }
        }
    }
</script>

<style lang="scss">

</style>
