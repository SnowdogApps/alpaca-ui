import AlpacaHeading from '../../01-globals/heading/Heading.vue'
import AlpacaDivider from '../../02-elements/divider/Divider.vue'
import AlpacaIcon from '../../01-globals/icon/Icon.vue'

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
      ariaHidden: 'true'
    }
  },
  props: {
    heading: {
      type: String,
      default: null
    },
    closeOnEsc: {
      type: Boolean,
      default: true
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
    show() {
      // TODO: focustrap
      this.ariaHidden = 'false'
      this.focused = document.activeElement
      this.visibility = !this.visibility
      this.$nextTick(() => this.$refs.modal.focus())
    },
    hide() {
      this.ariaHidden = 'true'
      this.visibility = !this.visibility
      this.$nextTick(() => this.focused.focus())
    },
    handleBackgroundClick() {
      if (this.closeOnBackgroundClick) {
        this.hide()
      }
    },
    handleEscapeKeyUp (event) {
      if (event.which === 27 && this.visibility) {
        this.hide()
      }
    }
  },
  computed: {
    getMaxWidth () {
      return this.maxWidth !== null ? `max-width: ${this.maxWidth}px;`: null
    }
  },
  beforeMount () {
    if (this.closeOnEsc) {
      window.addEventListener('keydown', this.handleEscapeKeyUp)
    }
  },
  destroyed () {
    if (this.closeOnEsc) {
      window.removeEventListener('keydown', this.handleEscapeKeyUp)
    }
  }
}
