import uniqueId from 'lodash.uniqueid'
import AIcon from '../../atoms/icon/Icon.vue'

// @vue/component
export default {
  components: {
    AIcon
  },
  props: {
    tabId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    activeTab: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    }
  },
  computed: {
    getTabsWithId () {
      return uniqueId('tab')
    }
  },
  methods: {
    setActiveTab () {
      this.$emit('click', event)
    }
  }
}
