<template>
  <a
    :href="link"
    :class="['banner', customClass]"
  >
    <picture class="image">
      <source
        v-for="(source, i) in image.sources"
        :key="i"
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
      },
      customClass: {
        type: String,
        default: null
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
