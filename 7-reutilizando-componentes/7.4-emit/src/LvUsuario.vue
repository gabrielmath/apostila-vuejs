<template>
    <div class="usuario">
        <small>{{ nome }}</small>
        <input v-model="mensagem" type="text">
        <button @click="enviar">Enviar</button>
    </div>
</template>

<script>
    export default {
        name: "lv-usuario",
        props: ['nome'],
        data() {
            return {
                mensagem: '',
            }
        },
        methods: {
            enviar() {
                this.$emit('novaMsg', this.nome + ': ' + this.mensagem);
                this.mensagem = '';
            }
        }
    }
</script>

<style scoped>

</style>
