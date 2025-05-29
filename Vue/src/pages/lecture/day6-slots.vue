<template>
  <Card>
    <template #title>Macbook Air</template>
    <template #description>Speed of lightness</template>
    <template #price>RM 10,000</template>
    <template #image>
      <v-img
        src="@/media/macbook_air.jpg"
        :width="400"
        :height="250"
        contain
      ></v-img>
    </template>
  </Card>
</template>

<script setup>
  import Card from '@/components/Card.vue';
</script>
