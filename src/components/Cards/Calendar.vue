<template>
    <article id="card_calendar" class="tile is-child">
        <div class="content">
            <Calendar title-position="left" :attributes="attrs" />
            <div class="subtitle is-6">Evènements à venir</div>
            <ul>
                <li v-for="model in models" :key="model.id">
                    <div
                            v-if="user.id === model.clientId && user.role === 'Client' || user.id === model.freelanceId && user.role === 'Freelance'"
                            class="event box-sh-outline-small"
                            @click="openModel">
                        <div>
                            <img :src="'/icons/categories/' + model.category.imgUrl" alt="">
                        </div>
                        <div class="eventContent">
                            <div class="modelName">
                                <p>{{ model.nom }}</p>
                                <span>{{ model.dateDeadline }}</span>
                            </div>
                            <div class="modelStatus">
                                <img :src="'/icons/status/' + model.status.imgUrl" alt="">
                                <p :class="model.status.class">{{ model.status.name }}</p>
                            </div>
                        </div>
                        <div>
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.590088 11.8545L5.17009 6.91464L0.590088 1.97479L2.00009 0.457321L8.00009 6.91464L2.00009 13.372L0.590088 11.8545Z" fill="black"/>
                            </svg>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </article>
</template>

<script>
import { Calendar } from 'v-calendar'
import { mapGetters } from "vuex";
import moment from 'moment'

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
            attrs: []
        }
    },
    methods: {
        openModel () {
            console.log('open model')
        }
    },
    mounted() {
        this.models.filter(model =>  {
            return model.clientId === this.user.id && this.user.role === 'Client' || model.freelanceId === this.user.id && this.user.role === 'Freelance'
        }).forEach(model => {
            this.attrs.push({
                key: 'today',
                highlight: true,
                popover: {
                    label: 'Deadline: ' + model.nom,
                },
                dates: moment(model.dateDeadline, 'DD/MM/YYYY').toDate(),
            })
        })
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
        li {
            list-style: none;
            .event {
                margin: 1rem 0;
                padding: 2rem 1rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                height: 50px;
                transition: .3s;
                &:hover {
                    cursor: pointer;
                    background-color: $pygmaLabPurpleHover;
                }
                .eventContent {
                    flex-basis: 80%;
                }
                div {
                    display: flex;
                    p {
                        margin-bottom: 0;
                    }
                    .modelName {
                        flex-direction: column;
                        justify-content: center;
                        flex-grow: 1;
                        p {
                            text-align: left;
                        }
                        span {
                            text-align: left;
                            font-size: 10px;
                        }
                    }
                    .modelStatus {
                        width: 35%;
                        justify-content: flex-start;
                        align-items: center;
                        img {
                            margin-right: .5rem;
                        }
                        p {
                            font-size: 12px;
                        }
                    }
                }

            }
        }
    }
</style>