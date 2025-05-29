<template>
  <div>
    <button @click="fetchData">Load books</button>

    <div v-if="loading">Loading…</div>
    <div v-else-if="error">
      Failed to load: {{ error.message }}
    </div>
    <ul v-else>
      <li v-for="book in data" :key="book.id">
        <strong>{{ book.title }}</strong>
        by {{ book.author }}
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { useFetch } from '@/composables/useFetch';

  // initialize with the books endpoint
  const { data, error, loading, fetchData } = useFetch(
    'https://softwium.com/api/books'
  );

  // optional: auto-load on mount
  onMounted(() => {
    fetchData();
  });
</script>

alsdflsdkajflk
