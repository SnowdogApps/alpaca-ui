import AlpacaDropdownListItem from '@alpaca-storybook/components/02-elements/dropdown-list/dropdown-list-item/DropdownListItem.vue'
import AlpacaButton from '@alpaca-storybook/components/02-elements/button/Button.vue'

export default {
  components: {
    AlpacaDropdownListItem,
    AlpacaButton
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
    click(val) {
      this.$emit('click', val)
    }
  }
}
