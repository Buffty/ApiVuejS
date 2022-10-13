<template>
  <v-container d-flex class="overflow-x-auto" max-width="400" max-height="300">
    <template v-if="dLoading">
        <v-card class="ma-3 my-12" max-width="500" max-height="600">
                <v-sheet color="darken-2"  class="pa-3">
                    <v-skeleton-loader  class="mx-auto" width="450" type="card"></v-skeleton-loader>
                </v-sheet>
        </v-card>
        <v-card class="ma-3 my-12" max-width="500" max-height="600">
            <v-sheet color="darken-2"  class="pa-3">
                <v-skeleton-loader  class="mx-auto" width="450" type="card"></v-skeleton-loader>
            </v-sheet>
        </v-card>
        <v-card class="ma-3 my-12" max-width="500" max-height="600">
            <v-sheet color="darken-2"  class="pa-3">
                <v-skeleton-loader  class="mx-auto" width="450" type="card"></v-skeleton-loader>
            </v-sheet>
        </v-card>
        <v-card class="ma-3 my-12" max-width="500" max-height="600">
            <v-sheet color="darken-2"  class="pa-3">
                <v-skeleton-loader  class="mx-auto" width="450" type="card"></v-skeleton-loader>
            </v-sheet>
        </v-card>
            
    </template>
    <template v-else>
        <v-hover v-for="serie in dItemsPopulares" :key="serie.id" v-slot="{ hover }">
            <v-card class="ma-3 my-12" :class=" { 'on-hover': hover }" max-width="245" max-height="600">
                <v-img height="350" :src="dUrlImage+serie.poster_path"></v-img>
                <v-card-title class="card_title grey darken-1 white--text text--lighten-1">{{ serie.name }}</v-card-title>
                <v-card-text class="pa-2 grey darken-1 card_text">
                    <v-row align="center" class="mx-0">
                        <span class="white--text text--lighten-1 text-caption mr-2">
                            ({{ fCalculateRating(serie.vote_average) }})
                        </span>
                        <v-rating :value="fCalculateRating(serie.vote_average)" color="amber" dense half-increments readonly size="14"></v-rating>
                    </v-row>
                    <v-row class="pa-4 white--text text--lighten-1">
                        <div> {{ fCalculateText(serie.overview) }}</div>
                    </v-row>
                </v-card-text>
                <v-card-actions class="btn_detail grey darken-1 pa-2">
                    <v-spacer></v-spacer>
                    <v-btn @click="fOpenDetails(serie.id)" class="grey darken-4 white--text text--lighten-1">
                        {{ $t('initHome.detail') }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-hover>
    </template>
  </v-container>
</template>

<script>

// SERVICES
import SrvSeries from '@/services/srv-series'

export default {
    name: "InitHome",
    data() {
        return {
            dItemsPopulares:[],
            dUrlImage: '',
            dLoading: true
        }
    },
    created(){
        this.fIniciarVariables()
    },
    methods:{
        fIniciarVariables(){
            this.dUrlImage = process.env.VUE_APP_URL_IMAGENES_API
            this.fGetPopulares()
        },
        fGetPopulares(){
            let payload = {
                params: {
                    api_key: process.env.VUE_APP_API_KEY_IMAGENES,
                    language: 'es-ES',
                    page: 1
                }
            }
            let promise = []
            promise.push(SrvSeries.getTvSeries(payload))
            Promise.all(promise).then(respuesta => {
                this.dItemsPopulares = respuesta[0].data.results
                this.dLoading = false
            })
            
        },
        fCalculateRating(rate){
            return rate/2
        },
        fOpenDetails(idTv){
            this.$emit('change',idTv)
        },
        fCalculateText(text){
            return text.substring(0, 80)+'...'
        }
    }
}
</script>

<style >
.card_title{
    height:100px !important;
    font-size:15px;
}
.card_text{
    height:100px !important;
    font-size:12px;
}
.btn_detail .v-btn{
    font-size:12px;
}
</style>