<template>
    <div id="app">
        <home-page></home-page>
    </div>
</template>

<script>
    import HomePage from "@/components/pages/HomePage";
    
    export default {
      components: {
        HomePage
      }
    }
</script>

<style>
    body, html {
        margin: 0;
        padding: 0;
    }
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }
</style>
