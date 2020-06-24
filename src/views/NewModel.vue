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
      <div v-if="step === 0" class="form_content">
<!--        <h2>Informations générales</h2>-->
        <div class="form_top">
          <div class="form_left">
            <form>
              <b-field label="Nom*">
                <b-input
                        type="text"
                        v-model="form_data.name"
                        placeholder="Le nom du modèle"
                        rounded
                        required
                        @keyup.native.enter="login"></b-input>
              </b-field>
              <b-field label="SKU*">
                <b-input
                        type="text"
                        v-model="form_data.sku"
                        placeholder="Le SKU est l'identifiant unique du modèle"
                        required
                        rounded @keyup.native.enter="login"></b-input>
              </b-field>
              <b-field label="Catégorie*">
                <b-select
                  v-model="form_data.category"
                  placeholder="Select a character"
                  expanded>
                  <option
                    v-for="(category, index) in categories"
                    :value="category"
                    :key="index">{{ category.name }}</option>
                  <option value="flint">Flint</option>
                  <option value="silver">Silver</option>
                </b-select>
              </b-field>
              <b-field label="Description">
                <b-input
                        type="textarea"
                        v-model="form_data.description"
                        placeholder="Décrivez-nous votre projet en quelques lignes : Description du modèle, type de modélisation, etc."
                        required
                        rounded @keyup.native.enter="login"></b-input>
              </b-field>
            </form>
          </div>
          <div class="form_right">
            <div class="form_dimensions">
              <b-field label="Hauteur*">
                <b-input
                        type="number"
                        v-model="form_data.dimensions.x"
                        required
                        rounded @keyup.native.enter="login"></b-input>
              </b-field>
              <b-field label="Largeur*">
                <b-input
                        type="text"
                        v-model="form_data.dimensions.y"
                        required
                        rounded @keyup.native.enter="login"></b-input>
              </b-field>
              <b-field label="Profondeur*">
                <b-input
                        type="text"
                        v-model="form_data.dimensions.z"
                        required
                        rounded @keyup.native.enter="login"></b-input>
              </b-field>
            </div>
            <b-field label="Date de rendu souhaitée*">
              <b-datepicker
                      v-model="form_data.description"
                      placeholder="Choisir une date..."
                      icon="calendar-today"
                      position="is-top-right"
                      trap-focus>
              </b-datepicker>
            </b-field>
          </div>
        </div>
        <div class="form_bottom">
          <b-button @click="login">Se connecter</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'NewModel',
    data () {
      return {
        step: 0,
        form_data: {
          name: '',
          sku: '',
          category: [],
          dimensions: {
            x: 0,
            y: 0,
            z: 0
          }
        }
      }
    },
    computed: {
      ...mapGetters({
        categories: 'categories'
      }),
    },
    methods: {
      login: () => {
      }
    }
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
      min-height: 620px;
      background-color: $pygmaLabPurple;
      box-shadow: -28px -28px 50px #FFFFFF, 28px 28px 50px #D1D9E6;
      border-radius: 40px;
      padding: 2rem;
      margin: 2rem 3rem;

      > .form_new_timeline {
        flex: 3;
        display: flex;
        justify-content: center;
        width: 100%;
      }

      > .form_content {
        flex: 1;
        width: 100%;
        text-align: left;

        h2 {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .form_top {
          display: flex;
          justify-content: flex-start;
          > div {
            flex-basis: 50%;
            max-width: 640px;
            min-width: 480px;
            padding-right: 10%;
          }

          .form_dimensions {
            display: flex;
            justify-content: space-between;
            input:not(:last-child) {margin-right: 1rem}
          }
        }

        .form_bottom {
          margin-top: 2rem;
          text-align: right;
        }
      }
    }

    .content {
      display: flex;
      height: 100%;
      padding-bottom: 5%;
    }
  }
</style>

<style lang="scss">
  .form_newmodel {
    input, textarea {
      color: #2c3e50;
      background: transparent !important;
      box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.1) !important;
      margin-bottom: 1rem;
    }

    .field .help {
      margin: -1rem auto 1rem;
    }

    .form_dimensions {
      > div:not(:last-child) {margin-right: 2rem}
    }
  }
</style>