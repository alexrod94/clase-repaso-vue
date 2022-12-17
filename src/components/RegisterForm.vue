<template>
  <form class="bg-white p-8 max-w-md mx-auto rounded-lg shadow-lg m-8">
    <h1 class="text-3xl font-bold mb-4">Register</h1>
    <div class="mb-4">
      <label for="email" class="block font-bold mb-2 text-gray-700"
        >Email</label
      >
      <input
        type="email"
        v-model="email"
        class="block w-full p-2 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-blue-500"
        required
      />
    </div>
    <div class="mb-4">
      <label for="password" class="block font-bold mb-2 text-gray-700"
        >Password</label
      >
      <input
        type="password"
        v-model="password"
        class="block w-full p-2 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-blue-500"
        required
      />
    </div>
    <div class="mb-4">
      <label for="password" class="block font-bold mb-2 text-gray-700"
        >Repeat Password</label
      >
      <input
        type="password"
        v-model="repeatPassword"
        class="block w-full p-2 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-blue-500"
        required
      />
    </div>
    <button
      type="submit"
      class="w-full p-2 rounded-lg bg-blue-500 hover:bg-blue-700 text-white font-bold"
    >
      Register
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const repeatPassword = ref("");
</script>
