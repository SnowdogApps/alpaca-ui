import ADropdownListItem from '../../molecules/dropdown-list-item/DropdownListItem.vue'
import ACheckbox from '../../molecules/checkbox/Checkbox.vue'

// @vue/component
export default {
  components: {
    ADropdownListItem,
    ACheckbox
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    select (val) {
      this.$emit('select', val)
    }
  }
}
