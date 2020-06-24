<template>
    <article id="card_calendar" class="tile is-child">
        <div class="content">
            <Calendar title-position="left" :attributes="attrs" />
            <div class="subtitle is-6">Evènements à venir</div>
            <ul v-for="model in models" :key="model.id">
                <li v-if="model.freelanceId === user.id" class="event box-sh-outline-small">
                    <div class="modelName">
                        <img :src="'/icons/categories/' + model.category.imgUrl" alt="">
                        <p>{{ model.nom }}</p>
                    </div>
                    <div class="modelStatus">
                        <p>{{ model.status.name }}</p>
                    </div>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.590088 11.8545L5.17009 6.91464L0.590088 1.97479L2.00009 0.457321L8.00009 6.91464L2.00009 13.372L0.590088 11.8545Z" fill="black"/>
                    </svg>
                </li>
            </ul>
        </div>
    </article>
</template>

<script>
import { Calendar } from 'v-calendar'
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            models: 'models',
            user: 'user'
        })
    },
    components: {
        Calendar
    },
    data () {
        return {
            attrs: [
                {
                    key: 'today',
                    highlight: true,
                    popover: {
                        label: 'Deadline: Chaise en bois',
                    },
                    dates: new Date(),
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    #card_calendar {
        //max-width: 360px;
        > .content {
            width: 100%;
        }
    }

    .vc-container {
        width: 80%;
        border: none;
        margin: 0 auto 5% auto;
    }

    .subtitle {
        text-align: left;
    }

    ul {
        margin: 0 !important;

        .event {
            margin: 1rem 0;
            padding: 1rem;
            display: flex;
            align-items: center;
            width: 100%;
            height: 50px;
            list-style: none;
            div {
                display: flex;
                p {
                    font-size: 12px;
                }
            }
            .modelName {
                flex-grow: 1;
            }
            svg {
                margin-left: 1rem;
            }
        }
    }

    @media screen and (max-width: 1400px) {
        .vc-container {
            width: 100%;
        }
    }
</style>