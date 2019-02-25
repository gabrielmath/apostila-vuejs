<template>
    <div id="app">
        <h4>Lista 1 - Props como array</h4>
        <lv-lista :lista="['feijão','arroz','carne']"></lv-lista>
        <br>
        <lv-lista :lista="['feijão','arroz','carne']" ordena></lv-lista>
        <br>
        <h4>Lista 2 - Props como objeto</h4>
        <lv-lista2 :lista="['leite','biscoito','bombom','aveia']" ordena></lv-lista2>
        <br>
        <lv-lista2 :lista="['leite','biscoito','bombom','aveia']"></lv-lista2>
    </div>
</template>

<script>
    import LvLista from "./LvLista";
    import LvLista2 from "./LvLista2";
    export default {
        name: 'app',
        components: {LvLista,LvLista2},
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style lang="scss">

</style>
