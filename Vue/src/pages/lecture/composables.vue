<template>
  <div>
    <v-btn @click="decrement" class="ma-3">-</v-btn>
    <span>{{ count }}</span>
    <v-btn @click="increment" class="ma-3">+</v-btn>
  </div>
</template>

<script setup>
  import { useCounter } from '@/composables/useCounter';

  const { count, increment, decrement } = useCounter(0);
</script>
