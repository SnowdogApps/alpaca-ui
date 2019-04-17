import AImage from '../../atoms/image/Image.vue'

// @vue/component
export default {
  components: {
    AImage
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
