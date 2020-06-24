<template>
    <section>
        <form>
            <b-field label="Email">
                <b-input v-model="email" placeholder="email..." @keyup.native.enter="login"></b-input>
            </b-field>
            <b-field label="Mot de passe">
                <b-input type="password" v-model="password" placeholder="mot de passe..." @keyup.native.enter="login"></b-input>
            </b-field>
            <b-button @click="login">Se connecter</b-button>
        </form>
    </section>
</template>

<script>
    import { mapGetters } from 'vuex'
    import store from "../store";

    export default {
        computed: {
            ...mapGetters({
                users: 'users'
            })
        },
        data () {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            login () {
                let user = this.users.filter(user => {
                    return user.email === this.email && user.password === this.password
                });
                if(user.length === 1) {
                    // console.log('OK')
                    store.dispatch("fetchUser",  user[0]);
                    this.$router.replace('/dashboard')
                } else if (user.length === 0) {
                    console.log('Le compte n\'existe pas')
                } else {
                    console.log('Une erreur est survenue.')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "src/assets/global/_variables.scss";
    section {
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        form {
            width: 80%;
            max-width: 500px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: $pygmaLabPurple;
            box-shadow: -18px -18px 30px rgba(255, 255, 255, 0.8), 18px 18px 30px rgba(209, 217, 230, 0.8)!important;
            border-radius: 40px;
            padding: 3rem;
            .field {
                text-align: left;
                width: 100%;
                & /deep/ .label {
                    margin-left: .5rem;
                }
                & /deep/ .input {
                    border: none;
                    background: #F3F6FF;
                    box-shadow: inset -18px -18px 30px rgba(255, 255, 255, 0.8), inset 18px 18px 30px rgba(209, 217, 230, 0.8)!important;
                    border-radius: 40px;
                    &:focus {
                       border: .5px solid dimgrey;
                    }
                }
            }
            .button {
                margin-top: 3rem;
            }
        }
    }
</style>