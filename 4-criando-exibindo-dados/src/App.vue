<template>
    <div id="app">
        <!--<img src="./assets/logo.png">
        <h1>{{ msg }}</h1>-->
        <h1 v-once v-text="titulo"></h1>
        <h2>{{ subtitulo }}</h2>
        <div v-if="tarefas.length <= 0">
            Não há tarefas
        </div>
        <div v-if="tarefas.length > 0">
            Existem {{ tarefas.length }} tarefas
            <br>
            <ul>
                <li v-for="tarefa in tarefas">{{ tarefa }}</li>
            </ul>
        </div>
        <input :disabled="tarefas.length === 0" v-model="subtitulo" type="text" placeholder="Descrição">
        <br>
        <button @click="tarefas = []">Limpar</button>
        <hr>
        <exercicios4></exercicios4>
    </div>
</template>

<script>
    import Exercicios4 from "./Exercicios4";
    export default {
        name: 'lv-tarefas',
        components: {Exercicios4},
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                titulo: 'Listagem de tarefas',
                subtitulo: 'Defina uma descrição',
                tarefas: []
            }
        },
        mounted() {
            setTimeout(() => {
                this.titulo = 'Novo Título';
                this.tarefas = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3', 'Tarefa 4'];
            }, 2000)
        }
    }
</script>

<style lang="scss">
    /*#app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }

    h1, h2 {
      font-weight: normal;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      display: inline-block;
      margin: 0 10px;
    }

    a {
      color: #42b983;
    }*/
</style>
