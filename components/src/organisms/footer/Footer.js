// @vue/component

import AIcon from '../../atoms/icon/Icon.vue'
import ALink from '../../atoms/link/Link.vue'
import AButton from '../../atoms/button/Button.vue'
import AList from '../../atoms/list/List.vue'
import AListItem from '../../atoms/list-item/ListItem.vue'
import ACookieMessage from '../../02-elements/cookie-message/CookieMessage.vue'
import ACollapse from '../../molecules/collapse/Collapse.vue'
import ANewsletter from '../../03-modules/newsletter/Newsletter.vue'

export default {
  components: {
    AButton,
    ALink,
    AIcon,
    AList,
    AListItem,
    ACookieMessage,
    ACollapse,
    ANewsletter
  },
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
