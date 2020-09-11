// @vue/component
export default {
  props: {
    /**
     * Tag for cell
     */
    tag: {
      type: String,
      default: 'td'
    },
    /**
     * Cell role
     */
    role: {
      type: String,
      default: 'gridcell'
    },
    /**
     * Cell scope
     */
    scope: {
      type: String,
      default: null
    }
  }
}
