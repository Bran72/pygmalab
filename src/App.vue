<template>
  <div id="app">
    <Toolbar v-if="user !== null" />

    <section id="container">
      <div v-if="user !== null" class="overflow-trick" style="margin-left: 120px"></div>
      <div v-else class="overflow-trick"></div>
      <router-view @formSubmitted="isSubmitted" />
      <b-message v-if="form_demande_submitted" title="Success" type="is-success" auto-close :duration=4000>
        Mise en ligne de vos pièces jointes
        <p class="progress_upload">
          <span class="progress_bar_coundown">{{countdown}}%</span>
          <span class="progress_upload_value" :style="{width: countdown + '%'}"></span>
        </p>
      </b-message>
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
        toto: 'toto',
        form_demande_submitted: false,
        countdown: 0
      }
    },
    mounted() {
      if(this.user === null || !this.user?.id)
        this.$router.push('/login')
      // console.log(this.$store.getters.test)
    },
    methods: {
      isSubmitted (value) {
        console.log('event to parent')
        if(value === 'isSubmitted') {
          this.form_demande_submitted = true
          this.countDownTimer()
        }
      },
      countDownTimer() {
        if(this.countdown < 100) {
          setTimeout(() => {
            this.countdown++
            this.countDownTimer()
          }, 30)
        }
      }
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
        min-height: calc(100vh - 4rem);

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

  .message {
    position: fixed;
    top: 2rem;
    right: 2rem;
    max-width: 50%;
  }
}
</style>
