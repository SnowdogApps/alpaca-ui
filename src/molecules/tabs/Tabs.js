// @vue/component

export default {
  data () {
    return {
      tabs: null
    }
  },
  computed: {
    tabsChildren () {
      return this.$children.filter(child => {
        return child.$el.dataset.tab
      })
    }
  },
  mounted () {
    this.tabs = this.tabsChildren
  },
  methods: {
    selectTab (selectedTab) {
      this.$emit('click', selectedTab.name)
      this.tabs.forEach(tab => {
        tab.isActive = tab.name === selectedTab.name
      })
    }
  }
}
