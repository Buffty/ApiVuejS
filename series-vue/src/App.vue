<template>
  <v-app>
    <v-app-bar app color="blue-grey darken-2" dark >
      <v-app-bar-nav-icon @click="dMenuLateral = true"></v-app-bar-nav-icon>
      <v-spacer/>
      <v-row>
        <v-col cols="10" class="d-flex justify-space-between ">
          <v-layout class="d-flex align-center">
            <v-img :alt="$t('app.title')" class="shrink mr-2" contain src="./assets/logo.png" transition="scale-transition" width="40" />
            <h3> {{ $t('app.title') }}</h3>
          </v-layout>
          <v-btn class="mr-2 grey darken-4 white--text text--lighten-1">{{ $t('app.tv') }}</v-btn>
          <v-btn class="mr-2 grey darken-4 white--text text--lighten-1">{{ $t('app.person') }}</v-btn>
          <v-btn class="mr-2 grey darken-4 white--text text--lighten-1">{{ $t('app.cinema') }}</v-btn>
        </v-col>
      </v-row>
      <v-spacer/>

      <v-btn @click="fOpenLoginUser" text >
        <span class="mr-2">{{ $t('loginUser.initSession') }}</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

   <BarraLateral :pMenuLateral="dMenuLateral"></BarraLateral>

    <v-main class="grey darken-3 d-flex align-center">
      <InitHome v-if="!dModalDetails" @change="fOpenDetails"></InitHome>
      <DetailTv v-else :pIdTv="dIdTv" @return="fReturnSeries"></DetailTv>
    </v-main>
    <LoginUser v-if="dModalLogin" :pModal="dModalLogin" @close="fCloseLogin"></LoginUser>
    <FooterApp/>
  </v-app>
</template>

<script>

// COMPONENTES

import InitHome from '@/components/InitHome.vue';
import LoginUser from '@/components/LoginUser.vue';
import BarraLateral from '@/components/BarraLateral.vue';
import FooterApp from '@/components/FooterApp.vue';
import DetailTv from '@/components/DetailTv.vue';

export default {
  name: 'App',

  components: {
    InitHome,
    LoginUser,
    BarraLateral,
    FooterApp,
    DetailTv
  },  
  data() {
    return {
      dModalLogin: false,
      dMenuLateral: false,
      dModalDetails: false,
      dIdTv: 0
    }
  },
  methods: {
    fOpenLoginUser(){
      this.dModalLogin = true
    },
    fCloseLogin(){
      this.dModalLogin = false 
    },
    fOpenDetails(idTv){
      this.dModalDetails = true
      this.dIdTv = idTv
    },
    fReturnSeries(){
      this.dModalDetails = false
      this.dIdTv = 0
    }
  }
};
</script>
