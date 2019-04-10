import ADropdownListItem from "../dropdown-list-item/DropdownListItem.vue"
import ADropdownListLink from "../dropdown-list-link/DropdownListLink.vue"

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
    items: {
      type: Array,
      default: null
    },
    inner: {
      type: Boolean,
      default() { return this.nested }
    },
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
