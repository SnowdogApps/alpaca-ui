import ASource from '../source/Source.vue'
import AImage from '../image/Image.vue'

// @vue/component
export default {
  components: {
    ASource,
    AImage
  },
  props: {
    /**
     * Props for link should have kays: link, ariaLabel
     */
    link: {
      type: Object,
      required: true
    },
    /**
     * Props for image should have kays: src, ale
     */
    image: {
      type: Object,
      required: true
    },
    /**
     * Props for source should have kays: srcset, media
     */
    sources: {
      type: Array,
      default: null
    }
  }
}
