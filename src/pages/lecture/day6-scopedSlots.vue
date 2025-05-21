<template>
  <!-- ## Scoped Slots  -->
  <!-- <List>
    <template #default="{ item }">
      <v-card class="ma-5 w-25">
        <v-card-title>{{ item.name }}</v-card-title>
        <v-card-text>{{ item.description }}</v-card-text>
      </v-card>
    </template>
  </List> -->

  <!-- ## Scoped Slots inside the page -->
  <List>
    <template #default="{ items }">
      <div v-for="item in items" :key="item.id">
        <v-card class="ma-5 w-25">
          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-text>{{ item.description }}</v-card-text>
        </v-card>
      </div>
    </template>
  </List>
</template>

<script setup>
  import List from '@/components/CustomList.vue';
</script>
