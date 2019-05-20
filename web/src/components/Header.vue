<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <span>Attaged</span>
      &nbsp;
      <span class="font-weight-light">designed for senior people</span>
    </v-toolbar-title>
    
    <v-spacer></v-spacer>


    <v-badge left>
      <template v-slot:badge>
        <span>5</span>
      </template>
      <v-icon
        large
        color="grey lighten-1"
      >
        shopping_cart
      </v-icon>
    </v-badge>

    <v-chip color="primary" text-color="white">
      Alpha Version
    </v-chip>
  </v-toolbar>
</template>

<script>
import {
  VBadge,
  VChip,
  VSpacer,
  VToolbar,
  VToolbarTitle
} from 'vuetify/lib'

export default {
  name: 'Header',
  components: {
    VBadge,
    VChip,
    VSpacer,
    VToolbar,
    VToolbarTitle
  },
}
</script>
