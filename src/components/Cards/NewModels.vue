<template>
    <article id="card_mymodels" class="tile is-child">
        <div class="content">
            <p class="title is-4 level-left">Les dernières demandes</p>
            <div v-if="user !== null" class="list_models">
                <div v-for="model in models" :key="model.id">
                    <NewModelsTeaser v-if="model.status.name === 'En attente' && user.role === 'Freelance'" :model="model" />
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
import NewModelsTeaser from './NewModelsTeaser'

export default {
    components: {
      NewModelsTeaser
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
        if(this?.models && this?.models.length !== 0 && this.user && this.user.id) {
            this.models.map((model) => {
                if(model.clientId === this.user.id)
                    this.modelCounter += 1
            })

        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    width: 100%;
}
</style>