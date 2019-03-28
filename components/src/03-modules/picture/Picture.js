import AlpacaImage from '../../atoms/image/Image.vue'

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
