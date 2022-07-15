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
import { useStore } from "vuex";

const props = defineProps({
  id: { type: String, required: true },
});

const store = useStore();

const counter = computed(() => store.getters.getById(props.id));

function increment() {
  store.dispatch("incrementCounter", { id: props.id });
}
function decrement() {
  store.dispatch("decrementCounter", { id: props.id });
}
function deleteCounter() {
  store.dispatch("deleteCounter", { id: props.id });
}
</script>
