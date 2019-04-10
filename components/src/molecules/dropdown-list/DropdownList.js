import ADropdownListItem from "../dropdown-list-item/DropdownListItem.vue"
import ADropdownListLink from "../../atoms/dropdown-list-link/DropdownListLink.vue"

export default {
  provide: {
    nested: true
  },
  inject: {
    nested: {
      default: false
    }
  },
  components: {
    ADropdownListItem,
    ADropdownListLink
  },
  props: {
    /**
     * Array with items. Every item should has keys: title, id, content/href
     */
    items: {
      type: Array,
      default: null
    },
    /**
     * Custom class for list
     */
    listClass: {
      type: String,
      default: null
    }
  },
  beforeCreate() {
    this.$options.components.ADropdownList = require('./DropdownList.vue').default
  },
  methods: {
    isArray: Array.isArray
  }
}
