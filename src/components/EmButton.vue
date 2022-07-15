<template>
  <button
    class="self-center px-4 py-2 font-bold text-white bg-blue-400 rounded hover:bg-blue-500"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "EmButton",
  emits: ["click"],
};
</script>
