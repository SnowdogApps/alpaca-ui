import AlpacaDropdownListItem from '@alpaca-storybook/components/02-elements/dropdown-list/dropdown-list-item/DropdownListItem.vue'
import AlpacaButton from '@alpaca-storybook/components/02-elements/button/Button.vue'
import AlpacaIcon from '@alpaca-storybook/components/01-globals/icon/Icon.vue'

export default {
  components: {
    AlpacaDropdownListItem,
    AlpacaButton,
    AlpacaIcon
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
  data: () => {
    return {
      activeEl: null
    }
  },
  methods: {
    changeFilter(item) {
      this.$emit('changeFilter', item)
      this.setActive(item)
    },
    setActive (item) {
      this.activeEl = this.activeEl && this.activeEl.id === item.id
        ? null
        : this.items.find(el => el.id === item.id)
    }
  }
}
