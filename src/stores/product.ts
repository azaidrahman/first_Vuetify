import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    loading: false,
    error: null,
  }),
  getters: {
    availableProducts: (state) =>
      state.products.filter((product) => product.stock > 0),
  },

  actions: {
    async fetchProducts() {
      this.loading = true;
      try {
        const response = await fetch('api/products');
        this.products = await response.json();
      } catch (err) {
        this.error = 'Failed to load products';
      } finally {
        this.loading = false;
      }
    },
  },
});
