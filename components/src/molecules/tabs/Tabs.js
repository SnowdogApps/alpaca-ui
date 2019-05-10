import AButton from '../../atoms/button/Button.vue'
import KeyCodes from '../../utils/key-codes'

// @vue/component
export default {
  components: { AButton },
  data () {
    return {
      tabs: this.$children
    }
  },
  methods: {
    selectTab (selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name === selectedTab.name)
      })
    },
    handleEvt (evt) {
      function stop () {
        evt.preventDefault()
        evt.stopPropagation()
      }
      const type = evt.type
      const key = evt.keyCode
      const shift = evt.shiftKey
      console.log(type, key, shift)

      if (type === 'click') {
        stop()
        this.$emit('click', evt)
      } else if (type === 'keydown' && key === KeyCodes.SPACE) {
        // In keynav mode, SPACE press will also trigger a click/select
        stop()
        this.$emit('click', evt)
      } else if (type === 'keydown') {
        // For keyboard navigation
        if (key === KeyCodes.UP || key === KeyCodes.LEFT || key === KeyCodes.HOME) {
          stop()
          if (shift || key === KeyCodes.HOME) {
            this.$emit('first', evt)
          } else {
            this.$emit('prev', evt)
          }
        } else if (key === KeyCodes.DOWN || key === KeyCodes.RIGHT || key === KeyCodes.END) {
          stop()
          if (shift || key === KeyCodes.END) {
            this.$emit('last', evt)
          } else {
            this.$emit('next', evt)
          }
        }
      }
    }
  }
}
