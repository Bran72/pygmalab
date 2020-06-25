<template>
    <section id="login_section">
        <div class="header_home">
            <div>
                <div class="logo">
                    <router-link to="/dashboard">
                        <img alt="PygmaLab Logo" src="../assets/logo.svg">
                    </router-link>
                </div>
                <div class="menu">
                    <router-link to="">
                        <p>À propos</p>
                    </router-link>
                    <router-link to="">
                        <p>Tarifs</p>
                    </router-link>
                    <router-link to="">
                        <p>Support</p>
                    </router-link>
                </div>
            </div>
            <div>
                <div class="freelance_btn">
                    <span>
                        <router-link to="">
                            <span>Vous êtes freelance ?</span>
                        </router-link>
                    </span>
                </div>
                <router-link to="" class="signup_btn">
                    <p>S'inscrire</p>
                </router-link>
            </div>
        </div>
        <div class="home_login_body">
            <div class="login_left">
                <div class="shop_section"></div>
            </div>
            <div class="login_form">
                <form>
                    <div class="login_head">
                        <img alt="PygmaLab Logo" src="../../public/images/logo_title.png">
                    </div>
                    <div class="form_content">
                        <b-field label="Email">
                            <b-input v-model="email" placeholder="email..." @keyup.native.enter="login"></b-input>
                        </b-field>
                        <b-field label="Mot de passe">
                            <b-input type="password" v-model="password" placeholder="mot de passe..." @keyup.native.enter="login"></b-input>
                        </b-field>
                    </div>
                    <div class="form_submit">
                        <div class="freelance_btn already_account">
                            <span>
                                <router-link to="" @click.native="login">
                                    <span>Se connecter</span>
                                </router-link>
                            </span>
                        </div>
                        <router-link to="">
                            <span>Créer mon compte</span>
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
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
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: calc(100vh - 4rem);

        > div.header_home {
            width: 100%;
            height: 4rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2rem;

            > div {
                display: flex;

                .logo {
                    margin-right: 4rem;
                }
                .menu {
                    display: flex;
                    align-items: center;

                    a {
                        font-weight: bold;
                        color: #1B1E3B;
                        &:not(:last-child) {margin-right: 4rem}
                    }
                }

                .signup_btn {
                    color: #1B1E3B;
                }
            }
        }

        > div.home_login_body {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            padding: 4rem 2rem;

            > div {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                &:first-child {
                    flex-basis: 50%;
                }
                &:last-child {
                    flex-basis: 40%;
                    padding-left: 5%;
                }
            }
            .login_left {
                .shop_section {
                    width: 100%;
                    height: 100%;
                    max-height: 720px;
                    border: 40px;
                    background: #F3F6FF;
                    box-shadow: -28px -28px 50px #FFFFFF, 28px 28px 50px #D1D9E6;
                    border-radius: 40px;

                    background: url("../../public/images/shop.png") no-repeat;
                    background-position: right;
                    background-size: cover;
                }
            }

            img {
                width: 80%;
            }

            .login_form {
                width: 100%;
                height: 100%;
            }
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-width: 500px;
            height: 100%;

            background: #F3F6FF;
            box-shadow: -28px -28px 50px #FFFFFF, 28px 28px 50px #D1D9E6;
            border-radius: 40px;
            padding: 3rem;

            .login_head {
                flex-basis: 30%;
            }

            .form_content {
                flex-basis: 50%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                width: 100%;
            }

            .form_submit {
                flex-basis: 20%;
                display: flex;
                align-items: flex-end;
                justify-content: space-between;
                flex-wrap: wrap;
                width: 100%;
                padding-top: 2rem;
            }

            .field {
                text-align: left;
                width: 100%;
                & /deep/ .label {
                    margin-left: .5rem;
                }
                & /deep/ .input {
                    border: none;
                    background: #F3F6FF;
                    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
                    border-radius: 100px;
                    &:focus {
                       border: .5px solid dimgrey;
                    }
                }
            }
        }

        .freelance_btn {
            margin-right: 4rem;
            white-space: nowrap;

            > span {
                a {
                    color: #FF00AD;
                    font-weight: bold;
                    padding: 10px 18px;
                    border: 2px solid #FF00AD;
                    border-radius: 100px;

                    &:after {
                        content: url("../../public/icons/freelance_arrow.svg");
                        display: inline-block;
                        vertical-align: middle;
                        margin-top: 4px;
                        margin-left: 18px;
                    }
                }
            }

            &.already_account {
                margin-right: 0;
                > span {
                    a {
                        background: #6245E7;
                        border: 2px solid #6245E7;
                        color: #fff;

                        &:after {
                            content: url("../../public/icons/freelance_arrow_white.svg");
                            margin-top: -2px;
                        }
                    }
                }
            }
        }
    }
</style>