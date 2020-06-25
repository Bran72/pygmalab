<template>
  <div id="newmodel">
    <header>
      <h1>Besoin d'un nouveau modèle ? <br />Faites une demande de modélisation 3D !</h1>
    </header>
    <div class="form_newmodel">
      <div class="form_new_timeline">
        <div class="timeline">
          <div class="timeline_title">
            <p><a @click="step = 0" :class="{'isActive': step === 0, 'isNotDisabled': step === 1}">Informations</a></p>
            <p><a @click="step = 1" :class="{'isActive': step === 1, 'isNotDisabled': step !== 2}">Fichiers</a></p>
            <p><a @click="step = 2" :class="{'isActive': step === 2, 'isDisabled': isDisabled}">Envoi</a></p>
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
                        v-model="model.nom"
                        placeholder="Le nom du modèle"
                        rounded
                        required
                       ></b-input>
              </b-field>
              <b-field label="SKU*">
                <b-input
                        type="text"
                        v-model="model.sku"
                        placeholder="Le SKU est l'identifiant unique du modèle"
                        required
                        rounded></b-input>
              </b-field>
              <div class="form_inline form_categ_section">
                <b-field label="Catégorie*">
                  <b-select
                    v-model="model.category"
                    placeholder="Choisir une catégorie"
                    expanded>
                    <option
                        v-for="(category, index) in categories[0]"
                        :value="category"
                        :key="index">{{ category.name }}</option>
                  </b-select>
                </b-field>
                <b-field v-if="model.category === 'Autres'" label="Autre catégorie">
                  <b-input
                          type="text"
                          v-model="model.customCategory"
                          placeholder="Votre catégorie"
                          required
                          rounded></b-input>
                </b-field>
              </div>
              <b-field label="Description">
                <b-input
                        type="textarea"
                        v-model="model.details.description"
                        placeholder="Décrivez-nous votre projet en quelques lignes : Description du modèle, type de modélisation, etc."
                        required
                        rounded></b-input>
              </b-field>
            </form>
          </div>
          <div class="form_right">
            <div class="form_inline form_dim_section">
              <b-field label="Hauteur*">
                <b-input
                        type="number"
                        v-model="model.details.dimensions.width"
                        required
                        rounded></b-input>
              </b-field>
              <b-field label="Largeur*">
                <b-input
                        type="number"
                        v-model="model.details.dimensions.height"
                        required
                        rounded></b-input>
              </b-field>
              <b-field label="Profondeur*">
                <b-input
                        type="number"
                        v-model="model.details.dimensions.depth"
                        required
                        rounded></b-input>
              </b-field>
            </div>
            <b-field label="Matériaux" class="material">
              <b-taginput
                  v-model="model.details.materials"
                  ellipsis
                  type="is-info"
                  icon="label"
                  placeholder="Ajouter des matériaux">
              </b-taginput>
            </b-field>
            <b-field label="Date de rendu souhaitée*">
              <b-datepicker
                      v-model="model.dateDeadline"
                      placeholder="Choisir une date..."
                      icon="calendar-today"
                      position="is-top-right"
                      :min-date="minDate"
                      trap-focus>
              </b-datepicker>
            </b-field>
          </div>
        </div>
        <div class="form_bottom">
          <b-button type="is-primary" @click="confirmStep">Suivant</b-button>
        </div>
      </div>
      <div v-else-if="step === 1" class="form_content form_content_files">
        <div class="form_top">
          <template>
            <section>
              <b-field>
                <b-upload
                  v-model="model.files.gtlf"
                  multiple
                  drag-drop>
                  <section class="section">
                    <div class="content has-text-centered">
                      <p>
                        <b-icon
                          icon="upload"
                          size="is-large">
                        </b-icon>
                      </p>
                      <p>Glissez / déposez vos fichiers ici <br />
                        <span>La qualité de vos fichiers sera examinée</span>
                      </p>
                    </div>
                  </section>
                </b-upload>
              </b-field>
            </section>
          </template>
        </div>
        <div class="form_bottom">
          <div class="tags">
            <span
                v-for="(file, index) in model.files.gtlf"
                :key="index"
                class="tag is-primary" >
                {{file.name}}
                <button
                  class="delete is-small"
                  type="button"
                  @click="deleteDropFile(index)"></button>
            </span>
          </div>
          <b-button type="is-primary" @click="confirmStep('confirm')">Valider la demande</b-button>
        </div>
      </div>
      <div v-else class="form_confirmation">
        <div class="form_msg_thx">
          <p>Merci de votre confiance !</p>
        </div>
        <div class="form_msg_content">
          <p class="was_send">Votre projet à été envoyé</p><br />
          <p class="come_back">Nous reviendrons vers vous dans les plus brefs délais</p>
          <p class="sending">Vos fichiers sont en cours d'envoi / envoyés</p>
          <i class="mdi mdi-check-circle"></i>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import moment from 'moment'
  import { mapGetters } from 'vuex'
  import store from "../store";

  export default {
    data () {
      return {
        step: 0,
        minDate: new Date(),
        isSubmitted: false,
        isDisabled: false,

        model: {
          id: Math.floor(Math.random() * Math.floor(1000000)),
          nom: '',
          sku: '',
          category: null,
          customCategory: null,
          details: {
            description: '',
            dimensions: {
              width: 0,
              depth: 0,
              height: 0
            },
            materials: [],
            scale: 1,
            url: ''
          },
          photos: ['link1', 'link2'],
          files: {
            gtlf: null,
            photos: ['link1', 'link2'],
            android: ['link1', 'link2'],
            ios: ['link1', 'link2'],
            rendered: ['link1', 'link2'],
            igs: ['link1', 'link2'],
            dsmax: ['link1', 'link2']
          },
          status: {
            name: 'En attente',
            class: 'enattente',
            imgUrl: 'enattente.svg'
          },
          clientId: null,
          freelanceId: null,
          dateCreation: moment().format('DD/MM/YYYY'),
          dateDeadline: null,
        }
      }
    },
    computed: {
      ...mapGetters({
        categories: 'categories',
        user: 'user',
      }),
    },
    methods: {
      confirmStep: function (action = '') {
        if(action === 'confirm') {
          this.$buefy.dialog.confirm({
            message: 'Êtes-vous certain de vouloir soumettre votre demande ?',
            type: 'is-warning',
            onConfirm: () => {
              this.step += 1
              this.isDisabled = true
              this.isSubmitted = true
              this.$emit('formSubmitted', 'isSubmitted')

              // Adding model to store
              this.model.clientId = this.user.id
              this.model.dateDeadline = moment(this.model.dateDeadline).format('DD/MM/YYYY')
              store.dispatch("addModel",  this.model);
            }
          })

          setTimeout(() => {
            this.$buefy.toast.open({
              message: 'Votre demande a bien été envoyée !',
              type: 'is-success'
            });
          }, 6000)
        } else {
          this.step += 1
          if(this.step === 2) this.isDisabled = true
        }
      },
      deleteDropFile(index) {
        this.model.files.gtlf.splice(index, 1)
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
          pointer-events: none;

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
      //min-height: 620px;
      min-height: 700px;
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
        padding: 0 8%;

        h2 {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .form_top {
          display: flex;
          //justify-content: flex-start;
          justify-content: center;
          > div {
            flex-basis: 50%;
            max-width: 640px;
            min-width: 280px;
            &:first-child {padding-right: 5%;}
            &:last-child {padding-left: 5%;}
          }

          .form_inline {
            display: flex;
            justify-content: space-between;
            input:not(:last-child) {margin-right: 1rem}
          }
          .form_categ_section > div {flex-basis: 50%}
        }

        .form_bottom {
          //margin-top: 2rem;
          text-align: right;
        }

        &.form_content_files {
          flex: 12;
          display: flex;
          flex-direction: column;

          .upload {width: 100%}
          section {width: 80%}
          section.section {width: 100%}

          > div:not(.form_bottom) {
            flex: 1;
            margin-top: 4rem;
          }
          > div.form_bottom {
            .tags {margin-bottom: 3rem}
          }
        }
      }

      > .form_confirmation {
        flex: 20;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-top: 4rem;

        .form_msg_thx {
          flex: 2
        }
        .form_msg_content {
          flex: 3;
          .was_send {font-size: 3rem; font-weight: bold}
          .come_back {font-size: 1.75rem}
          .sending {font-size: .85rem; font-style: italic}
        }

        i {
          font-size: 8rem;
          color: #52D484;
        }
      }
    }

    .content {
      display: flex;
      height: 100%;
      padding-bottom: 5%;
    }

    .message {
      position: fixed;
      top: 2rem;
      right: 2rem;
      max-width: 50%;
    }

    .isNotDisabled {pointer-events: auto !important}
  }
</style>

<style lang="scss">
  .form_newmodel {
    input, textarea, select {
      color: #2c3e50;
      background: transparent !important;
      box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.1) !important;
      margin-bottom: 1rem;
    }
    .taginput {
      color: #2c3e50;
      background: transparent !important;
      box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.1) !important;
      margin-bottom: 1rem;
      input {
        box-shadow: none !important;
      }
    }
    .taginput .taginput-container.is-focusable {background: transparent}

    .field .help {
      margin: -1rem auto 1rem;
    }

    .form_categ_section {
      > div {margin-bottom: .75rem !important}
    }
    .form_inline {
      > div:not(:last-child) {margin-right: 2rem}
    }
    .form_dim_section {
      > div {max-width: 120px}
    }

    .select {margin-bottom: 1rem; min-width: 150px}

    .material > div {margin-bottom: 1.75rem}

    .upload-draggable {
      width: 100%;
      .content {
        display: flex;
        flex-direction: column;

        p > span {
          font-size: .75rem;
          font-style: italic;
        }
      }
    }
  }

  .progress_upload {
    position: relative;
    width: 360px;
    height: 16px;
    background: #DBDBDB;
    margin-top: 12px;
    border-radius: 40px;

    > span {
      &.progress_upload_value {
        position: absolute;
        width: 80%;
        top: 0;
        left: 0;
        height: 16px;
        border-radius: 40px;
        background: #52D484;
      }
      &.progress_bar_coundown {
        position: absolute;
        top: 0;
        left: 45%;
        font-size: 12px;
        font-weight: bold;
        color: #fff;
        z-index: 1;
      }
    }
  }

  @media screen and (max-width: 1300px) {
    .form_newmodel {
      .form_dim_section {
        > div {
          max-width: 110px;
        }
      }
    }
  }

  @media screen and (max-width: 1150px) {
    .form_newmodel {
      > .form_content {
        margin-top: 2rem;
        padding: 0 2rem !important;
      }
      .form_inline {flex-wrap: wrap}
      .form_dim_section {
        > div {
          max-width: 80px;
        }
      }
    }
  }
</style>