<template>
    <div class="leitor">
        <h1>Lendo {{ 'artigo X' | maiusculo }}</h1>
    </div>
</template>

<script>
    import postagem from "./postagem";

    export default {
        name: "lv-leitor",
        mixins: [postagem],
        data() {
            return {}
        },
        filters: {
            maiusculo: (valor) => {
                return valor.toUpperCase()+' Postagem';
            }
        }
    }
</script>

<style scoped>

</style>
