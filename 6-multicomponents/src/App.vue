<template>
    <div id="app">
        <lv-busca></lv-busca>
        <hr>
        <lv-perfil></lv-perfil>
        <h1>Para ver os exercíos, substitua no arquivo "main.js" de "App" para "LVTime"</h1>
    </div>
</template>

<script>
    import LVTime from "./LVTime";
    import LvBusca from "./LVBusca";
    import LvPerfil from "./LVPerfil";
    export default {
        name: 'App',
        components: {LvPerfil, LvBusca, LVTime},
        data() {
            return {

            }
        },
    }
</script>

<style lang="scss">

</style>
