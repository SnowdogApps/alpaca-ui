import AImage from '../../atoms/image/Image.vue'

export default {
  components: { AImage },
  props: {
    /**
     * Redirect link
     */
    to: {
      type: String,
      required: true
    },
    /**
     * Src for logo
     */
    src: {
      type: String,
      default: null
    },
    /**
     * Alt for logo
     */
    alt: {
      type: String,
      default: null
    }
  }
}
