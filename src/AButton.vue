<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <button
    class="rounded-md px-6 py-3"
    :class="{
      'bg-gray-200': color == null,
      'bg-green-200': color === 'green',
      'bg-red-200': color === 'red',
    }"
  >
    <slot />
  </button>
</template>
