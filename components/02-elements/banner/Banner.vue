<template>
  <a
    :href="link"
    class="banner"
  >
    <picture class="image">
      <source
        v-for="source in image.sources"
        :key="source.src"
        :srcset="source.src"
        :media="source.mediaQuery"
      >
      <img
        class="lazyload"
        :src="image.defaultSrc"
        :alt="image.alt"
      >
    </picture>
  </a>
</template>

<script>
  export default {
    props: {
      link: {
        type: String,
        required: true
      },
      image: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .banner {
    display: block;
    position: relative;
    width: 100%;

    &:hover {
      text-decoration: none;
    }

    &:focus {
      outline: none;
    }

    &__image {
      width: 100%;
    }
  }
</style>
