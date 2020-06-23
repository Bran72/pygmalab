<template>
  <div id="app">
    <Toolbar />

    <section id="container">
      <router-view/>
      <div class="tile"></div>
    </section>
  </div>
</template>

<script>
  import Toolbar from './components/Toolbar'

  export default {
    components: {
      Toolbar
    },
    data () {
      return {
        toto: 'toto'
      }
    },
    mounted() {
      // console.log(this.$store.getters.test)
    }
  }
</script>

<style lang="scss">
#app {
  display: flex;
  height: 100vh;
  max-height: 100vh;

  > section {
    height: 100%;

    &#container {
      flex: 1;
      background: #F3F6FF;
      border-top-left-radius: 65px;
      border-bottom-left-radius: 65px;
    }
  }

  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $pygmaLabPurple;

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
}
</style>
