<template>
  <div id="newmodel">
    <header>
      <h1>Besoin d'un nouveau modèle ? <br />Faites une demande de modélisation 3D !</h1>
    </header>
    <div class="form_newmodel">
      <div class="form_new_timeline">
        <div class="timeline">
          <div class="timeline_title">
            <p><a @click="step = 0" :class="{'isActive': step === 0}">Informations</a></p>
            <p><a @click="step = 1" :class="{'isActive': step === 1}">Fichiers</a></p>
            <p><a @click="step = 2" :class="{'isActive': step === 2}">Envoi</a></p>
          </div>
          <div :class="['step-'+step, 'timeline_bar']"></div>
        </div>
      </div>
      <div class="form_content">
        <p>Informations générales</p>

        <div class="form_top">
          <div class="form_left">
          </div>
          <div class="form_right">
          </div>
        </div>
        <div class="form_bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewModel',
    data () {
      return {
        step: 0,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .timeline {
    width: 60%;
    .timeline_title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
      color: #D6D8DD;
      > p {
        flex-basis: 33.333%;
        a {
          font-size: 1.25rem;
          font-weight: bold;
          color: #D6D8DD;
          transition: color .75s ease-in-out;

          &.isActive {
            color: #69F2A9;
          }
        }
      }
    }
    .timeline_bar {
      width: 100%;
      height: 5px;
      background: #D6D8DD;
      border-radius: 50px;
      &:after {
        content: "";
        display: block;
        background: #69F2A9;
        width: 33.33%;
        height: 5px;
        border-radius: 50px;
        margin-left: 0;
        transition: margin-left .25s ease-in-out;
      }
      &.step-1:after {margin-left: 33.333%}
      &.step-2:after {margin-left: 66.666%}
    }
  }

  #newmodel {
    display: flex;
    flex-direction: column;

    header {
      margin-bottom: 1rem;
      h1 {font-weight: bold; font-size: 1.5rem}
    }

    .form_newmodel {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: 1;
      height: 100%;
      background-color: $pygmaLabPurple;
      box-shadow: -28px -28px 50px #FFFFFF, 28px 28px 50px #D1D9E6;
      border-radius: 40px;
      padding: 2rem;
      margin: 2rem;

      > .form_new_timeline {
        flex: 1;
        display: flex;
        justify-content: center;
        width: 100%;
      }

      > .form_content {
        flex: 5;
      }
    }

    .content {
      display: flex;
      height: 100%;
      padding-bottom: 5%;
    }
  }
</style>