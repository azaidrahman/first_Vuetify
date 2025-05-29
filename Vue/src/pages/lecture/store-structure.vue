<script setup>
  import { useUserStore } from '@/stores/user';
  import { storeToRefs } from 'pinia';

  const store = useUserStore();
  const { name, age } = storeToRefs(store);
</script>

<template>
  <v-container>
    <div>{{ name }} is {{ age }} years old</div>
    <v-btn @click="store.haveBirthday">Have Birthday</v-btn>
  </v-container>
</template>
