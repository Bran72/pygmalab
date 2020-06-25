<template>
    <div id="offers">
        <header>
            <h1>Liste des offres disponibles</h1>
        </header>
        <div class="offers_body">
            <div class="offers_search">
                <b-field>
                    <b-input placeholder="Essayez “Animaux”, “Nature”, “Mobilier”..."
                             v-model="filters.search"
                             type="search"
                             icon="magnify"
                             icon-clickable
                             @icon-click="searchIconClick" >
                    </b-input>
                </b-field>
            </div>
            <div class="offers_filters">
                <div class="offers_categ">
                    <div v-for="(category, index) in filters.categories" :key="index">
                        <b-button
                                type="is-light"
                                rounded
                                @click="selectCategory(category.name)">
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
                <div v-for="model in data_models" :key="model.id">
                    {{ model.nom }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'Offers',
        data () {
            return {
                data_models: null,
                filters: {
                    search: '',
                    categories: [],
                    selected_categories: [],
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
            searchIconClick() {
                alert('You wanna make a search ?')
            },
            selectCategory(name) {
                console.log(this.filters.selected_categories)
                console.log(name)

                if(this.filters.selected_categories.includes(name)) {
                    const index = this.filters.selected_categories.indexOf(name);
                    if (index !== -1) name.splice(index, 1);
                }
                else
                    this.filters.selected_categories = this.filters.selected_categories.push(name)
            }
        },
        beforeMount () {
            this.filters.categories = this.categories[0]
            this.data_models = this.models

            console.log(this.filters.selected_categories)
    
        }
    }
</script>

<style lang="scss" scoped>
    #offers {
        display: flex;
        flex-direction: column;

        header {
            margin-bottom: 1rem;

            h1 {
                font-weight: bold;
                font-size: 1.5rem
            }
        }
    }
</style>