<template>
    <article id="card_mymodels" class="tile is-child">
        <div class="content">
            <p class="title level-left">Modèles en cours ({{modelCounter}})</p>
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