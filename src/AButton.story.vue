<script setup lang="ts">
import { hstEvent } from 'histoire/client'
import AButton from './AButton.vue'
import { variants } from './AButton.vue'
</script>

<template>
  <Story :layout="{ type: 'grid' }">
    <Variant
      v-for="variant in variants"
      :key="variant"
      :title="variant"
    >
      <AButton
        :variant="variant"
        @click="hstEvent('click', $event)"
      >
        Add to cart
      </AButton>
    </Variant>
    <Variant title="Link">
      <AButton
        tag="a"
        href="https://snow.dog/"
      >
        Link
      </AButton>
    </Variant>
  </Story>
</template>
