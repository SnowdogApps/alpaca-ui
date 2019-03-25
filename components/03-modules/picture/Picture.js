import AlpacaImage from '@alpaca-storybook/components/02-elements/image/Image.vue'

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
