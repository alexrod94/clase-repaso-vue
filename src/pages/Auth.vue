<template>
  <Login v-if="login" />
  <Register v-else />
  <div class="flex flex-row justify-center">
    <button class="p-2 bg-green-400 rounded-sm" @click="change">Change</button>
    <Button @change-event="changeName" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Login from "../components/LoginForm.vue";
import Register from "../components/RegisterForm.vue";
import Button from "../components/Button.vue";

const login = ref(true);

function change() {
  login.value = !login.value;
}
</script>

<style scoped></style>
