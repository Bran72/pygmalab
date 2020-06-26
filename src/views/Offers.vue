<template>
    <div id="offers">
        <header>
            <h1>Liste des offres disponibles</h1>
        </header>
        <div class="offers_body">
            <div class="offers_search">
                <b-field>
                    <b-input placeholder="Essayez “Mobilier”, “Métal”, “Véhicules”..."
                             v-model="filters.search"
                             type="search"
                             icon="magnify"
                             icon-clickable>
                    </b-input>
                </b-field>
            </div>
            <div class="offers_filters">
                <div class="offers_categ">
                    <div v-for="(category, index) in categories[0]" :key="index">
                        <b-button
                                :class="{'isActive': filters.categories.includes(category.name)}"
                                type="is-light"
                                rounded
                                @click="toggleCategory(category.name)">
                            {{ category.name }}
                        </b-button>
                    </div>
                </div>
                <div class="offers_select">
                    <b-field>
                        <b-select placeholder="Choisir un filtre" v-model="filters.sort" rounded>
                            <option value="ASC">Plus récent</option>
                            <option value="DESC">Plus ancien</option>
                        </b-select>
                    </b-field>
                </div>
            </div>
            <div class="offers_models">
                <div v-for="(model, index) in copyModels" :key="model.id" class="model_offer_card">
                    <div v-if="model.dateCreation === formatTodayDate()" class="badge_new">New</div>
                    <div class="model_offer_body">
                        <div class="model_category" @click="openModel(model)">
                            <img :src="'/icons/categories/' + model.category.imgUrl" :alt="model.nom">
                            <p class="model_categ_name">{{ model.category.name }}</p>
                        </div>
                        <div class="model_content" @click="openModel(model)">
                            <p class="model_name">{{ model.nom }}</p>
                            <p v-if="model.dateCreation === formatTodayDate()" class="model_startDate"><i>Publié aujourd'hui</i></p>
                            <p v-else class="model_startDate"><i>Publié il y a {{index + 3}} jours</i></p>
                            <hr />
                            <p class="model_endDate">Dans {{ index + 2 }} jours</p>
                        </div>
                        <div class="model_actions">
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.88659 16.6603L8.88587 16.6596C6.30081 14.3155 4.19567 12.4057 2.73078 10.6147C1.27162 8.83074 0.5 7.22576 0.5 5.5C0.5 2.69614 2.69614 0.5 5.5 0.5C7.08861 0.5 8.62112 1.24197 9.61932 2.41417L10 2.8612L10.3807 2.41417C11.3789 1.24197 12.9114 0.5 14.5 0.5C17.3039 0.5 19.5 2.69614 19.5 5.5C19.5 7.22577 18.7284 8.83077 17.2691 10.6161C15.8065 12.4055 13.7058 14.3144 11.1265 16.6583L11.1148 16.669L11.1137 16.67L10.0013 17.675L8.88659 16.6603Z" stroke="black"/>
                            </svg>
                            <div class="acceptButton" @click="acceptModel(model.id, index)">J'accepte</div>
                            <div class="price">30€</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import store from '../store'
    // import moment from 'moment'

    export default {
        name: 'Offers',
        data () {
            return {
                copyModels: null,
                filters: {
                    search: '',
                    categories: [],
                    sort: 'ASC'
                }
            }
        },
        computed: {
            ...mapGetters({
                user: 'user',
                categories: 'categories',
                models: 'models'
            })
        },
        methods: {
            toggleCategory(name) {
                if (this.filters.categories.includes(name)) {
                    const index = this.filters.categories.indexOf(name);
                    if (index !== -1) {
                        this.filters.categories.splice(index, 1);
                    }
                }
                else {
                    this.filters.categories.push(name)
                }
            },
            formatTodayDate() {
                let today = new Date();
                let dd = today.getDate();
                let mm = today.getMonth()+1;
                let yyyy = today.getFullYear();

                if(dd<10)
                    dd='0'+dd;

                if(mm<10)
                    mm='0'+mm;

                today = dd+'/'+mm+'/'+yyyy;

                return today.toString();
            },
            openModel (model) {
                this.$router.push({name:'Modele', params:{model: model, id: model.id}})
            },
            acceptModel (modelId) {
                this.$buefy.dialog.confirm({
                    message: 'Êtes-vous sur de vouloir prendre en charge la conception de ce modèle ?',
                    type: 'is-success',
                    onConfirm: () => {
                        //console.log(modelId)
                        store.dispatch("setFreelance",  { modelId: modelId, freelanceId: this.user.id });
                        this.updateListModels()
                    }
                })
            },
            updateListModels() {
                //this.copyModels = JSON.parse(JSON.stringify(this.models))
                this.copyModels = JSON.parse(JSON.stringify(this.models.filter(model => model.freelanceId !== this.user.id)))

            }
        },
        watch: {
            'filters.categories'() {
                this.copyModels = JSON.parse(JSON.stringify(this.models)).filter(model => {
                    return (this.filters.categories.includes(model.category.name) && (model.nom.toLowerCase().includes(this.filters.search.toLowerCase()) || model.details.description.toLowerCase().includes(this.filters.search.toLowerCase()))) && (model.freelanceId !== this.user.id)
                })
            },
            'filters.search'() {
                this.copyModels = JSON.parse(JSON.stringify(this.models)).filter(model => {
                    return (this.filters.categories.includes(model.category.name) && (model.nom.toLowerCase().includes(this.filters.search.toLowerCase()) || model.details.description.toLowerCase().includes(this.filters.search.toLowerCase())) ) && (model.freelanceId !== this.user.id)
                })
            },
            'filters.sort'(val) {
                if (val === 'ASC') {
                    // this.copyModels = this.copyModels.sort((a,b) => new moment(a.dateCreation).format('DD/MM/YYYY') - new moment(b.dateCreation).format('DD/MM/YYYY'))
                } else {
                    // this.copyModels = this.copyModels.sort((a,b) => new moment(b.dateCreation).format('DD/MM/YYYY') - new moment(a.dateCreation).format('DD/MM/YYYY'))
                }
            }
        },
        mounted() {
            this.copyModels = JSON.parse(JSON.stringify(this.models.filter(model => model.freelanceId !== this.user.id)))

            this.categories[0].forEach(category => {
                this.filters.categories.push(category.name)
            })
        }
    }
