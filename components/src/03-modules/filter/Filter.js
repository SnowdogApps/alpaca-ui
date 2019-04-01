import ADropdownListItem from '../../02-elements/dropdown-list-item/DropdownListItem.vue'

export default {
  components: {
    ADropdownListItem
  },
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
}
