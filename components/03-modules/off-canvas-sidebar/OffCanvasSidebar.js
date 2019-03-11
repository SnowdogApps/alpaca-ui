import AlpacaHeading from '../../01-globals/heading/Heading.vue'
import AlpacaDivider from '../../02-elements/divider/Divider.vue'
import AlpacaIcon from '../../01-globals/icon/Icon.vue'

import EventBus from '../../../eventBus'

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
    name: {
      type: String,
      required: true
    },
    heading: {
      type: String,
      default: null
    },
    side: {
      type: String,
      default: 'right'
    },
    closeOnEsc: {
      type: Boolean,
      default: true
    },
    closeOnBackgroundClick: {
      type: Boolean,
      default: true
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
        this.focused = document.activeElement
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

      if (state === true) {
        this.$nextTick(() => this.$refs.offCanvasSidebar.focus())
      } else {
        this.$nextTick(() => this.focused.focus())
      }
    },
    handleBackgroundClick () {
      if (this.closeOnBackgroundClick) {
        this.toggle(false)
      }
    },
    handleEscapeKeyUp (event) {
      if (event.which === 27 && this.visibility) {
        this.toggle(false)
      }
    }
  },
  computed: {
    getMaxWidth () {
      return this.maxWidth !== null ? `max-width: ${this.maxWidth}px;`: null
    }
  },
  beforeMount () {
    EventBus.$on('sidebar-show', this.show)
    EventBus.$on('sidebar-hide', this.hide)

    if (this.closeOnEsc) {
      window.addEventListener('keydown', this.handleEscapeKeyUp)
    }
  },
  beforeDestroy () {
    EventBus.$off('sidebar-show', this.show)
    EventBus.$off('sidebar-hide', this.hide)

    if (this.closeOnEsc) {
      window.removeEventListener('keydown', this.handleEscapeKeyUp)
    }
  }
}
