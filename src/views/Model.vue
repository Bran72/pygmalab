<template>
    <section id="model_fullview">
        <router-link class="close_model" to="" @click.native="goBack">
            <img src="../../public/icons/cross_black.svg" alt="Fermer le modèle">
        </router-link>
        <header class="box-sh-outline">
            <div class="header">
                <div class="header_left">
                    <img class="categoryImg" :src="'/icons/categories/' + model.category.imgUrl" alt="">
                    <div class="titleContainer">
                        <div>
                            <h2>{{ model.nom }}</h2>
                            <div class="modelStatus">
                                <img :src="'/icons/status/' + model.status.imgUrl" alt="">
                                <p :class="model.status.class">{{ model.status.name }}</p>
                            </div>
                        </div>
                        <p>{{ model.category.name }}</p>
                        <p class="dateCreation">Publié le {{ model.dateCreation }}</p>
                    </div>

                </div>
                <div v-if="model.status.name === 'En attente' && user.role === 'Freelance'">
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.88659 16.6603L8.88587 16.6596C6.30081 14.3155 4.19567 12.4057 2.73078 10.6147C1.27162 8.83074 0.5 7.22576 0.5 5.5C0.5 2.69614 2.69614 0.5 5.5 0.5C7.08861 0.5 8.62112 1.24197 9.61932 2.41417L10 2.8612L10.3807 2.41417C11.3789 1.24197 12.9114 0.5 14.5 0.5C17.3039 0.5 19.5 2.69614 19.5 5.5C19.5 7.22577 18.7284 8.83077 17.2691 10.6161C15.8065 12.4055 13.7058 14.3144 11.1265 16.6583L11.1148 16.669L11.1137 16.67L10.0013 17.675L8.88659 16.6603Z" stroke="black"/>
                    </svg>
                    <div class="acceptButton" @click="acceptModel(model.id)">J'accepte</div>
                </div>
            </div>
            <p class="dateDeadline">Date de rendu: {{ model.dateDeadline }}</p>
            <div class="form_new_timeline">
                <div class="timeline">
                    <div class="timeline_title">
                        <p><a @click="step = 0" :class="{'isActive': step === 0}">Détails</a></p>
                        <p><a @click="step = 1" :class="{'isActive': step === 1}">Rendu 3D</a></p>
                    </div>
                    <div :class="['step-'+step, 'timeline_bar']"></div>
                </div>
            </div>
        </header>

        <div v-if="step === 0" class="tile is-parent">
            <div class="tile is-child box-sh-outline description_side">
                <h2 class="subtitle">Description du projet</h2>
                <p class="description">{{ model.details.description }}</p>
                <div class="last_item_model"></div>
                <h2 class="subtitle">Dimensions</h2>
                <p class="dimension"><span>Longueur:</span><span>{{ model.details.dimensions.width}} mm</span></p>
                <p class="dimension"><span>Largeur: </span><span>{{ model.details.dimensions.height}} mm</span></p>
                <p class="dimension"><span>Profondeur: </span><span>{{ model.details.dimensions.depth}} mm</span></p>
                <div class="last_item_model"></div>
                <h2 class="subtitle">Aspect</h2>
                <p class="aspect">Matériaux: <span v-for="material in model.details.materials" :key="material">{{ material}}, </span></p>
                <p class="aspect"><span>Échelle: {{ model.details.scale }}</span> </p>
            </div>
            <div class="tile is-child is-7 box-sh-inline">
                <div class="form_new_timeline model_detail_all">
                    <div class="timeline subtimeline">
                        <div class="timeline_title">
                            <a @click="step2 = 0" :class="{'isActive': step2 === 0}">Tous</a>
                            <a @click="step2 = 1" :class="{'isActive': step2 === 1}">iOS</a>
                            <a @click="step2 = 2" :class="{'isActive': step2 === 2}">Android</a>
                            <a @click="step2 = 3" :class="{'isActive': step2 === 3}">Photos</a>
                        </div>
                    </div>
                    <div class="list_files list_all_files" v-if="step2 === 0">
                        <div class="list_left">
                            <div class="list_header">
                                <p>Nom du fichier</p>
                                <p>Poids</p>
                                <p>Télécharger</p>
                            </div>
                            <div v-for="(file_type, index) in model.files" class="list_items" :key="index">
                                <div
                                    v-for="(file, index2) in file_type"
                                    :key="index2"
                                    class="list_model"
                                >
                                    <p>{{ file.name }}</p>
                                    <p>{{ file.size }}</p>
                                    <div class="field">
                                        <b-checkbox type="is-success" size="is-small" v-model="selection.step0" :native-value="index+'-'+index2"></b-checkbox>
                                    </div>
                                </div>
                                <div class="last_item_model" v-if="file_type.length !== 0"></div>
                            </div>
                        </div>
                        <div class="list_right">
                            <div class="download_bar">
                                <a href="javascript:void(0)" class="download_all_models">
                                    Tout télécharger
                                </a>
                                <a href="javascript:void(0)" class="download_count_model">
                                    Télécharger ({{selection.step0.length}})
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="list_files" v-if="step2 === 1">
                        <div class="list_left">
                            <div class="list_header">
                                <p>Nom du fichier</p>
                                <p>Poids</p>
                                <p>Télécharger</p>
                            </div>
                            <div class="list_items">
                                <div
                                        v-for="(file, index) in model.files.ios"
                                        :key="index"
                                        class="list_model"
                                >
                                    <p>{{ file.name }}</p>
                                    <p>{{ file.size }}</p>
                                    <div class="field">
                                        <b-checkbox type="is-success" size="is-small" v-model="selection.step1" :native-value="index"></b-checkbox>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="list_right">
                            <div class="download_bar">
                                <a href="javascript:void(0)" class="download_all_models">
                                    Tout télécharger
                                </a>
                                <a href="javascript:void(0)" class="download_count_model">
                                    Télécharger ({{selection.step1.length}})
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="list_files" v-if="step2 === 2">
                        <div class="list_left">
                            <div class="list_header">
                                <p>Nom du fichier</p>
                                <p>Poids</p>
                                <p>Télécharger</p>
                            </div>
                            <div class="list_items">
                                <div
                                        v-for="(file, index) in model.files.android"
                                        :key="index"
                                        class="list_model"
                                >
                                    <p>{{ file.name }}</p>
                                    <p>{{ file.size }}</p>
                                    <div class="field">
                                        <b-checkbox type="is-success" size="is-small" v-model="selection.step2" :native-value="index"></b-checkbox>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="list_right">
                            <div class="download_bar">
                                <a href="javascript:void(0)" class="download_all_models">
                                    Tout télécharger
                                </a>
                                <a href="javascript:void(0)" class="download_count_model">
                                    Télécharger ({{selection.step2.length}})
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="list_files" v-if="step2 === 3">
                        <div class="list_left">
                            <div class="list_header">
                                <p>Nom du fichier</p>
                                <p>Poids</p>
                                <p>Télécharger</p>
                            </div>
                            <div class="list_items">
                                <div
                                        v-for="(file, index) in model.files.photos"
                                        :key="index"
                                        class="list_model"
                                >
                                    <p>{{ file.name }}</p>
                                    <p>{{ file.size }}</p>
                                    <div class="field">
                                        <b-checkbox type="is-success" size="is-small" v-model="selection.step3" :native-value="index"></b-checkbox>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="list_right">
                            <div class="download_bar">
                                <a href="javascript:void(0)" class="download_all_models">
                                    Tout télécharger
                                </a>
                                <a href="javascript:void(0)" class="download_count_model">
                                    Télécharger ({{selection.step3.length}})
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="tile is-parent side_3d">
            <div class="tile is-child tile_send_file" :class="{'box-sh-inline': step === 0, 'box-sh-outline':  step !== 0}">
                <b-field class="field_upload">
                    <b-upload
                            class="fullmodel_upload"
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
                                <p>Importez / déposez vos fichiers ici</p>
                            </div>
                        </section>
                    </b-upload>
                </b-field>
                <div class="tags">
                    <span
                        v-for="(file, index) in model.files.gtlf"
                        :key="index"
                        class="tag is-primary" >
                        {{ file.name }}
                        <button
                            class="delete is-small"
                            type="button"
                            @click="deleteDropFile(index)"></button>
                    </span>
                </div>
            </div>
            <div class="tile is-child is-7 box-sh-outline tile_3d_view" v-if="model.files.gtlf.length > 0">
                <img class="img_picto_3d" src="../../public/icons/3d.svg" alt="3D Viewer">
                <model-gltf
                    backgroundColor="#F3F6FF"
                    src="/models/gltf/iphone_x/scene.gltf"
                >
                </model-gltf>
            </div>
            <div class="tile is-child is-7 box-sh-outline tile_3d_view tile_no_3d" v-else>
                Aucun rendu disponible pour l'instant.
            </div>
        </div>
    </section>
