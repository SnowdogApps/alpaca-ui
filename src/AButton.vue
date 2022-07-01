<script setup>
defineProps({
  color: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <button
    class="px-6 py-3 rounded-md"
    :class="{
      'bg-gray-200': color == null,
      'bg-green-200': color === 'green',
      'bg-red-200': color === 'red',
    }"
  >
    <slot />
  </button>
</template>
