<template>
  <picture class="image ">
    <source
      v-for="(image, index) in images"
      :key="'image_' + index"
      :media="maxWidth(image['max-width'])"
      :srcset="image.src"
    >

    <alpaca-image
      :src="images[0].src"
      :alt="alt"
    />
  </picture>
</template>

<script>
  import AlpacaImage from '../../02-elements/image/Image.vue';

  export default {
    components: {
      AlpacaImage
    },
    props: {
      images: {
        required: true,
        type: Array
      },
      alt: {
        required: true,
        type: String
      }
    },
    methods: {
      maxWidth(width) {
        if (width) {
          return `(max-width: ${width})`
        }
      }
    }
  }
</script>
