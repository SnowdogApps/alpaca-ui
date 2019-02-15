import AlpacaDropdownList from '../../02-elements/dropdown-list/DropdownList.vue'
import AlpacaDropdownListItem from '../../02-elements/dropdown-list/dropdown-list-item/DropdownListItem.vue'
import AlpacaIcon from '../../01-globals/icon/Icon.vue'

export default {
  components: {
    AlpacaDropdownList,
    AlpacaDropdownListItem,
    AlpacaIcon
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    right: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    open() {
      return this.isOpen = true
    },
    close() {
      return this.isOpen = false
    }
  }
}
