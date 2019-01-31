<template>
  <picture class="image">
    <source
      v-for="(image, index) in images"
      :key="'image_' + index"
      :media="image['max-width'] && `(max-width: ${image['max-width']})`"
      :srcset="image.src"
    >

    <alpaca-image
      :src="images[0].src"
      :alt="alt"
    />
  </picture>
</template>

<script>
  import AlpacaImage from '../../02-elements/image/Image'

  export default {
    components: {
      AlpacaImage
    },
    props: {
      images: {
        type: Array,
        required: true
      },
      alt: {
        type: String,
        required: true
      }
    }
  }
</script>
