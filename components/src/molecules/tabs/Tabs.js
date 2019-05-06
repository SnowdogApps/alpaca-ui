import AButton from '../../atoms/button/Button.vue'

// @vue/component
export default {
  components: { AButton },
  data () {
    return {
      tabs: []
    }
  },
  mounted () {
    this.tabs = this.$children
    console.log(this.tabs)
  },
  methods: {
    selectTab (selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name === selectedTab.name)
      })
    }
  }
}
