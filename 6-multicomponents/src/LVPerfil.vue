<template>
    <div id="app">
        <h3>Perfil</h3>
        <p>Time: {{ nome }}</p>
        <p>Estádio: {{ estadio }}</p>
    </div>
</template>

<script>
    export default {
        name: "lv-perfil",
        data() {
            return {
                nome: 'Corinthians',
                estadio: 'Itaquerão',
            }
        },
    }
</script>

<style scoped>

</style>
