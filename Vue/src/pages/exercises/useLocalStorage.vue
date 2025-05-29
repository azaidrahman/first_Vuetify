<template>
  <v-btn
    class="ma-4"
    @click="
      localValue = localValue === 'HELLO' ? 'BYE' : 'HELLO'
    "
  >
    TOGGLE TEXT ({{ localValue }})
  </v-btn>
</template>

<script setup>
  import { useLocalStorage } from '@/composables/useLocalStorage';
  const localValue = useLocalStorage('kee', 'HELLO');
</script>
