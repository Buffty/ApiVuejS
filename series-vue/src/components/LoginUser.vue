<template>
    <v-dialog v-model="dIsVisible" persistent max-width="500px">
        <v-card>
            <v-card-title class="blue-grey darken-1 titulo_card  white--text text--lighten-1"  >
                <span >{{ $t('loginUser.initSession') }}</span>
                <v-spacer></v-spacer>
                <v-btn icon @click="fCloseModal" >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text >
                <v-text-field class="ma-4" :label="$t('loginUser.user')" hide-details></v-text-field>
                <v-text-field class="ma-4" :label="$t('loginUser.password')" :append-icon="dShowPass ? 'mdi-eye' : 'mdi-eye-off'" :type="dShowPass ? 'text' : 'password'" @click:append="dShowPass = !dShowPass"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="mr-3 mb-3 grey darken-4 white--text text--lighten-1" @click="fLogin" >
                    <span>{{ $t('loginUser.connect') }}</span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "LoginUser",
    props:{
        pModal: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    data(){
        return {
            dIsVisible: false,
            dShowPass: false
        }
    },
    created(){
        this.fIniciarVariables()
    },
    methods: {
        fIniciarVariables(){
            this.dIsVisible = this.pModal
        },
        fCloseModal(){
            this.$emit('close')
        },
        fLogin(){

        }
    },
}
</script>

<style>
.titulo_card span {
    text-color:white;
}
.titulo_card .v-icon{
    color:white;
}
</style>