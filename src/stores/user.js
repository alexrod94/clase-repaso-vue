import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      username: "",
    };
  },
  actions: {
    sayHello() {
      console.log(`Hola, soy ${this.username}`);
    },
  },
});
