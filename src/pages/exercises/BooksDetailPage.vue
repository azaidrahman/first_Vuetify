<template>
  <v-container>
    <v-btn text @click="$router.back()" class="mb-4">
      <v-icon left>mdi-arrow-left</v-icon>
      Back
    </v-btn>

    <v-skeleton-loader
      v-if="loading"
      type="card"
      class="my-4"
      :loading="loading"
      max-width="600"
    />

    <v-alert type="error" v-else-if="error" dense>
      {{ error.message }}
    </v-alert>

    <v-card v-else max-width="600" class="mx-auto">
      <v-card-title class="headline">
        {{ data.title }}
      </v-card-title>
      <v-card-subtitle class="mb-2">
        by {{ data.author }}
      </v-card-subtitle>

      <v-card-text>
        <p><strong>Description</strong></p>
        <p>{{ data.description }}</p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
  import { onMounted, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import { useFetch } from '@/composables/useFetch';

  const route = useRoute();
  const getUrl = (id) =>
    `https://softwium.com/api/books/${id}`;

  const { data, error, loading, fetchData } = useFetch(
    getUrl(route.params.id)
  );

  watch(
    () => route.params.id,
    (id) => {
      fetchData({ url: getUrl(id) });
    }
  );

  onMounted(() =>
    fetchData({ url: getUrl(route.params.id) })
  );
</script>
