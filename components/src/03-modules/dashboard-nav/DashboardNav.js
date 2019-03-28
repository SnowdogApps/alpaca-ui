import AlpacaHeading from '../../01-globals/heading/Heading.vue'
import AlpacaLink from '../../01-globals/link/Link.vue'
import AlpacaList from '../../02-elements/list/List.vue'
import AlpacaListItem from '../../02-elements/list-item/ListItem.vue'

export default {
  components: {
    AlpacaHeading,
    AlpacaLink,
    AlpacaList,
    AlpacaListItem
  },
  props: {
    actualPage: {
      type: String,
      default: null
    },
    title: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isActive: false
    }
  }
}
