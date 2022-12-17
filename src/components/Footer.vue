<template>
  <footer class="bg-gray-800 py-4 px-6 flex items-center text-white text-sm">
    <div>Copyright &copy; {{ currentYear }}</div>
    <nav class="ml-auto">
      <a class="px-2" href="#">Terms</a>
      <a class="px-2" href="#">Privacy</a>
    </nav>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>
