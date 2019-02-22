import uniqueId from 'lodash.uniqueid'
import AlpacaHeading from '../../01-globals/heading/Heading.vue'
import Icon from '../../01-globals/icon/Icon.vue'

export default {
  components: {
    AlpacaHeading,
    Icon
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    level: {
      type: Number,
      default: null
    },
    heading: {
      type: String,
      default: null
    },
    titleTag: {
      type: String,
      default: 'h3'
    },
    iconClass: {
      type: String,
      default: null
    },
    iconWrapperClass: {
      type: String,
      default: null
    }
  },
  computed: {
    getItemsWithKey() {
      return this.items.map(item => ({ key: uniqueId("item"), item }))
    }
  },
}
