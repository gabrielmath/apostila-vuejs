<template>
    <div class="painel">
        <h1>{{ titulo | inverte }}</h1>
        <slot></slot>
        <button @click="notifica">Fechar</button>
    </div>
</template>

<script>
    import formatacao from "./formatacao";

    export default {
        name: "lv-painel",
        props: ['titulo'],
        mixins: [formatacao],
        data() {
            return {
                dados: 'Painel de notificação foi fechado.'
            }
        },
        methods: {
            notifica() {
                this.$emit('fechar');
            }
        }
    }
</script>

<style scoped>

</style>
