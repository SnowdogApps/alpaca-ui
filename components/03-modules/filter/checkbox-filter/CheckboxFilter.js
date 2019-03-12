import AlpacaDropdownListItem from '@alpaca-storybook/components/02-elements/dropdown-list/dropdown-list-item/DropdownListItem.vue'
import AlpacaCheckbox from '@alpaca-storybook/components/02-elements/form/checkbox/Checkbox.vue'

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
