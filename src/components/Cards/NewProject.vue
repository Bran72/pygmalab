<template>
    <div id="card_newproject" class="tile is-child is-primary">
        <p class="title">Demande de modélisation</p>
        <p class="subtitle">Je crée ma demande de modélisation</p>
        <div class="content">
            <router-link class="more-btn" to="/new">
                +
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NewProject'
    }
</script>

<style lang="scss" scoped>
    #card_newproject {max-height: 30%}

    .content {
        display: flex;
        height: 100%;
        padding-bottom: 5%;

        .more-btn {
            display: flex;
            width: 5rem;
            height: 5rem;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            margin: auto;
            font-size: 3rem;
            background: #F3F6FF;
            box-shadow: -18px -18px 30px rgba(255, 255, 255, 0.8), 18px 18px 30px rgba(209, 217, 230, 0.8);
            font-weight: bold;
            color: #000 !important;
        }
    }
</style>