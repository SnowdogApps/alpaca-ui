import uniqueId from 'lodash.uniqueid'
import AHeading from '../../atoms/heading/Heading.vue'
import AIcon from '../../atoms/icon/Icon.vue'

// @vue/component
export default {
  components: {
    AHeading,
    AIcon
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
    getItemsWithKey () {
      return this.items.map(item => ({ key: uniqueId('item'), item }))
    }
  }
}
