import AlpacaHeading from '@alpaca-storybook/components/01-globals/heading/Heading.vue'
import AlpacaDivider from '@alpaca-storybook/components/02-elements/divider/Divider.vue'
import AlpacaIcon from '@alpaca-storybook/components/01-globals/icon/Icon.vue'

export default {
  components: {
    AlpacaIcon,
    AlpacaDivider,
    AlpacaHeading
  },
  data() {
    return {
      visibility: false,
      focused: null,
      ariaHidden: 'true',
      openTrigger: null
    }
  },
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
    },
    blank: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    show (name) {
      if (name === this.name) {
        this.openTrigger = document.activeElement
        this.focused = this.$refs.modal
        this.toggle(true)
      }
    },
    hide (name) {
      if (name === this.name) {
        this.toggle(false)
      }
    },
    toggle (state) {
      this.ariaHidden = state ? 'false' : 'true'
      this.visibility = state

      this.$nextTick(() => this.focused.focus())
    },
    handleBackgroundClick () {
      if (this.closeOnBackgroundClick) {
        this.hide(this.name)
      }
    },
    handleKeydown(event) {
      if(this.visibility) {
        if (event.which === 27 ) {
          this.hide(this.name)
          return false
        }

        if (event.which === 9) {
          const focusable = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), object, embed, *[tabindex], *[contenteditable]'
          const focusableChildren = Array.from(this.$el.querySelectorAll(focusable))

          let currentFocus = document.activeElement
          let totalOfFocusable = focusableChildren.length
          let focusedIndex = focusableChildren.indexOf(currentFocus)

          if (event.shiftKey) {
            if (focusedIndex <= 0) {
              event.preventDefault()
              focusableChildren[totalOfFocusable - 1].focus()
            }
          }
          else {
            if (focusedIndex === totalOfFocusable - 1) {
              event.preventDefault()
              focusableChildren[0].focus()
            }
          }
        }
      }
    }
  },
  computed: {
    getMaxWidth () {
      return this.maxWidth !== null ? `max-width: ${this.maxWidth}px;`: null
    }
  }
}
