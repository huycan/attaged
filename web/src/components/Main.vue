<template>
  <v-container grid-list-md fluid class="full-height">
    <v-layout text-xs-center wrap class="full-height">

      <!-- chat box -->
      <v-flex xs4>
        <v-layout column class="full-height">
          <v-flex xs11>
            <Chat :dialogue="dialogue" />
          </v-flex>

          <v-flex xs1>
            <v-text-field solo
              label="What's on your mind dear?" append-outer-icon="send"
              v-model="userMsg"
              @keydown.enter="onUserChat"
              @click:append.prevent="onUserChat"
            />
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- product listing -->
      <v-flex xs8>
        <div v-if="demoEnd" class="headline">
          Product purchased
        </div>
        <div v-else-if="!listing" class="headline">
          Please let {{ BOT_NAME }} know what's on your mind
        </div>
        <div v-else class="full-height">
          <!-- button legend -->
          <v-toolbar flat color="cyan" dark>
            <v-icon>add_shopping_cart</v-icon>
            &nbsp;
            I will buy this
            
            <v-spacer />

            <v-icon>sentiment_very_satisfied</v-icon>
            &nbsp;
            I want something similar
          </v-toolbar>

          <!-- products -->
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex
                v-for="productImgUrl in listing"
                :key="productImgUrl"
                xs6
              >
                <v-card flat tile>
                  <v-img
                    :src="productImgUrl"
                    height="200px" contain
                  />
                  <v-btn outline fab color="teal" @click.prevent="onClicked">
                    <v-icon>add_shopping_cart</v-icon>
                  </v-btn>
                  <v-btn outline fab color="indigo" @click.prevent="onClicked">
                    <v-icon>sentiment_very_satisfied</v-icon>
                  </v-btn>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

        </div>
        
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import {
  VBtn,
  VContainer,
  VFlex,
  VIcon,
  VLayout,
  VSpacer,
  VTextField,
  VToolbar
} from 'vuetify/lib'

import Chat from './Chat';

const BOT_NAME = 'Doraemon';

export default {
  name: 'Main',
  components: {
    VBtn,
    VContainer,
    VFlex,
    VIcon,
    VLayout,
    VSpacer,
    VTextField,
    VToolbar,

    Chat
  },
  data: () => ({
    BOT_NAME,

    /**
     * chat interaction
     */

    botScripts: [
      'Thank you for the 5th purchase. What are you looking for next?',
      'You are thirsty huh? Let me get you some drinks. Please choose from the listing',
      'Milo... hmmm, you are interested in chocolate drink, lemme procure your favorite chocolate brands now',
      'I see. Lemme get a list of Cocoa Powder',
      'Enjoy your home-made chocolate drink :D'
    ],

    // record what user says
    userMsg: '',

    // to be displayed in chat box
    dialogue: [
      // {
      //   who: 'Doraemon', what: 'How can I help you?'
      // }
    ],

    
    /**
     * product listing
     */
    listing: null,
    listings: [
      // 4 types of drinks: coke, milos, green tea, full cream milk
      [
        'https://shop.coles.com.au/wcsstore/Coles-CAS/images/2/6/8/2680530.jpg',
        'https://shop.coles.com.au/wcsstore/Coles-CAS/images/6/4/1/6414618.jpg',
        'https://shop.coles.com.au/wcsstore/Coles-CAS/images/4/9/1/4915226.jpg',
        'https://shop.coles.com.au/wcsstore/Coles-CAS/images/9/7/6/9760070.jpg'
      ],
      
      // 4 types of chocolates: more milo, barista bros iced choco, Vittoria Original Chocochino, Nestle Nesquik Chocolate
      [
        'https://shop.coles.com.au/wcsstore/Coles-CAS/images/3/1/9/3199020.jpg',
        'https://shop.coles.com.au/wcsstore/Coles-CAS/images/3/1/8/3186266.jpg',
        'https://shop.coles.com.au/wcsstore/Coles-CAS/images/6/9/9/6999781.jpg',
        'https://shop.coles.com.au/wcsstore/Coles-CAS/images/1/1/6/116107.jpg'
      ],

      // 4 types of cocoa powder: coles, nestle, cadbury, lindt
      [
        'https://shop.coles.com.au/wcsstore/Coles-CAS/images/1/9/9/1994703.jpg',
        'https://shop.coles.com.au/wcsstore/Coles-CAS/images/9/8/6/9867700.jpg',
        'https://shop.coles.com.au/wcsstore/Coles-CAS/images/5/1/1/5110050.jpg',
        'https://shop.coles.com.au/wcsstore/Coles-CAS/images/6/9/3/6934039.jpg'
      ]
    ],

    demoEnd: false
  }),
  methods: {
    // say
    say (who, what) {
      this.dialogue.push({ who, what });
    },

    // chat box
    onUserChat () {
      this.say('You', this.userMsg);
      this.userMsg = '';

      this.say(BOT_NAME, this.reply());
      this.updateListing();
    },
    reply () {
      return this.botScripts.shift();
    },

    // product listing
    updateListing () {
      if (this.listings.length === 0) {
        // end of demo
        // show purchase confirmation
        this.demoEnd = true;
      } else {
        this.listing = this.listings.shift();
      }
    },
    onClicked () {
      this.say(BOT_NAME, this.reply());
      this.updateListing();
    }
  },

  created () {
    // initialize dialogue
    this.say(BOT_NAME, this.reply());

    /**
     * init with thank you dialogue for 5th purchase
     * ask what next
     * 
     * user: i want something to drink
     * 
     * please select an item you are interested in
     * show 4 items: coke, chocolate, green tea, full cream milk
     * 
     * user: select chocolate
     * 
     * Milo... hmmm, you are interested in chocolate drink, lemme procure your favorite chocolate brands now
     * show 4 brands: lindt, hershey, cadbury, mars
     * 
     * user: i wanna buy pure powder to make my own chocolate drink actually
     * 
     * Ah, then here are the four 
     * show product page and price
     * 
     * user: confirm
     * 
     */
  }
}
</script>

<style scoped>
.full-height {
  height: 100%;
}
</style>
