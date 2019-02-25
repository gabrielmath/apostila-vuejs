<template>
    <div id="app">
        <ul>
            <li v-for="item in lista">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "lv-lista",
        props: ['lista', 'ordena'],
        created() {
            if(typeof this.ordena != 'undefined'){
                this.lista.sort();
            }
        },
        data() {
            return {}
        },
    }
</script>

<style scoped>

</style>
