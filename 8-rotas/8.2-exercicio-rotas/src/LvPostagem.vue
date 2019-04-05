<template>
    <div>
        <h3>Postagem {{ id }}</h3>
        <router-link to="/postagens/comentarios">Comentários</router-link>
    </div>
</template>

<script>
    export default {
        name: "lv-postagem",
        props: ['id'],
    }
</script>

<style scoped>

</style>
