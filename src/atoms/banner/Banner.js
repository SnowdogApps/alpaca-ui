// @vue/component
export default {
  props: {
    /**
     * Props for image should have keys: src, alt
     */
    image: {
      type: Object,
      required: true
    },
    /**
     * Props for source should have keys: id, srcset, media
     */
    sources: {
      type: Array,
      default: null
    },
    /**
     * Text on banner
     */
    text: {
      type: String,
      default: null
    }
  },
  computed: {
    hasDefaultSlot () {
      return !!this.$slots.default
    }
  }
}
