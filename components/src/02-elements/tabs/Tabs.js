import uniqueId from 'lodash.uniqueid'
import AlpacaIcon from '../../01-globals/icon/Icon.vue'

export default {
  components: {
    AlpacaIcon
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
    },
  },
  computed: {
    getTabsWithId() {
      return uniqueId("tab")
    }
  },
  methods: {
    setActiveTab() {
      this.$emit('click', event)
    }
  }
}
