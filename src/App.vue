<template>
  <div id="app">
    <Toolbar v-if="user !== null" />

    <section id="container">
      <router-view/>
    </section>
  </div>
</template>

<script>
  import Toolbar from './components/Toolbar'
  import {mapGetters} from "vuex";

  export default {
    components: {
      Toolbar
    },
    computed: {
        ...mapGetters({
          user: 'user'
        })
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
      border-top-left-radius: 65px;
      border-bottom-left-radius: 65px;
      background-color: $pygmaLabPurple;
      padding: 2rem;
      overflow-y: scroll;

      > div {
        height: auto;
      }
    }
  }

  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

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
