<template>
    <article id="card_calendar" class="tile is-child">
        <div class="content">
            <Calendar title-position="left" :attributes="attrs" />
            <div class="subtitle is-6">Evènements à venir</div>
            <ul>
                <li class="event box-sh-outline">Toto</li>
                <li class="event box-sh-outline">Toto</li>
                <li class="event box-sh-outline">Toto</li>
            </ul>
        </div>
    </article>
</template>

<script>
import { Calendar } from 'v-calendar'

export default {
    name: 'CardCalendar',

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
    },
}
</script>

<style lang="scss" scoped>
    #card_calendar {
        max-width: 360px;
    }

    .vc-container {
        border: none;
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
            list-style: none
        }
    }
</style>