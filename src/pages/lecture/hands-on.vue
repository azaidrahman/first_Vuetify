<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h1 class="pa-1 ma-2 text-center">Vuetify Hands-On Exercise</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card class="mx-auto" md="4">
          <v-card-title>Card 1</v-card-title>
          <v-card-text class="pt-1">This is a simple card</v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto">
          <v-card-title>Card 2</v-card-title>
          <v-card-text class="pt-1">Styled with Vuetify classes</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-4">
      <v-col cols="12">
        <v-sheet class="text-center py-4" color="primary">
          This is a primary colored container with padding
        </v-sheet>
      </v-col>
    </v-row>
    ≤
    <v-row>
      <v-col>
        <h1 class="elevation-8 font-weight-regular text-center">
          Stylish Heading with Shadow
        </h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-sheet
          border="lg"
          class="text-body-1 rounded-xl text-center pa-5 opacity-70"
        >
          Rounded Border with Opacity
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
