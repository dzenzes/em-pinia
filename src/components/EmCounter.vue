<template>
  <section class="my-8 bg-gray-100 rounded">
    <h1 class="mx-8 my-4">{{ counter.name }}</h1>
    <div class="flex justify-between px-8 py-6 my-8 align-baseline">
      <em-button @click="decrement"> - </em-button>
      <p>{{ counter.count }}</p>
      <em-button @click="increment"> + </em-button>
    </div>
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
  store.commit("incrementCounter", props.id);
}
function decrement() {
  store.commit("decrementCounter", props.id);
}
</script>
