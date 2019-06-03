import AIcon from '../../atoms/icon/Icon.vue'
import AList from '../../atoms/list/List.vue'
import AButton from '../../atoms/button/Button.vue'
import AListItem from '../../atoms/list-item/ListItem.vue'

// @vue/component
export default {
  components: {
    AIcon,
    AList,
    AButton,
    AListItem
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
    clearAll () {
      this.$emit('clearAll')
    },
    clearItem () {
      this.$emit('clearItem')
    }
  }
}
