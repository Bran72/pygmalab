<template>
    <section>
        <header class="box-sh-outline">
            <div class="header">
                <div>
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
                        <p class="dateCreation">Créé le : {{ model.dateCreation }}</p>
                    </div>
                </div>
                <div v-if="model.status.name === 'En attente' && user.role === 'Freelance'">
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.88659 16.6603L8.88587 16.6596C6.30081 14.3155 4.19567 12.4057 2.73078 10.6147C1.27162 8.83074 0.5 7.22576 0.5 5.5C0.5 2.69614 2.69614 0.5 5.5 0.5C7.08861 0.5 8.62112 1.24197 9.61932 2.41417L10 2.8612L10.3807 2.41417C11.3789 1.24197 12.9114 0.5 14.5 0.5C17.3039 0.5 19.5 2.69614 19.5 5.5C19.5 7.22577 18.7284 8.83077 17.2691 10.6161C15.8065 12.4055 13.7058 14.3144 11.1265 16.6583L11.1148 16.669L11.1137 16.67L10.0013 17.675L8.88659 16.6603Z" stroke="black"/>
                    </svg>
                    <div class="acceptButton" @click="acceptModel(model.id)">J'accepte</div>
                </div>
            </div>
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
        </header>
        <div class="tile is-parent">
            <div class="tile is-child" :class="{'box-sh-inline': step === 0, 'box-sh-outline':  step !== 0}">
                <h2 class="subtitle">Description du projet</h2>
                <p class="description">{{ model.details.description }}</p>
                <h2 class="subtitle">Dimensions</h2>
                <p class="dimension"><span>Longueur:</span><span>{{ model.details.dimensions.width}} mm</span></p>
                <p class="dimension"><span>Largeur: </span><span>{{ model.details.dimensions.height}} mm</span></p>
                <p class="dimension"><span>Profondeur: </span><span>{{ model.details.dimensions.depth}} mm</span></p>
            </div>
            <div class="tile is-child is-7" :class="{'box-sh-inline': step === 1, 'box-sh-outline':  step !== 1}">
                <div class="form_new_timeline">
                    <div class="timeline subtimeline">
                        <div class="timeline_title">
                            <p><a @click="step2 = 0" :class="{'isActive': step2 === 0}">Tous</a></p>
                            <p><a @click="step2 = 1" :class="{'isActive': step2 === 1}">iOS</a></p>
                            <p><a @click="step2 = 2" :class="{'isActive': step2 === 2}">Android</a></p>
                            <p><a @click="step2 = 3" :class="{'isActive': step2 === 3}">Fichiers 3D</a></p>
                            <p><a @click="step2 = 4" :class="{'isActive': step2 === 4}">Photos</a></p>
                        </div>
                        <div :class="['step-'+step2, 'timeline_bar', 'subtimeline_bar']"></div>
                    </div>
                </div>
                <model-gltf src="/models/gltf/chair/scene.gltf"></model-gltf>
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
                attrs: []
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    section {
        padding: 1rem;
        header {
            margin: 0 2rem;
            padding: 1.5rem;
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
                            margin-left: 1rem;
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
                    width: 33.33%;
                    height: 5px;
                    border-radius: 50px;
                    margin-left: 0;
                    transition: margin-left .25s ease-in-out;
                }
                &.step-1:after {margin-left: 33.333%}
                &.step-2:after {margin-left: 66.666%}
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
            height: calc(100vh - 190px)!important;
            .is-child {
                display: flex;
                align-items: flex-start;
                flex-direction: column;
                p {
                    text-align: left;
                }
                .description {
                    font-size: 12px;
                    margin-bottom: 2rem;
                }
                .dimension {
                    font-size: 12px;
                    min-width: 150px;
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
</style>