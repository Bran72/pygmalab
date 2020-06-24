<template>
  <div id="app">
    <Toolbar v-if="user !== null" />

    <section id="container">
      <div v-if="user !== null" class="overflow-trick" style="margin-left: 120px">
      </div>
      <div v-else class="overflow-trick">
      </div>
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
  height: 100%;
  min-height: 100vh;
  //max-height: 100vh;

  > section {
    height: 100%;

    &#container {
      position: relative;
      flex: 1;
      padding: 2rem;
      min-height: 100vh;
      //overflow-y: scroll;

      > div {
        height: 100%;
        //min-height: 100%;
        min-height: calc(100vh - 3rem);

        &.overflow-trick {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          border-top-left-radius: 65px;
          border-bottom-left-radius: 65px;
          background-color: $pygmaLabPurple;
          z-index: -1;
        }
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
