<template>
    <div id="app">
        <lv-usuario nome="Filomena" @novaMsg="escrever"></lv-usuario>
        <lv-usuario nome="Zé" @novaMsg="escrever"></lv-usuario>
        <br>
        <div v-html="chat"></div>
    </div>
</template>

<script>
    import LvUsuario from "./LvUsuario";
    export default {
        name: 'app',
        components: {LvUsuario},
        data() {
            return {
                chat: '',
            }
        },
        methods: {
            escrever(mensagem) {
                this.chat = mensagem + '<hr>' + this.chat;
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
