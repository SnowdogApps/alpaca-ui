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
  methods: {
    closeBar () {
      const focusable = this.$root.$el.querySelectorAll('button:not([disabled]), a[href], area[href] input:not([disabled]), select:not([disabled]), textarea:not([disabled]), *[tabindex]:not([tabindex="-1"]), object, embed, *[contenteditable]')

      // after closing message box move focus on first focusable element on the page
      if (focusable.length) {
        let firstFocusable = [...focusable].find(el => el.offsetParent !== null)
        firstFocusable.focus()
      }

      /**
       * Triggered close button
       * @type {Event}
       */
      this.$emit('close')
    }
  }
}
