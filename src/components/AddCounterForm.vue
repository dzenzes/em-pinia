<template>
  <form
    @submit.prevent.stop="addCounter"
    class="flex flex-col items-center w-full max-w-md m-8 space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3"
  >
    <input
      type="text"
      name="name"
      aria-label="Name of counter"
      v-model="name"
      placeholder="Name of counter"
      class="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
    />

    <button
      type="submit"
      :disabled="name.length < 1"
      class="w-full px-6 py-2 text-white transition bg-blue-400 border border-blue-400 rounded-md hover:border-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-blue-400 disabled:hover:bg-blue-400 sm:max-w-max"
    >
      Add Counter
    </button>
  </form>
</template>

<script setup>
import { useCounterStore } from "../store";
import { ref } from "vue";

let name = ref("");

const store = useCounterStore();

function addCounter() {
  store.addCounter(name.value);
  name.value = "";
}
</script>
