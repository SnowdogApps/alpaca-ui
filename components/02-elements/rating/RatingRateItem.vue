<template>
  <div
    :class="['rating__rate-item', { 'rating__rate-item--active': active }]"
    role="option"
    :aria-selected="selected"
  >
    <label
      :for="id"
      :aria-label="ariaLabel"
      class="rating__star rating__star--rate"
      @click="onClick"
    >
      <span class="rating__indicator" />
    </label>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      },
      ariaLabel: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      active: {
        type: Boolean,
        required: true
      },
      selected: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      onClick() {
        this.$emit('select');
      }
    }
  }
</script>
