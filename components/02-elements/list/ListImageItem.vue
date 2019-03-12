<template>
  <component
    :is="elementTag"
    class="list__item"
  >
    <div
      v-if="src"
      :class="[
        'list__image',
        imageWrapperClass
      ]"
    >
      <div class="lazyload-wrapper">
        <alpaca-image
          :class="[
            'lazyloaded',

            imageClass
          ]"
          :src="src"
          :alt="alt"
        />
      </div>
    </div>
    <div class="list__content">
      <slot />
    </div>
  </component>
</template>

<script>
  import AlpacaImage from '@alpaca-storybook/components/02-elements/image/Image.vue'
  export default {
    components: {
      AlpacaImage
    },
    props: {
      src: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: true
      },
      elementTag: {
        type: String,
        default: 'li'
      },
      imageClass: {
        type: String,
        default: null
      },
      imageWrapperClass: {
        type: String,
        default: null
      }
    }
  }
</script>

<style lang="scss">
  $list__width--image: 16px !default;

  .list {
    &--with-image {
      .list__item {
        display: flex;
      }

      .list__image {
        width: $list__width--image;
        height: auto;
      }
    }
  }
</style>
