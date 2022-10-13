<template>
  <v-container fluid class="detailTV">
    <v-row>
        <v-col>
            <v-btn class="grey darken-4 white--text text--lighten-1" @click="fReturn">
                <v-icon left>mdi-arrow-left</v-icon>
                {{ $t('detailTV.return') }}
            </v-btn>
        </v-col>
    </v-row>
    <v-row no-gutters>
        <v-col cols="3" class="imgLateral">
            <v-img  max-width="500" height="450" :src="dImgUrl+dDetailTv.backdrop_path"></v-img>
        </v-col>
        <v-col cols="9" class="pa-4 white--text text--lighten-1">
            <v-row>
                <v-col>
                    <h2>{{ dDetailTv.name }}</h2>
                    <v-divider class="barra_dividir"></v-divider>
                </v-col>
                
            </v-row>
            <v-row>
                <v-col>
                    <h3>{{ $t('detailTV.sinopsis') }}</h3>
                    <span> {{ dDetailTv.overview }} </span>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <h4>{{ $t('detailTV.etiquetas') }}</h4>
                    <v-chip v-for="etiqueta in dDetailTv.genres" :key="etiqueta.id" class="ma-2" color="primary" text-color="white">
                        {{ etiqueta.name }}
                    </v-chip>
                </v-col>
                <v-col cols="3">
                    <h3>{{ $t('detailTV.creators') }}</h3>
                    <span class="subtitle-2 pr-2" v-for="autor in dDetailTv.created_by" :key="autor.id">
                                {{ autor.name }}
                    </span>
                </v-col>
                <v-col cols="3">
                    <h3>{{ $t('detailTV.productors') }}</h3>
                    <span class="subtitle-2 pr-2" v-for="autor in dDetailTv.production_companies" :key="autor.id">
                                {{ autor.name }}
                    </span>
                    
                </v-col>
                
            </v-row>
            
            <v-row>
                
                <v-col cols="12">
                    <h3> {{ $t('detailTV.lastEpisode') }}</h3>
                    <v-list three-line max-width="800" style="background-color:transparent">
                        <v-list-item class="pl-0">
                            <v-img :src="dImgUrl+dDetailTv.last_episode_to_air.still_path" max-width="150" height="100"></v-img>
                            <v-list-item-content class="pl-3 white--text text--lighten-1">
                                <v-list-item-title>
                                    <h4>{{ dDetailTv.last_episode_to_air.name}}</h4>
                                </v-list-item-title>
                                <v-list-item-subtitle class="white--text text--lighten-1">
                                    {{ dDetailTv.last_episode_to_air.overview}}
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

// SERVICES
import SrvSeries from '@/services/srv-series'

export default {
    name: 'DetailTv',
    data() {
        return {
            dDetailTv: {},
            dIdTv: 0,
            dImgUrl: ''
        }
    },
    props:{
        pIdTv:{
            type: Number,
            required: true,
            default: 0
        }
    },
    created() {
        this.fIniciarVariables()
    },
    methods:{   
        fIniciarVariables(){
            this.dIdTv = this.pIdTv
            this.dImgUrl = process.env.VUE_APP_URL_IMAGENES_API
            this.fGetDetail()
        },
        fGetDetail(){
            let payload = {
                params: {
                    api_key: process.env.VUE_APP_API_KEY_IMAGENES,
                    language: 'es-ES',
                }
            }
            SrvSeries.getDetails(this.dIdTv,payload).then(respuesta => {
                this.dDetailTv = respuesta.data
            })
        },
        fReturn(){
            this.$emit('return')
        }
    }
}
</script>

<style>
.detailTV .imgLateral .v-image__image{
    background-size:100% 70%;
}
.barra_dividir{
    border-color:rgb(201, 200, 200) !important
}
</style>