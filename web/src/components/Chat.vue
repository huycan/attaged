<template>
  <v-card :min-height="'100%'">
    <v-toolbar flat color="cyan" dark>
      <v-toolbar-title>Let's chat</v-toolbar-title>
    </v-toolbar>

    <v-list three-line class="scrollable-chat" id="dialogue">
      <v-list-tile v-for="(line, idx) in dialogue" :key="idx">
        <v-list-tile-content>
          <v-list-tile-title v-text="line.who"></v-list-tile-title>
          <v-list-tile-sub-title v-text="line.what"></v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
import {
  VCard,
  VList,
  VListTile,
  VListTileContent,
  VListTileSubTitle,
  VListTileTitle,
  VToolbar,
  VToolbarTitle,
} from 'vuetify/lib'

export default {
  name: 'Chat',
  props: ['dialogue'],
  components: {
    VCard,
    VList,
    VListTile,
    VListTileContent,
    VListTileSubTitle,
    VListTileTitle,
    VToolbar,
    VToolbarTitle,
  },
  methods: {
    scrollToBottom () {
      this.$nextTick(() => {
        const el = document.getElementById('dialogue');
        el.scrollTop = el.scrollHeight;
      });
    }
  },
  watch: {
    dialogue () {
      this.scrollToBottom();
    }
  }
}
</script>

<style scoped>
.scrollable-chat {
  max-height: 500px;
  overflow-y: scroll;
}
</style>
