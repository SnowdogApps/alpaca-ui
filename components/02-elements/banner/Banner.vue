<template>
  <a
    :href="link"
    class="banner"
    :aria-label="ariaLabel"
  >
    <picture class="image">
      <source
        v-for="{ key, source } in getImageWithKey"
        :key="key"
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
  import uniqueId from 'lodash.uniqueid'

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
      ariaLabel: {
        type: String,
        default: null
      }
    },
    computed: {
      getImageWithKey() {
        return this.image.sources.map(source => ({ key: uniqueId("image"), source }))
      }
    },
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
