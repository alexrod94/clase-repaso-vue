<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg m-4">
    <img class="w-full" :src="product.image_link" alt="Product image" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ product.name }}</div>
      <p class="text-gray-700 text-base mb-2">{{ product.description }}</p>
      <p class="text-gray-700 text-base mb-2">${{ product.price }}</p>
      <button
        class="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        @click="addToCart"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from "../stores/products";
import { watch } from "vue";
const piniaProduct = useProductsStore();

const props = defineProps(["product"]);

function addToCart() {
  piniaProduct.piniaAddToCart(props.product);
}
</script>
