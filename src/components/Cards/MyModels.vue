<template>
    <article id="card_mymodels" class="tile is-child">
        <div class="content">
            <p class="title level-left">Mes modèles</p>
            <div v-if="user !== null" class="list_models">
                <div v-for="model in models" :key="model.id">
                    <MyModelsTeaser v-if="user.id === model.clientId" :data="model" />
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
    computed: {
        ...mapGetters({
            models: 'models',
            user: 'user'
        })
    },
}
</script>

<style lang="scss" scoped>
.content {
    width: 100%;
}
</style>