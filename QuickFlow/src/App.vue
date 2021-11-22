<template>
    <v-app id="quickflow">
        <v-app-bar app
                   clipped-right
                   flat
                   height="72">
            <v-app-bar-nav-icon @click="showmenu"/>
            <v-toolbar-title>Quick Flow</v-toolbar-title>
            <v-responsive max-width="156">

            </v-responsive>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer"
                             app
                             width="300">
            <v-sheet 
                     class=text-center
                     height="128"
                     width="100%">
                <br />
                <svg width="119" height="70" viewBox="0 0 119 89.55882433147352" class="css-1j8o68f"><defs id="SvgjsDefs7064"><linearGradient id="SvgjsLinearGradient7069"><stop id="SvgjsStop7070" stop-color="#006838" offset="0"></stop><stop id="SvgjsStop7071" stop-color="#96cf24" offset="1"></stop></linearGradient></defs><g id="SvgjsG7065" featurekey="symbolFeature-0" transform="matrix(0.2940489924614998,0,0,0.2940489924614998,-0.26464410373136127,30.912252041352563)" fill="#04a118"><path xmlns="http://www.w3.org/2000/svg" d="M73.9,49.4h-5.1v-3.4h5.1V25.8c0-0.9,0.8-1.7,1.7-1.7h5.5v3.4h-3.8v18.6h3.8v3.4h-3.8V68h3.8v3.4h-5.5  c-0.9,0-1.7-0.8-1.7-1.7V49.4z M99.1,43.1v9.3c0,1.6-1.3,3-3,3h-9.3c-1.6,0-3-1.3-3-3v-9.3c0-1.6,1.3-3,3-3h9.3  C97.8,40.1,99.1,41.5,99.1,43.1z M96.3,45.7l-1.8-1.8L90.3,48l-1.7-1.7l-1.8,1.8l1.7,1.7l1.8,1.8l1.8-1.8L96.3,45.7z M99.1,65.1v9.3  c0,1.6-1.3,3-3,3h-9.3c-1.6,0-3-1.3-3-3v-9.3c0-1.6,1.3-3,3-3h9.3C97.8,62.1,99.1,63.4,99.1,65.1z M93.3,69.7l2.1-2.1l-1.8-1.8  L91.5,68l-2.1-2.1l-1.8,1.8l2.1,2.1l-2.1,2.1l1.8,1.8l2.1-2.1l2.1,2.1l1.8-1.8L93.3,69.7z M99.1,21.1v9.3c0,1.6-1.3,3-3,3h-9.3  c-1.6,0-3-1.3-3-3v-9.3c0-1.6,1.3-3,3-3h9.3C97.8,18.1,99.1,19.5,99.1,21.1z M93.3,25.8l2.1-2.1l-1.8-1.8L91.5,24l-2.1-2.1l-1.8,1.8  l2.1,2.1l-2.1,2.1l1.8,1.8l2.1-2.1l2.1,2.1l1.8-1.8L93.3,25.8z M26.1,69.7V49.4h5.1v-3.4h-5.1V25.8c0-0.9-0.8-1.7-1.7-1.7h-5.5v3.4  h3.8v18.6h-3.8v3.4h3.8V68h-3.8v3.4h5.5C25.3,71.4,26.1,70.7,26.1,69.7z M0.9,74.4v-9.3c0-1.6,1.3-3,3-3h9.3c1.6,0,3,1.3,3,3v9.3  c0,1.6-1.3,3-3,3H3.8C2.2,77.4,0.9,76,0.9,74.4z M3.7,70.1l1.7,1.7l1.8,1.8l1.8-1.8l4.2-4.1l-1.8-1.8L7.3,70l-1.7-1.7L3.7,70.1z   M0.9,30.4v-9.3c0-1.6,1.3-3,3-3h9.3c1.6,0,3,1.3,3,3v9.3c0,1.6-1.3,3-3,3H3.8C2.2,33.4,0.9,32.1,0.9,30.4z M6.7,25.8l-2.1,2.1  l1.8,1.8l2.1-2.1l2.1,2.1l1.8-1.8l-2.1-2.1l2.1-2.1l-1.8-1.8L8.5,24l-2.1-2.1l-1.8,1.8L6.7,25.8z M0.9,52.4v-9.3c0-1.6,1.3-3,3-3  h9.3c1.6,0,3,1.3,3,3v9.3c0,1.6-1.3,3-3,3H3.8C2.2,55.4,0.9,54,0.9,52.4z M6.7,47.8l-2.1,2.1l1.8,1.8l2.1-2.1l2.1,2.1l1.8-1.8  l-2.1-2.1l2.1-2.1l-1.8-1.8L8.5,46l-2.1-2.1l-1.8,1.8L6.7,47.8z M54.5,24.2c-0.1,0-0.1-0.1-0.1-0.2v-2.3c0.3-0.7,0.5-1.4,0.7-2.1  c0.1,0,0.1,0.1,0.2,0.1c0.3,0,0.7-0.4,1.1-1.9c0.5-1.6,0.2-2.1-0.2-2.3c1.3-6.1-1.6-6.3-1.6-6.3S54.2,8.4,53,7.8  c-0.7-0.4-1.6-0.7-2.7-0.7c-0.2,0-0.4,0-0.6,0c-0.5,0-0.9,0.1-1.3,0.2h0c-0.5,0.2-1,0.4-1.4,0.7c-0.5,0.3-1,0.7-1.5,1.2  c-0.7,0.7-1.3,1.6-1.6,2.8c-0.3,1-0.2,2,0.1,3.1c0,0-0.1,0-0.1,0c-0.5,0-1,0.4-0.5,2.3c0.4,1.5,0.8,1.9,1.1,1.9  c0.1,0.9,0.4,1.8,0.9,2.7v2c0,0.1,0,0.2-0.1,0.2c-0.7,0.4-4.4,2.2-7.8,5c-0.6,0.5-1,1.3-1,2.1V35v14c0,2.1,0.7,4.1,2.1,5.7l2.8,3.3  l2.6,32.8c0.1,1.1,1,2,2.2,2h7.3c1.2,0,2.1-0.9,2.2-2l2.5-32.8l2.8-3.3c1.4-1.6,2.1-3.7,2.1-5.8V35v-3.7c0-0.8-0.4-1.5-1-2.1  C58.9,26.4,55.3,24.6,54.5,24.2z"></path></g><g id="SvgjsG7066" featurekey="nameFeature-0" transform="matrix(2.85947717765379,0,0,2.85947717765379,49,-31.45424895419169)" fill="url(#SvgjsLinearGradient7069)"><path d="M13.08 39.6 l-2.92 2.72 l-2.2 -2.36 c-0.68 0.4 -1.52 0.56 -2.4 0.56 c-3.08 0 -5.56 -2.48 -5.56 -5.56 l0 -18.4 c0 -3.08 2.48 -5.56 5.56 -5.56 s5.56 2.48 5.56 5.56 l0 18.4 c0 0.76 -0.16 1.48 -0.4 2.16 z M5.56 36.56 c0.88 0 1.64 -0.68 1.64 -1.6 l0 -18.4 c0 -0.92 -0.76 -1.64 -1.64 -1.64 s-1.6 0.72 -1.6 1.64 l0 18.4 c0 0.92 0.72 1.6 1.6 1.6 z M24.48 21.24 l0 3.76 l-5.64 0 l0 14.92 l-3.76 0 l0 -28.48 l9.32 0 l0 3.8 l-5.56 0 l0 6 l5.64 0 z"></path></g></svg>
            </v-sheet>
            <v-divider></v-divider>
            <v-list class="pl-14"
                    shaped>
                <v-list-item v-for="n in 5"
                             :key="n"
                             link>
                    <v-list-item-content>
                        <v-list-item-title>Item {{ n }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-navigation-drawer app
                             v-model="drawer"
                             clipped
                             right>

            <v-list>
                <v-list-item v-for="n in 5"
                             :key="n"
                             @click="showflows"
                             link>
                    <v-list-item-content>
                        <v-list-item-title>Item {{ n }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        name: 'App',
        data: () => ({ drawer: false }),
        methods: {
            showmenu() {
                this.drawer = !this.drawer
            },
            showflows() {
                this.$router.push('/flow')
            }
        }
    }
</script>
