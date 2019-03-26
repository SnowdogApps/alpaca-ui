import AlpacaDropdownListItem from "../dropdown-list-item/DropdownListItem.vue"
import AlpacaDropdownListLink from "../dropdown-list-link/DropdownListLink.vue"

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
    AlpacaDropdownListItem,
    AlpacaDropdownListLink
  },
  props: {
    items: {
      type: Array,
      default: null
    },
    secondary: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    inner: {
      type: Boolean,
      default() { return this.nested }
    },
    screenM: {
      type: Boolean,
      default: false
    },
    listClass: {
      type: String,
      default: null
    }
  },
  beforeCreate() {
    this.$options.components.AlpacaDropdownList = require('./DropdownList.vue').default
  },
  methods: {
    isArray: Array.isArray
  }
}
