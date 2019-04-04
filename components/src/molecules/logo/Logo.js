import AImage from '../../atoms/image/Image.vue'

export default {
  components: { AImage },
  props: {
    to: {
      type: String,
      required: true
    },
    src: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: null
    }
  }
}
