<template>
    <div class="comentario">
        <h4>Comentários de {{ 'artigo X' | maiusculo }}</h4>
    </div>
</template>

<script>
    import postagem from "./postagem";

    export default {
        name: "lv-comentario",
        mixins: [postagem],
        data() {
            return {}
        },
    }
</script>

<style scoped>

</style>
