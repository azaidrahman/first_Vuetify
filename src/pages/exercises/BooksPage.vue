<template>
  <v-container>
    <v-toolbar flat color="white" class="mb-6">
      <v-toolbar-title>All Books</v-toolbar-title>
      <v-spacer />
      <v-btn icon @click="fetchData" :loading="loading">
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
    </v-toolbar>

    <v-alert type="error" v-if="error" dense>
      {{ error.message }}
    </v-alert>

    <v-skeleton-loader
      v-if="loading"
      type="list-item-avatar-two-line"
      class="my-4"
      :loading="loading"
      max-width="600"
    />

    <v-list v-else two-line>
      <v-list-item
        v-for="book in data"
        :key="book.id"
        :to="`/books/${book.id}`"
        link
      >
        <v-list-item-avatar>
          <v-icon large>mdi-book-open-page-variant</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            {{ book.title }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ book.author }}
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-chevron-right</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
  import { onMounted } from 'vue';
  import { useFetch } from '@/composables/useFetch';

  const endpoint = 'https://softwium.com/api/books';
  const { data, error, loading, fetchData } =
    useFetch(endpoint);

  onMounted(fetchData);
</script>
