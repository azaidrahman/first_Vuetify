<template>
  <v-card>
    <v-card-title>{{ userName }}</v-card-title>
    <v-card-text>{{ email }} and {{ age }}</v-card-text>
  </v-card>
</template>

<script setup>
  const props = defineProps({
    userName: String,
    email: String,
    age: Number,
  });
</script>
