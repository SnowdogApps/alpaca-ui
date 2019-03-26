import AlpacaIcon from '../../01-globals/icon/Icon.vue'
import AlpacaList from '../../02-elements/list/List.vue'
import AlpacaButton from '../../02-elements/button/Button.vue'
import AlpacaListItem from '../../02-elements/list-item/ListItem.vue'

export default {
  components: {
    AlpacaIcon,
    AlpacaList,
    AlpacaButton,
    AlpacaListItem
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    clearButton: {
      type: String,
      required: true
    },
    singleFilterTag: {
      type: String,
      default: 'button'
    },
    closeIcon: {
      type: String,
      default: 'close'
    },
    closeIconTitle: {
      type: String,
      default: 'Close'
    }
  },
  methods: {
    clearAll() {
      this.$emit('clearAll')
    },
    clearItem() {
      this.$emit('clearItem')
    },
  }
}
