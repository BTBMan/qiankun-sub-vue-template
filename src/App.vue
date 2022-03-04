<template>
  <RouterLink to="/">home</RouterLink>
  |
  <RouterLink to="/about">about</RouterLink>
  <RouterView></RouterView>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue';
  import { RouterView, RouterLink } from 'vue-router';

  export default {
    name: 'App',
    components: {
      HelloWorld,
      RouterView,
      RouterLink,
    },
    setup() {
      console.log('object', window, window.commonComponent, window.utilTest);
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
