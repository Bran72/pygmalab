<template>
    <div>
        <div id="card_mymodelsteaser" @click="openModel(data)">
            <div class="modelteaser_info">
                <img :src="'/icons/categories/' + data.category.imgUrl" alt="">
                <div class="modelteaser_name"><b>{{ data.nom }}</b></div>
            </div>
            <div class="modelteaser_state">
                <img :src="'/icons/status/' + data.status.imgUrl" alt="">
                <p>{{ data.status.name }}</p>
            </div>
            <div class="modelteaser_link">
                <img src="@/assets/icons/arrow_right.svg" alt="Voir le modèle">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MyModelsTeaser',
        props: {
            data: {
                type: [Object, Array],
            },
        },
        methods: {
            openModel (model) {
                this.$router.push({name:'Modele', params:{model: model, id: model.id}})
            }
        },
    }
</script>

<style lang="scss" scoped>
    a {color: #000}

    #card_mymodelsteaser {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 1rem 2rem;
        margin-bottom: 2rem;
        background-color: $pygmaLabPurple;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        border-radius: 100px;

        .modelteaser_info {
            flex-basis: 40%;
            display: flex;
            align-items: center;
            min-width: fit-content;
            text-align: left;

            img {
                margin-right: 2rem;
            }

            .modelteaser_name {
                font-size: 1.25rem;
            }
        }


        .modelteaser_state {
            display: flex;
            align-items: center;
            flex-basis: 20%;
            img {margin-right: 1rem}
        }

        .modelteaser_link {
            display: flex;
            align-items: center;
            margin-left: 2rem;
            height: 100%;
        }
    }
</style>