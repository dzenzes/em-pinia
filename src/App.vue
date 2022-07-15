<template>
  <em-header />
  <add-counter-form />
  <div class="grid grid-cols-4 gap-4">
    <em-counter
      v-for="counter in counters"
      :id="counter.id"
      :key="counter.id"
    />
  </div>
</template>

<script setup>
import AddCounterForm from "./components/AddCounterForm.vue";
import EmCounter from "./components/EmCounter.vue";
import EmHeader from "./components/EmHeader.vue";

import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
store.dispatch("init");

let counters = computed(function () {
  return store.state.counters;
});
</script>
