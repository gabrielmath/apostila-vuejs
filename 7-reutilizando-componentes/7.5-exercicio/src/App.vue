<template>
    <div id="app">
        <lv-painel v-if="!fechado" titulo="Olá" @fechar="confirmar">
            Conteúdo do <strong>painel</strong>
        </lv-painel>
        <p v-if="fechado">{{ 'Painel foi fechado!' | inverte }}</p>
    </div>
</template>

<script>
    import LvPainel from "./LvPainel";
    import formatacao from "./formatacao";
    export default {
        name: 'app',
        components: {LvPainel},
        mixins: [formatacao],
        data() {
            return {
                fechado: false
            }
        },
        methods: {
            confirmar() {
                this.fechado = true
            }
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
