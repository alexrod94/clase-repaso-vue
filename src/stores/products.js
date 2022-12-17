import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => {
    return {
      products: [],
    };
  },
  actions: {
    piniaAddToCart(el) {
      this.products.push(el);
    },
  },
});
