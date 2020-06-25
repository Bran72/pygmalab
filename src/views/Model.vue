<template>
    <section>
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
            <div v-if="model.status.name === 'En attente'">
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.88659 16.6603L8.88587 16.6596C6.30081 14.3155 4.19567 12.4057 2.73078 10.6147C1.27162 8.83074 0.5 7.22576 0.5 5.5C0.5 2.69614 2.69614 0.5 5.5 0.5C7.08861 0.5 8.62112 1.24197 9.61932 2.41417L10 2.8612L10.3807 2.41417C11.3789 1.24197 12.9114 0.5 14.5 0.5C17.3039 0.5 19.5 2.69614 19.5 5.5C19.5 7.22577 18.7284 8.83077 17.2691 10.6161C15.8065 12.4055 13.7058 14.3144 11.1265 16.6583L11.1148 16.669L11.1137 16.67L10.0013 17.675L8.88659 16.6603Z" stroke="black"/>
                </svg>
                <div class="acceptButton">J'accepte</div>
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
        <div class="tile is-parent">
            <div class="tile is-child" :class="{'box-sh-inline': step === 0, 'box-sh-outline':  step !== 0}">
                <h2 class="subtitle">Description du projet</h2>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid atque, doloribus et incidunt ipsa officia quasi reiciendis sapiente sint?</p>
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
            </div>
        </div>
    </section>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        props: {
            model: Object
        },
        computed: {
            ...mapGetters({
                user: 'user'
            })
        },
        data () {
            return {
                step: 0,
                step2: 0,
                role: 'client',
                attrs: []
            }
        }
    }
</script>

<style lang="scss" scoped>
    section {
        padding: 1rem;
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