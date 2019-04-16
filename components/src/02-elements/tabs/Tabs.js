import AIcon from '../../atoms/icon/Icon.vue'

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
    },
  },
  methods: {
    setActiveTab() {
      this.$emit('click', event)
    }
  }
}
