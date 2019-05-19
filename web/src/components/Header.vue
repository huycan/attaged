<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <span>Attaged</span>
      &nbsp;
      <span class="font-weight-light">designed for senior people</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-chip color="primary" text-color="white">
      Alpha Version
    </v-chip>
  </v-toolbar>
</template>

<script>
import {
  VChip,
  VSpacer,
  VToolbar,
  VToolbarTitle
} from 'vuetify/lib'

export default {
  name: 'Header',
  components: {
    VChip,
    VSpacer,
    VToolbar,
    VToolbarTitle
  },
}
</script>
