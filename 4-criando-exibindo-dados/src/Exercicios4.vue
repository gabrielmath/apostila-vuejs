<template>
    <div id="app">
        <h2>Exercícios Cap. 4</h2>
        <div v-text="nome"></div>
        <small v-once="nome" v-if="mostrarSmall">{{ nome }}</small>
        <br>
        <button :disabled="nome === 'Mané Garrincha'" @click="mostrarSmall = !mostrarSmall">Mostrar/Ocultar Small</button>
        <br>
        <input v-model="nome">
        <br>
        <ul>
            <li v-for="cadeira in cadeiras">{{ cadeira }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Exercicios4",
        data () {
            return {
                nome: 'Mané Garrincha',
                mostrarSmall: true,
                cadeiras: [
                    '30.000 brancas',
                    '30.000 cinzas',
                    '10.000 vips'
                ]
            }
        },
        mounted() {
            setTimeout(() => {
                this.nome = 'Mineirão';
            }, 4000)
        }
    }
</script>

<style scoped>

</style>
