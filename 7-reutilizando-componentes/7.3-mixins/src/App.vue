<template>
    <div id="app">
        <lv-leitor></lv-leitor>
        ...
        <lv-comentario></lv-comentario>
    </div>
</template>

<script>
    import LvLeitor from "./LvLeitor";
    import LvComentario from "./LvComentario";
    export default {
        name: 'app',
        components: {LvComentario, LvLeitor},
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
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
