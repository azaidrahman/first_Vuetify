<template>
  <ul>
    <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
  </ul>
</template>

<script setup>
const fruits = ['Apple', 'banana', 'Cherry'];
</script>
