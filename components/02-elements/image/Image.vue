<template>
  <img
    :src="src"
    :alt="alt"
    class="image"
  >
</template>

<script>
  export default {
    props: {
      src: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  $image__width : 100% !default;
  $image__wrapper-background-color: $white !default;

  .image {
    display: block;
    width: $image__width;
    max-width: $image__width;
  }

  img,
  picture {
    @extend .image;
  }
</style>
