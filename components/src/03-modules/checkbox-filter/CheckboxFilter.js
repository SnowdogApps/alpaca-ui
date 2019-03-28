import AlpacaDropdownListItem from '../../02-elements/dropdown-list-item/DropdownListItem.vue'
import AlpacaCheckbox from '../../02-elements/checkbox/Checkbox.vue'

export default {
  components: {
    AlpacaDropdownListItem,
    AlpacaCheckbox
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
    select(val) {
      this.$emit('select', val)
    }
  }
}
