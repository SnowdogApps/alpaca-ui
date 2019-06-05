// @vue/component
export default {
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
