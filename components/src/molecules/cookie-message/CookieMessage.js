import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'

// @vue/component
export default {
  components: {
    AIcon,
    AButton
  },
  props: {
    /**
     * Data typeQuantity value (used with v-model)
     */
    dataType: {
      type: String,
      default: null
    },
    /**
     * Text for close button
     */
    closeButton: {
      type: String,
      default: null
    },
    /**
     * Aria label for container
     */
    ariaLabel: {
      type: String,
      default: null
    },
    /**
     * Aria label for close button
     */
    closeAriaLabel: {
      type: String,
      default: null
    }
  },
  data: () => {
    return {
      isOpen: false
    }
  },
  mounted () {
    if (localStorage.getItem(this.dataType) !== 'closed') {
      this.isOpen = true
    }
  },
  methods: {
    closeBar () {
      this.isOpen = false

      const focusable = this.$root.$el.querySelectorAll('button:not([disabled]), a[href], area[href] input:not([disabled]), select:not([disabled]), textarea:not([disabled]), *[tabindex]:not([tabindex="-1"]), object, embed, *[contenteditable]')

      localStorage.setItem(this.dataType, 'closed')
      // after closing message box move focus on first focusable element on the page
      if (focusable.length) {
        let firstFocusable = [...focusable].find(el => el.offsetParent !== null)
        firstFocusable.focus()
      }
    }
  }
}
