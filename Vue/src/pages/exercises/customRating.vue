<template>
  <CustomRating v-model="rating"></CustomRating>
</template>

<script setup>
  import CustomRating from '@/components/CustomRating.vue';
  const rating = ref(0);
</script>
