<template>
    <v-navigation-drawer v-model="dMenuLateral" absolute temporary>
        <v-list class=" ma-0 pa-0" v-for="tipo in dListaLateral" :key="tipo.value">
          <v-list-item-group class="ma-3" v-if="tipo.items === undefined">
            <v-list-item>
              <v-list-item-title>
                <span @click="fSelectTipo"> {{ tipo.title }} </span>
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
          <v-list-group v-else class="ma-3" >
            <template v-slot:activator>
              <v-list-item-title>{{ tipo.title }}</v-list-item-title>
            </template>
              <v-list-item v-for="categoria in tipo.items" :key="categoria.value" link>
                <v-list-item-title> {{ categoria.title }} </v-list-item-title>
              </v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
export default {
    name: "BarraLateral",
    props: {
        pMenuLateral:{
            type: Boolean,
            required: true,
            default: false
        }
    },
    data() {
        return {
            dListaLateral: [],
            dMenuLateral: false
        }
    },
    created(){
        this.fIniciarVariables()
    },
    watch: {
       pMenuLateral(){
        this.dMenuLateral = this.pMenuLateral
       }
    },
    methods: {
        fIniciarVariables(){
            this.dListaLateral = [
                {title: this.$t('navBar.series'), value: 0},
                {title: this.$t('navBar.peliculas'), value: 1},
                {title: this.$t('navBar.categorias'), value: 2, 
                    items: [
                        { 'title': this.$t('categorias.terror'), value: 0},
                        { 'title': this.$t('categorias.comedia'), value: 1},
                        { 'title': this.$t('categorias.drama'), value: 2},
                    ]
                    }
            ]
        },
        fSelectTipo(tipo){
        console.log("Tipo")
        console.log(tipo)
        }
    }
}
</script>

<style>

</style>