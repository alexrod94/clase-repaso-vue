<template>
  <form
    @submit.prevent="login"
    class="bg-white p-8 max-w-md mx-auto rounded-lg shadow-lg m-8"
  >
    <h1 class="text-3xl font-bold mb-4">Login</h1>
    <div class="mb-4">
      <label for="email" class="block font-bold mb-2 text-gray-700"
        >Email</label
      >
      <input
        type="text"
        v-model="email"
        class="block w-full p-2 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-blue-500"
        required
      />
      <p class="text-red-600 text-xs" v-if="showError">Necesitas una arroba</p>
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
    <button
      type="submit"
      class="w-full p-2 rounded-lg bg-blue-500 hover:bg-blue-700 text-white font-bold"
    >
      Login
    </button>
  </form>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
const user = useUserStore();
const router = useRouter();
const showError = ref(false);

const email = ref("");
const password = ref("");

watch(email, (newEmail, oldEmail) => {
  if (!newEmail.includes("@")) {
    showError.value = true;
  } else {
    showError.value = false;
  }
});

function login() {
  user.username = email.value;
  router.push("/home");
}
</script>
