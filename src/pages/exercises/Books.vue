<template>
  <v-container>
    <v-progress-circular
      v-if="loading"
      indeterminate
      color="primary"
    />

    <v-alert v-if="error" type="error" class="mb-4">
      {{ error }}
    </v-alert>

    <v-row class="mb-4">
      <v-col cols="6">
        <v-card>
          <v-card-text>
            <div>Total Books: {{ totalBooks }}</div>
            <div>Average Pages: {{ averagePageCount }}</div>
            <div>
              Long Books (500+ pages):
              {{ longBooks.length }}
            </div>
            <div>
              Unpublished Books:
              {{ unpublishedBooks.length }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mb-4">
      <v-col cols="6">
        <v-text-field
          v-model="searchQuery"
          label="Search books by title"
          @input="handleSearch"
        />
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="authorQuery"
          label="Search books by author"
          @input="handleAuthorSearch"
        />
      </v-col>
    </v-row>

    <v-row v-if="searchQuery || authorQuery">
      <v-col cols="12">
        <v-card>
          <v-card-title>Search Results</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item
                v-for="book in searchQuery
                  ? searchResults
                  : authorBooks"
                :key="book.id"
              >
                <v-list-item-title>
                  {{ book.title }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  Pages: {{ book.pageCount || 'N/A' }} |
                  Authors:
                  {{ book.authors.join(', ') }}
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>All Books</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item
                v-for="book in books"
                :key="book.id"
              >
                <v-list-item-title>
                  {{ book.title }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  Pages: {{ book.pageCount || 'N/A' }} |
                  ISBN: {{ book.isbn || 'N/A' }} | Authors:
                  {{ book.authors.join(', ') }}
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { useBookStore } from '@/stores/books';
  import { storeToRefs } from 'pinia';
  import { ref, onMounted } from 'vue';

  const store = useBookStore();
  const {
    books,
    loading,
    error,
    longBooks,
    unpublishedBooks,
    totalBooks,
    averagePageCount,
  } = storeToRefs(store);

  const searchQuery = ref('');
  const authorQuery = ref('');
  const searchResults = ref([]);
  const authorBooks = ref([]);

  onMounted(async () => {
    await store.fetchBooks();
  });

  const handleSearch = () => {
    searchResults.value = store.searchBooks(
      searchQuery.value
    );
  };

  const handleAuthorSearch = () => {
    authorBooks.value = store.getBooksByAuthor(
      authorQuery.value
    );
  };
</script>
