<template>
  <header
    class="bg-gray-800 py-4 px-6 flex justify-between items-center text-white"
  >
    <h1 class="font-bold text-2xl">My App</h1>
    <nav>
      <router-link class="px-2" to="/home">Home</router-link>
      <router-link class="px-2" to="/">Auth</router-link>
      <router-link class="px-2" to="/favorites">Favorites</router-link>
      <a class="px-2" :href="link" target="_blank">{{ search }}</a>
      <button class="p-2 bg-green-400 rounded-sm" @click="changeSearch">
        Change Search
      </button>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

const link = ref("https://chat.openai.com/chat");
const search = ref("Ask GPT");

function changeSearch() {
  if (search.value === "Ask GPT") {
    search.value = "Ask Google";
    link.value = "https://google.com/";
  } else {
    search.value = "Ask GPT";
    link.value = "https://chat.openai.com/chat";
  }
}
</script>