</template>

<script>
    import { mapGetters } from 'vuex'
    import store from "../store";
    import { ModelGltf } from 'vue-3d-model'

    export default {
        props: {
            model: Object
        },
        computed: {
            ...mapGetters({
                user: 'user'
            })
        },
        components: {
            ModelGltf
        },
        data () {
            return {
                step: 0,
                step2: 0,
                role: 'client',
                attrs: [],
                files: {
                    gtlf: []
                },
                selection: {
                    step0: [],
                    step1: [],
                    step2: [],
                    step3: []
                }
            }
        },
        methods: {
            acceptModel (modelId) {
                this.$buefy.dialog.confirm({
                    message: 'Êtes-vous sur de vouloir prendre en charge la conception de ce modèle ?',
                    type: 'is-success',
                    onConfirm: () => {
                        console.log(modelId)
                        store.dispatch("setFreelance",  { modelId: modelId, freelanceId: this.user.id });
                    }
                })
            },
            goBack() {
                this.$router.go(-1)
            },
            deleteDropFile(index) {
                console.log(this.model.files)
                this.model.files.gtlf.splice(index, 1)
            }
        }
    }
</script>

<style lang="scss" scoped>
    section {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: calc(100vh - 4rem);
        padding: 1rem;

        .close_model {
            position: absolute;
            top: .5rem;
            right: .5rem;
        }

        header {
            margin: 0 2rem;
            padding: 1.5rem;

            .header_left {
                font-weight: bold;
            }
            .dateDeadline {
                width: 100%;
                text-align: left;
                margin-top: 1rem;
                font-size: 1.3rem;
                color: #FF00AB;
                font-weight: bold;
            }
        }
        .header {
            display: flex;
            justify-content: space-between;
            div {
                display: flex;
                align-items: center;
                .categoryImg {
                    height: 80px;
                    margin-right: 2rem;
                }
                .titleContainer {
                    flex-direction: column;
                    align-items: flex-start;
                    div {
                        h2 {
                            font-size: 32px;
                            margin-bottom: 0;
                        }
                        .modelStatus {
                            margin-left: 3rem;
                            img {
                                margin-right: .5rem;
                            }
                        }
                    }
                    p {
                        text-align: left;
                    }
                    .dateCreation {
                        font-size: 12px;
                    }
                }
                .acceptButton {
                    font-weight: 400;
                    margin-left: 1rem;
                    border-radius: 50px;
                    padding: .5rem 1.5rem;
                    background-color: $pygmaLabPurpleDark;
                    color: white;
                    cursor: pointer;
                    transition: .3s;
                    &:hover {
                        opacity: .7;
                    }
                }
            }
        }

        .form_new_timeline {
            flex: 3;
            display: flex;
            justify-content: center;
            width: 100%;
        }
        .timeline {
            margin-top: 1rem;
            width: 45%;
            min-width: 400px;
            .timeline_title {
                display: flex;
                justify-content: space-between;
                margin-bottom: 1rem;
                color: #D6D8DD;
                > p {
                    flex-basis: 50%;
                    a {
                        font-size: 1.25rem;
                        font-weight: bold;
                        color: #D6D8DD;
                        transition: color .75s ease-in-out;
                        // pointer-events: none;

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
                    width: 50%;
                    height: 5px;
                    border-radius: 50px;
                    margin-left: 0;
                    transition: margin-left .25s ease-in-out;
                }
                &.step-1:after {margin-left: 50%}
            }
            .subtimeline_bar {
                &:after {
                    width: 20% !important;
                }
            }
        }
        .subtimeline {
            width: 100% !important;
        }

        .is-parent {
            .is-child {
                display: flex;
                align-items: flex-start;
                flex-direction: column;
                p {
                    text-align: left;
                }
                .subtitle {
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: .5rem;
                }
                .description {
                    font-size: 16px;
                }
                .aspect, .dimension {
                    font-size: 16px;
                    &:not(:last-child) {
                        padding-bottom: .5rem;
                    }
                }
                .dimension {
                    min-width: 150px;
                    display: flex;
                    justify-content: space-between;
                }
            }

            .model_detail_all {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .timeline_title {
                    a {
                        flex-basis: 18%;
                        padding: 8px 12px;
                        color: #000;
                        background: #F3F6FF;
                        box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.8), 5px 5px 10px rgba(209, 217, 230, 0.8);
                        border-radius: 20px;
                        transition: all .5s ease-in-out;

                        &.isActive {
                            color: #fff;
                            background: #69F2A9;
                        }
                    }
                }
                .list_files {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    margin-top: 2rem;
                    
                    &.list_all_files {
                        .list_items:last-of-type {
                            .last_item_model {display: none;}
                        }
                    }

                    > div:first-child {
                        flex-basis: 100%;
                        max-height: 320px;
                        overflow: auto;
                        &:after {
                            content: "";
                        }
                    }
                    /*> div:last-child {flex-basis: 30%}*/
                    > div:last-child {
                        margin-top: 2rem;

                        .download_all_models {
                            color: #fff;
                            font-weight: bold;
                            padding: 10px 18px;
                            border: 2px solid #6245E7;
                            background: #6245E7;
                            border-radius: 100px;
                            margin-right: 2rem;
                        }
                        .download_count_model {
                            color: #FF00AD;
                            font-weight: bold;
                            padding: 10px 18px;
                            border: 2px solid #FF00AD;
                            border-radius: 100px;
                        }
                    }
                    .list_left {
                        .list_header {
                            display: flex;
                            justify-content: space-between;
                            font-weight: bold;
                            margin-bottom: 1rem;
                            > p {
                                flex-basis: 33.333%;
                                text-align: center;
                                &:first-child {text-align: left}
                            }
                        }
                        .list_items {
                            .last_item_model {
                                width: 100%;
                                height: 1px;
                                margin: 1.25rem 0;
                                background: #D6D8DD;
                                border: 1px solid #D6D8DD;
                            }
                        }
                        .list_model {
                            display: flex;
                            > * {
                                flex-basis: 33.333%;
                                text-align: center;
                            }
                            > p:first-child {
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                text-align: left;
                            }
                            .b-checkbox {margin: 0}
                        }
                    }
                    .list_right {
                    }
                }
            }
        }

        .side_3d {
            .tile_send_file {
                justify-content: center;
                .field_upload {
                    width: 100%;
                    height: 100%;

                    label {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .tile_3d_view {
                position: relative;
                padding: 0;
                overflow: hidden;

                &.tile_no_3d {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                }

                img.img_picto_3d {
                    position: absolute;
                    top: 2rem;
                    left: 2rem;
                }
            }
        }

        .description_side {
            .last_item_model {
                width: 100%;
                height: 1px;
                margin: 1.25rem 0;
                background: #D6D8DD;
                border: 1px solid #D6D8DD;
            }}
    }
</style>

<style lang="scss">
    .fullmodel_upload {
        .upload-draggable {
            width: 100%;
            border: none !important;

            section {
                min-height: auto !important;
                justify-content: center;
                align-items: center;
            }
        }
        .content.has-text-centered p {text-align: center !important;}
    }
</style>