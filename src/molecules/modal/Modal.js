// @vue/component
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    heading: {
      type: String,
      default: null
    },
    closeOnBackgroundClick: {
      type: Boolean,
      default: true
    },
    closeOnEsc: {
      type: Boolean,
      default: true
    },
    modalMainTransition: {
      type: String,
      default: 'fade'
    },
    modalContentTransition: {
      type: String,
      default: 'slide-down'
    },
    maxWidth: {
      type: Number,
      default: null
    },
    ariaLabelledby: {
      type: String,
      default: null
    },
    ariaDescribedby: {
      type: String,
      default: null
    },
    closeButton: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      visibility: false,
      trigger: null,
      ariaHidden: 'true'
    }
  },
  computed: {
    getMaxWidth () {
      return this.maxWidth !== null ? `max-width: ${this.maxWidth}px;` : null
    }
  },
  methods: {
    show (name) {
      if (name === this.name) {
        this.trigger = document.activeElement
        this.toggleParams(true)
        this.$nextTick(() => this.$refs.modal.focus())
      }
    },
    hide (name) {
      if (name === this.name) {
        this.toggleParams(false)
        this.$nextTick(() => this.trigger.focus())
      }
    },
    toggleParams (state) {
      this.ariaHidden = state ? 'false' : 'true'
      this.visibility = state
    },
    handleBackgroundClick () {
      if (this.closeOnBackgroundClick) {
        this.hide(this.name)
      }
    },
    handleKeydown (event) {
      if (this.visibility) {
        switch (event.key) {
          case 'Esc': // IE/Edge specific value
          case 'Escape':
            if (this.closeOnEsc) {
              this.hide(this.name)
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
