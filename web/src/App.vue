<template>
  <v-app>
    <Header/>

    <v-content>
      <Main/>
    </v-content>
  </v-app>
</template>

<script>
import {
  VApp,
  VChip,
  VContent,
  VSpacer,
  VToolbar,
  VToolbarTitle
} from 'vuetify/lib'

import Header from './components/Header'
import Main from './components/Main'

export default {
  name: 'App',
  components: {
    VApp,
    VContent,
    
    Header,
    Main
  },
  data () {
    return {
      //
    }
  }
}
</script>
