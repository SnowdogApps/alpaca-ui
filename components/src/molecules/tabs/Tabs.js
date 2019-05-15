import AButton from '../../atoms/button/Button.vue'
import KeyCodes from '../../utils/key-codes'

// @vue/component
export default {
  components: { AButton },
  data () {
    return {
      tabs: null,
      activeFocusedTab: 0
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
        tab.isActive = selectedTab === this.activeFocusedTab
          ? tab.name === this.tabs[this.activeFocusedTab].name
          : tab.name === selectedTab.name
      })
    },
    focus (el) {
      this.$refs[el][0].focus()
    },
    handleEvt (evt) {
      const key = evt.keyCode

      if (key === KeyCodes.TAB) {
        evt.preventDefault()
        evt.stopPropagation()
        this.$refs.content.focus()
      }

      if ((key === KeyCodes.LEFT || key === KeyCodes.UP || key === KeyCodes.HOME) && this.activeFocusedTab > 0) {
        if (key === KeyCodes.HOME) {
          this.focus('button_0')
        } else {
          this.activeFocusedTab = this.activeFocusedTab - 1
          this.focus('button_' + this.activeFocusedTab)
        }
      }

      if ((key === KeyCodes.RIGHT || key === KeyCodes.DOWN || key === KeyCodes.END) && this.activeFocusedTab < this.tabs.length - 1) {
        if (key === KeyCodes.END) {
          this.focus('button_' + (this.tabs.length - 1))
        } else {
          this.activeFocusedTab = this.activeFocusedTab + 1
          this.focus('button_' + this.activeFocusedTab)
        }
      }
      this.selectTab(this.activeFocusedTab)
    }
  }
}
