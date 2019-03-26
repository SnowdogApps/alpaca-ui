import AlpacaImage from '../image/Image.vue'
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
