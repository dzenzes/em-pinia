<template>
  <section class="flex flex-col p-6 my-8 space-y-4 bg-gray-100 rounded">
    <h1 class="my-2 text-xl font-bold">{{ counter.name }}</h1>
    <div class="flex justify-between py-4 align-baseline">
      <em-button @click="decrement"> - </em-button>
      <p class="text-lg font-semibold">{{ counter.count }}</p>
      <em-button @click="increment"> + </em-button>
    </div>
    <em-button @click="deleteCounter">delete</em-button>
  </section>
</template>

<script setup>
import EmButton from "./EmButton.vue";
import { computed } from "vue";
import { useCounterStore } from "../store";

const props = defineProps({
  id: { type: String, required: true },
});

const store = useCounterStore();

const counter = computed(() => store.getById(props.id));

function increment() {
  store.incrementCounter(props.id);
}
function decrement() {
  store.decrementCounter(props.id);
}
function deleteCounter() {
  store.deleteCounter(props.id);
}
</script>
