<template>
  <div
    class="rating"
    :aria-label="ariaLabel"
    :title="title"
    tabindex="0"
  >
    <div
      class="rating__star"
      aria-hidden="true"
    >
      <span class="rating__indicator" />
    </div>
  </div>

</template>

<script>
  export default {
    props: {
      ariaLabel: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      }
    }
  }
</script>
