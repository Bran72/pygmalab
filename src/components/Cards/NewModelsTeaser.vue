<template>
    <div>
        <div id="card_mymodelsteaser" @click="openModel(model)">
            <div class="modelteaser_info">
                <img :src="'/icons/categories/' + model.category.imgUrl" alt="">
                <div class="modelteaser_name"><b>{{ model.nom }}</b></div>
            </div>
            <div class="modelteaser_date">
                <p>{{ model.dateCreation }}</p>
            </div>
            <div class="modelteaser_state">
                <img :src="'/icons/status/' + model.status.imgUrl" alt="">
                <p :class="model.status.class">{{ model.status.name }}</p>
            </div>
            <div class="modelteaser_link">
                <img src="@/assets/icons/arrow_right.svg" alt="Voir le modèle">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            model: {
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
        margin-bottom: .7rem;
        background-color: $pygmaLabPurple;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        border-radius: 100px;
        transition: .3s;
        &:hover {
            cursor: pointer;
            background-color: $pygmaLabPurpleHover;
        }

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
        .modelteaser_date {
            p {
                font-size: 10px;
                margin-right: 3rem;
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