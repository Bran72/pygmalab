<template>
    <section id="toolbar">
        <div id="nav">
            <div class="nav-item nav-logo">
                <router-link to="/dashboard">
                    <img alt="PygmaLab Logo" src="../assets/logo.svg">
                </router-link>
            </div>
            <div class="nav-item nav-menu">
                <router-link to="/dashboard/profil">
                    <svg width="29" height="29">
                        <path d="M14.4998 2.41669C7.82984 2.41669 2.4165 7.83002 2.4165 14.5C2.4165 21.17 7.82984 26.5834 14.4998 26.5834C21.1698 26.5834 26.5832 21.17 26.5832 14.5C26.5832 7.83002 21.1698 2.41669 14.4998 2.41669ZM14.4998 6.04169C16.5057 6.04169 18.1248 7.66085 18.1248 9.66669C18.1248 11.6725 16.5057 13.2917 14.4998 13.2917C12.494 13.2917 10.8748 11.6725 10.8748 9.66669C10.8748 7.66085 12.494 6.04169 14.4998 6.04169ZM14.4998 23.2C11.479 23.2 8.80859 21.6534 7.24984 19.3092C7.28609 16.9046 12.0832 15.5875 14.4998 15.5875C16.9044 15.5875 21.7136 16.9046 21.7498 19.3092C20.1911 21.6534 17.5207 23.2 14.4998 23.2Z" fill="#69F2A9"/>
                    </svg>
                </router-link>
                <router-link to="/dashboard/missions">
                    <svg width="29" height="29">
                        <path d="M25.375 12.2283H17.1825L20.4933 8.82083C17.1946 5.55833 11.8537 5.4375 8.555 8.7C5.25624 11.9746 5.25624 17.255 8.555 20.5296C11.8537 23.8042 17.1946 23.8042 20.4933 20.5296C22.1367 18.9104 22.9583 17.0133 22.9583 14.6208H25.375C25.375 17.0133 24.3117 20.1187 22.185 22.2213C17.9437 26.4263 11.0562 26.4263 6.815 22.2213C2.58583 18.0283 2.54958 11.2133 6.79083 7.02042C11.0321 2.8275 17.835 2.8275 22.0762 7.02042L25.375 3.625V12.2283ZM15.1042 9.66667V14.8021L19.3333 17.3154L18.4633 18.7775L13.2917 15.7083V9.66667H15.1042Z" fill="#E6E9EF"/>
                    </svg>
                </router-link>
<!--                <router-link to="/dashboard/projets">-->
                <router-link v-if="user.role === 'Client'" to="/dashboard/new">
                    <svg width="29" height="29">
                        <path d="M26 16.1429H16.1429V26H12.8571V16.1429H3V12.8571H12.8571V3H16.1429V12.8571H26V16.1429Z" fill="#E6E9EF"/>
                    </svg>
                </router-link>
                <router-link v-if="user.role === 'Freelance'" to="/dashboard/offres">
                    <svg width="25" height="24">
                        <path d="M22.1666 5.24996H17.3333V2.83329C17.3333 1.49204 16.2579 0.416626 14.9166 0.416626H10.0833C8.74204 0.416626 7.66663 1.49204 7.66663 2.83329V5.24996H2.83329C1.49204 5.24996 0.428709 6.32538 0.428709 7.66663L0.416626 20.9583C0.416626 22.2995 1.49204 23.375 2.83329 23.375H22.1666C23.5079 23.375 24.5833 22.2995 24.5833 20.9583V7.66663C24.5833 6.32538 23.5079 5.24996 22.1666 5.24996ZM14.9166 5.24996H10.0833V2.83329H14.9166V5.24996Z" fill="#D6D8DD"/>
                    </svg>
                </router-link>
                <router-link to="/dashboard/portefeuille">
                    <svg width="23" height="22">
                        <path d="M21.7895 18.3333V19.5556C21.7895 20.9 20.7 22 19.3684 22H2.42105C1.07737 22 0 20.9 0 19.5556V2.44444C0 1.1 1.07737 0 2.42105 0H19.3684C20.7 0 21.7895 1.1 21.7895 2.44444V3.66667H10.8947C9.55105 3.66667 8.47368 4.76667 8.47368 6.11111V15.8889C8.47368 17.2333 9.55105 18.3333 10.8947 18.3333H21.7895ZM10.8947 15.8889H23V6.11111H10.8947V15.8889ZM15.7368 12.8333C14.7321 12.8333 13.9211 12.0144 13.9211 11C13.9211 9.98556 14.7321 9.16667 15.7368 9.16667C16.7416 9.16667 17.5526 9.98556 17.5526 11C17.5526 12.0144 16.7416 12.8333 15.7368 12.8333Z" fill="#E6E9EF"/>
                    </svg>
                </router-link>
            </div>
            <div class="nav-item">
                <router-link to="" @click.native="logout">
                    <img alt="Déconnexion" src="../assets/icons/logout.svg">
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
    import store from "../store";
    import { mapGetters } from 'vuex'
    //import moment from 'moment'

    export default {
        data() {
            return {
                isActive: true
            }
        },
        computed: {
            ...mapGetters({
                user: 'user'
            })
        },
        methods: {
            logout () {
                this.$buefy.dialog.confirm({
                    message: 'Êtes-vous certain de vouloir vous déconnecter ?',
                    type: 'is-warning',
                    onConfirm: () => {
                        store.dispatch("fetchUser",  null);
                        this.$router.replace('/login')

                        this.$buefy.toast.open({
                            message: 'Vous avez été déconnecté',
                            type: 'is-danger'
                        });
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    #toolbar {
        width: 100px;
        min-width: 100px;
        height: auto;
        background: #fff;

        #nav {
            position: fixed;
            width: 100px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 3rem 0;

            .nav-logo {
                img {
                    width: 40px;
                }
            }

            .nav-menu {
                > a {
                    display: block;
                    margin: 2rem 0;

                    svg path{
                        width: 28px;
                        fill: #E6E9EF;
                    }

                    &.router-link-active {
                        svg path {
                            fill: #69F2A9;
                        }
                    }
                }
            }
        }
    }
</style>