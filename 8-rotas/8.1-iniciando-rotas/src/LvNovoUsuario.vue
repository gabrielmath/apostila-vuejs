<template>
    <div class="novo-usuario">
        <h1>Novo Usuário</h1>
        <button @click="falhou">Falha</button>
        <button @click="beleza">Sucesso</button>
    </div>
</template>

<script>
    export default {
        name: "lv-novousuario",
        data() {
            return {}
        },
        methods: {
            falhou() {
                this.$router.replace('/usuario/erro');
            },
            beleza() {
                this.$router.replace('/usuario/gabriel');
            }
        }
    }
</script>

<style scoped>

</style>
