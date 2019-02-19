<template>
    <div id="app">
        <h3>Buscando rivais</h3>
        <label>Time:</label>
        <input type="text" v-model="busca">
        <p>Rival: {{ rival(busca) }}</p>
    </div>
</template>

<script>
    export default {
        name: "lv-busca",
        data() {
            return {
                busca: '',
            }
        },
        methods: {
            rival(time) {
                switch (time.toLowerCase()) {
                    case 'cruzeiro':
                        return 'atlético mineiro';
                    case 'santos':
                        return 'são paulo';
                    case 'flamengo':
                        return 'vasco';
                    case 'corinthians':
                        return 'em SP é marmelada';
                    default:
                        return 'não encontrado';
                }
            }
        }
    }
</script>

<style scoped>

</style>
