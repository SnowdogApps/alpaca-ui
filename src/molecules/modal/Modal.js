// @vue/component
export default {
  props: {
    /**
     * Modal heading text
     */
    heading: {
      type: String,
      default: null
    },
    /**
     * Modal visibility indicator
     */
    visible: {
      type: Boolean,
      default: false
    },
    /**
     * Indicate if clicking outside modal can emit `close` action
     */
    closeOnBackgroundClick: {
      type: Boolean,
      default: true
    },
    /**
     * Indicate if Esc key can emit `close` action
     */
    closeOnEsc: {
      type: Boolean,
      default: true
    },
    /**
     * Modal main transition effect name
     */
    modalMainTransition: {
      type: String,
      default: 'fade'
    },
    /**
     * Modal content transition effect name
     */
    modalContentTransition: {
      type: String,
      default: 'slide-down'
    },
    /**
     * Modal aria-labelledby text
     */
    ariaLabelledby: {
      type: String,
      default: null
    },
    /**
     * Modal aria-describedby text
     */
    ariaDescribedby: {
      type: String,
      default: null
    },
    /**
     * Indicate if close button is available
     */
    closeButton: {
      type: Boolean,
      default: true
    },
    /**
     * Modal close button aria-label text
     */
    closeButtonAriaLabel: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      trigger: null
    }
  },
  computed: {
    ariaHidden () {
      return this.visible ? 'false' : 'true'
    }
  },
  methods: {
    handleBackgroundClick () {
      if (this.closeOnBackgroundClick) {
        this.$emit('close')
      }
    },
    handleKeydown (event) {
      if (this.visible) {
        switch (event.key) {
          case 'Esc': // IE/Edge specific value
          case 'Escape':
            if (this.closeOnEsc) {
              this.$emit('close')
            }
            break
          case 'Tab':
            this.setFocusTrap(event)
            break
        }
      }
    },
    setFocusTrap (event) {
      const focusable =
        'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), object, embed, *[tabindex], *[contenteditable]'
      const focusableChildren = Array.from(this.$el.querySelectorAll(focusable))

      let currentFocus = document.activeElement
      let totalOfFocusable = focusableChildren.length
      let focusedIndex = focusableChildren.indexOf(currentFocus)

      if (event.shiftKey && focusedIndex <= 0) {
        event.preventDefault()
        focusableChildren[totalOfFocusable - 1].focus()
      } else if (focusedIndex === totalOfFocusable - 1) {
        event.preventDefault()
        focusableChildren[0].focus()
      }
    }
  }
}
