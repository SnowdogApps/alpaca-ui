<script setup>
import { hstEvent } from "histoire/client";
import AButton from "./AButton.vue";
</script>

<template>
  <Story>
    <AButton
      type="button"
      @click="hstEvent('click', $event)"
    >
      Button
    </AButton>
  </Story>
</template>
