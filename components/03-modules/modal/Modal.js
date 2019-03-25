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
      trigger: null,
      ariaHidden: 'true'
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
    handleKeydown(event) {
      if (this.visibility) {
        switch (event.key) {
          case "Esc": // IE/Edge specific value
          case "Escape":
            this.hide(this.name)
            break
          case "Tab":
            this.setFocusTrap(event)
            break
        }
      }
    },
    setFocusTrap(event) {
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
  },
  computed: {
    getMaxWidth () {
      return this.maxWidth !== null ? `max-width: ${this.maxWidth}px;`: null
    }
  }
}
