<template>
  <v-container
    class="d-flex align-center justify-center flex-grow-1"
    fill-height
  >
    <v-row justify="center" no-gutters>
      <v-col cols="auto">
        <v-btn
          class="pa-2 ma-2"
          color="primary"
          @click="() => console.log('Button Clicked')"
        >
          Test Button
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