</script>

<style lang="scss" scoped>
    #offers {
        display: flex;
        flex-direction: column;

        header {
            display: none;
            margin-bottom: 1rem;

            h1 {
                font-weight: bold;
                font-size: 1.5rem
            }
        }

        .offers_body {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 2rem 2rem 2rem 4rem;

            > div {
                flex-basis: 100%;
                width: 100%;
                margin-bottom: 4rem;

                &.offers_search {
                    width: 100%;
                    max-width: 700px;
                }

                &.offers_filters {
                    display: flex;
                    justify-content: space-between;
                    .offers_categ {
                        display: flex;
                        flex-wrap: wrap;
                        > div {
                            margin: 0 .5rem .5rem;
                        }
                        button {
                            background: #F3F6FF;
                            box-shadow: inset -5px -5px 10px rgba(255, 255, 255, 0.8), inset 5px 5px 10px rgba(209, 217, 230, 0.8);
                            border-radius: 20px;
                            &.isActive {
                                box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.8), 5px 5px 10px rgba(209, 217, 230, 0.8);
                            }
                        }
                    }
                }

                &.offers_models {
                    display: flex;
                    flex-wrap: wrap;

                    .model_offer_card {
                        position: relative;
                        margin: 1rem;

                        .badge_new {
                            position: absolute;
                            top: 2rem;
                            right: 2rem;
                            display: flex;
                            align-items: center;
                            font-size: 10px;
                            font-weight: bold;
                            border-radius: 5px;
                            color: white;
                            padding: 6px 8px;
                            background: #FF00AD;
                            align-items: center;
                            line-height: 1;
                            &:before {
                                content: "";
                                display: inline-block;
                                width: 5px;
                                height: 5px;
                                background: #fff;
                                border-radius: 50%;
                                margin-right: 5px;
                            }
                        }

                        .model_offer_body {
                            padding: 2rem;
                            flex-basis: 20%;
                            width: 260px;
                            background: #F3F6FF;
                            box-shadow: -15px -15px 30px #FFF, 15px 15px 30px #D1D9E6;
                            border-radius: 40px;
                            cursor: pointer;

                            .model_category {
                                img {height: 3.5rem}
                                margin-bottom: 1rem;
                            }

                            .model_content {
                                padding: 1rem;
                                background: #F3F6FF;
                                box-shadow: inset -5px -5px 10px rgba(255, 255, 255, 0.8), inset 5px 5px 10px rgba(209, 217, 230, 0.8);
                                border-radius: 10px;

                                .model_name {
                                    font-size: 18px;
                                    font-weight: bold;
                                }
                                .model_startDate {
                                    font-size: 12px;
                                }
                                .model_endDate {
                                    font-size: 14px;
                                }

                                hr {
                                    margin: 1rem 0;
                                    background: #D6D8DD;
                                }
                            }

                            .model_actions {
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                padding-top: 2rem;

                                > :first-child, :last-child {
                                    flex-basis: 15%;
                                }

                                svg {cursor: pointer}

                                .acceptButton {
                                    font-weight: 400;
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
                    }
                }
            }
        }
    }
</style>

<style lang="scss">
    #offers {
        input {
            background: #F3F6FF;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
            border-radius: 20px;
        }
        select {
            background: transparent;
            border: 2px solid #FF00AD;
            box-sizing: border-box;
            border-radius: 20px;
            color: #FF00AD;
        }
        .select::after {
            border-color: #FF00AD
        }
    }
</style>