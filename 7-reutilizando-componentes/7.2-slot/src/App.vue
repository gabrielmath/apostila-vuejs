<template>
    <div id="app">
        <lv-cartao titulo="Preço">
            Aqui você encontra preços <strong>baixos</strong>
            <div slot="rodape">
                Meu conteúdo de Rodapé
            </div>
        </lv-cartao>
        <lv-cartao titulo="Qualidad">
            Temos os produtos com a maior <strong>qualidade</strong> do mercado
            <div slot="rodape">
                Meu conteúdo de Rodapé
            </div>
        </lv-cartao>
    </div>
</template>

<script>
    import LvCartao from "./LvCartao";
    export default {
        name: 'app',
        components: {LvCartao},
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style lang="scss">

</style>
