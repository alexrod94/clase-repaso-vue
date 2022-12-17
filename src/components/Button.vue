<template>
  <button class="p-2 bg-green-400 rounded-sm ml-3" @click="changeName">
    Change Name
  </button>
</template>

<script setup>
import { ref } from "vue";
const emits = defineEmits(["changeEvent"]);
const newName = ref("New name from Button.vue");

function changeName() {
  emits("changeEvent", newName);
}
</script>

<style lang="scss" scoped></style>
