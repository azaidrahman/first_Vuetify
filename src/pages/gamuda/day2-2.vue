<template>
  <v-container class="flex-grow-1 align-center justify-center">
    <v-btn color="primary" @click="dialog = true">Open Dialog</v-btn>
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title>Dialog Title</v-card-title>
        <v-card-text>Dialog content goes here</v-card-text>
        <v-card-actions>
          <v-btn text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
