// @vue/component
export default {
  props: {
    /**
     * Information title
     */
    title: {
      type: String,
      required: true
    },
    /**
     * Information content
     */
    text: {
      type: String,
      required: true
    },
    /**
     * Heading level of information title
     */
    level: {
      type: Number,
      default: 5
    }
  }
}
