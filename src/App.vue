<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
</script>

<style lang="scss">
    @import './src/styles/_fontFaces.scss';
    
    body, html {
        margin: 0;
        padding: 0;
    }
    #app {
      font-family: FuturaGreek, serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
</style>
