<template>
  <!-- <div v-for:="item in items" :key="item.id">
    <slot :item="item">{{ item }}</slot>
  </div> -->

  <slot :items="items"></slot>
</template>

<script setup>
  const items = [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
    { id: 3, name: 'Item 3', description: 'Description 3' },
  ];
</script>
