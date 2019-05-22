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
     * Storage name
     */
    storageName: {
      type: String,
      default: 'cookie'
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
    if (localStorage.getItem(this.storageName) !== 'closed') {
      this.isOpen = true
    }
  },
  methods: {
    closeBar () {
      this.isOpen = false

      const focusable = this.$root.$el.querySelectorAll('button:not([disabled]), a[href], area[href] input:not([disabled]), select:not([disabled]), textarea:not([disabled]), *[tabindex]:not([tabindex="-1"]), object, embed, *[contenteditable]')

      localStorage.setItem(this.storageName, 'closed')
      // after closing message box move focus on first focusable element on the page
      if (focusable.length) {
        let firstFocusable = [...focusable].find(el => el.offsetParent !== null)
        firstFocusable.focus()
      }
    }
  }
}
