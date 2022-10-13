<template>
    <v-footer color="blue-grey darken-2 " padless >
    <v-row justify="center" no-gutters >
      <v-btn v-for="link in dLinks" :key="link" color="white" text rounded class="my-2" >
        {{ link }}
      </v-btn>
      <v-col class="blue-grey darken-3 py-4 text-center white--text" cols="12" >
        {{ new Date().getFullYear() }} — <strong>{{ $t('app.title') }}</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
    name: 'FooterApp',
    data() {
        return {
            dLinks: [ this.$t('footer.home'), this.$t('footer.aboutUs'), this.$t('footer.team'), this.$t('footer.blog'), this.$t('footer.contactUs')],
        }
    },
}
</script>

<style>

</style>