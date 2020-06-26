<template>
    <article id="card_mymodels" class="tile is-child">
        <div class="content">
            <p class="title is-4 level-left">Modèles en cours ({{modelCounter}})</p>
            <div v-if="user !== null" class="list_models">
                <div v-for="model in models" :key="model.id">
                    <MyModelsTeaser v-if="user.id === model.clientId && user.role === 'Client'" :data="model" />
                    <MyModelsTeaser v-else-if="user.id === model.freelanceId && user.role === 'Freelance'" :data="model" />
                </div>
            </div>
            <div v-else>
                <p class="subtitle">Aucun modèle en cours</p>
            </div>
        </div>
    </article>
</template>

<script>
import { mapGetters } from "vuex"
import MyModelsTeaser from './MyModelsTeaser'

export default {
    name: 'MyModels',
    components: {
      MyModelsTeaser
    },
    data () {
        return {
            modelCounter: 0,
        }
    },
    computed: {
        ...mapGetters({
            models: 'models',
            user: 'user'
        }),
    },
    mounted () {
        console.log(this.models)

        this.modelCounter = this.models.filter(model => {
            return model.clientId === this.user.id && this.user.role === 'Client' || model.freelanceId === this.user.id && this.user.role === 'Freelance'
        }).length
    }
}
</script>

<style lang="scss" scoped>
.content {
    width: 100%;
}
</style>