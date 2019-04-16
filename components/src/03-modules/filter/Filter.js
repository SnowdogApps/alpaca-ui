import ADropdownListItem from '../../molecules/dropdown-list-item/DropdownListItem.vue'

// @vue/component
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
