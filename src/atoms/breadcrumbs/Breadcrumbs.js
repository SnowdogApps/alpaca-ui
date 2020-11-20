// @vue/component
export default {
  props: {
    /**
     * Array with breadcrumbs
     */
    breadcrumbs: {
      type: Array,
      required: true
    },
    /**
     * Describes the type of navigation provided in the nav element
     */
    breadcrumbsNavAriaLabel: {
      type: String,
      default: 'Breadcrumb'
    }
  }
}
