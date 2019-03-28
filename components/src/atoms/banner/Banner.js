import ASource from '../source/Source.vue'
import AImage from '../image/Image.vue'

export default {
  components: {
    ASource,
    AImage
  },
  props: {
    link: {
      type: Object,
      required: true
    },
    image: {
      type: Object,
      required: true
    },
    sources: {
      type: Array,
      default: null
    }
  }
}
