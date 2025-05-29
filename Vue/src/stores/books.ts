import { defineStore } from 'pinia';

export const useBookStore = defineStore('books', {
  state: () => ({
    books: [],
    loading: false,
    error: null,
  }),

  getters: {
    longBooks: (state) =>
      state.books.filter((book) => book.pages > 500),
    unpublishedBooks: (state) =>
      state.books.filter((book) => book.pageCount === 0),
    getBooksByAuthor: (state) => (authorName) =>
      state.books.filter((book) =>
        book.authors.some((author) =>
          author
            .toLowerCase()
            .includes(authorName.toLowerCase())
        )
      ),
    totalBooks: (state) => state.books.length,
    averagePageCount: (state) => {
      const booksWithPages = state.books.filter(
        (book) => book.pageCount > 0
      );
      const totalPages = booksWithPages.reduce(
        (sum, book) => sum + book.pageCount,
        0
      );
      return Math.round(totalPages / booksWithPages.length);
    },
  },

  actions: {
    async fetchBooks() {
      this.loading = true;
      this.error = null;

      try {
        const response = await fetch(
          'https://softwium.com/api/books'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.books = data;
      } catch (err) {
        this.error = 'Failed to fetch books';
      } finally {
        this.loading = false;
      }
    },
    searchBooks(query) {
      if (!query) return this.books;
      return this.books.filter((book) =>
        book.title
          .toLowerCase()
          .includes(query.toLowerCase())
      );
    },
  },
});
