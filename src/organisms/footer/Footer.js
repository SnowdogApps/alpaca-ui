// @vue/component
export default {
  props: {
    /**
     * Copyright text
     */
    copyrightText: {
      type: String,
      default: null
    },
    /**
     * Title for social media list
     */
    socialListSubtitle: {
      type: String,
      default: null
    },
    /**
     * Array with social media
     */
    socialMenu: {
      type: Array,
      default: null
    },
    /**
     * Array with menu
     */
    menu: {
      type: Array,
      default: null
    },
    /**
     * Cookie text
     */
    cookieText: {
      type: String,
      default: null
    },
    /**
     * Heading
     */
    heading: {
      type: String,
      default: null
    },
    /**
     * Input object
     */
    input: {
      type: Object,
      default: null
    },
    /**
     * Array with checkboxes
     */
    checkboxes: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      windowWidth: window.innerWidth,
      isLargeScreen: window.innerWidth > 768
    }
  },
  watch: {
    windowWidth (newWidth) {
      this.isLargeScreen = newWidth > 768
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
    })
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    },
    submitNewsletter (payload) {
      /**
       * Submit newsletter event
       * @type {Event}
       */
      this.$emit('submitNewsletter', payload)
    }
  }
}
