<template>
  <div>
    <h2 class="text-xl text-center mt-5">Hola, {{ user.username }}</h2>
    <div class="grid grid-cols-3 gap-4">
      <Card v-for="product in products" :product="product" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Card from "../components/Card.vue";
import { useUserStore } from "../stores/user";

const user = useUserStore();

const products = ref([]);

async function getProducts() {
  const res = await fetch(
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick"
  );
  const finalRes = await res.json();
  products.value = finalRes;
}

getProducts();
</script>

<style scoped></style>
