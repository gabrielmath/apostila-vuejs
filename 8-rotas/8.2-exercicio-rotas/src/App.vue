<template>
    <div id="app">
        <router-link to="/">Home</router-link>
        <router-link to="/postagens">Postagens</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    import LvHome from "./LvHome";
    export default {
        name: 'app',
        components: {LvHome},
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style lang="scss">

</style>
