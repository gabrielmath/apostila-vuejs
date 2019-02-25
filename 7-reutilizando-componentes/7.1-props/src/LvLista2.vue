<template>
    <div id="app">
        <ul>
            <li v-for="item in lista">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "lv-lista2",
        props: {
            ordena: null,
            lista:{
                required: true,
                type: Array,
                default: []
            }
        },
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
