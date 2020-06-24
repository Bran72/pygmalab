<template>
    <router-link to="/">
        <div id="card_mymodelsteaser">
            <div class="modelteaser_info">
                <img :src="'/icons/categories/' + data.category.imgUrl" alt="">
                <div class="modelteaser_name"><b>{{ data.nom }}</b></div>
                <div class="modelteaser_state"></div>
            </div>
            <div class="modelteaser_link">
                <img src="@/assets/icons/arrow_right.svg" alt="Voir le modèle">
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: 'MyModelsTeaser',
        props: {
            data: {
                type: [Object, Array],
            },
        }
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
            display: flex;
            align-items: center;

            img {
                margin-right: 2rem;
            }

            .modelteaser_name {font-size: 1.25rem}
        }

        .modelteaser_link {
            display: flex;
            align-items: center;
            margin-left: 2rem;
            height: 100%;
        }
    }
</style>