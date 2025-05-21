<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-content>
        <v-list-item-user>{{ task }}</v-list-item-user>
      </v-list-item-content>
    </v-list-item-content>
  </v-list-item>
</template>

<script setup>
  const props = defineProps({
    task: String,
  });
</script>
