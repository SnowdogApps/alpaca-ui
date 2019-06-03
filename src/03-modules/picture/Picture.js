import AImage from '../../atoms/image/Image.vue'

// @vue/component
export default {
  components: {
    AImage
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
