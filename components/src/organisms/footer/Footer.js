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
      required: true
    },
    /**
     * Title for social media list
     */
    socialListSubtitle: {
      type: String,
      required: true
    },
    /**
     * Array with social media
     */
    socialMenu: {
      type: Array,
      required: true
    },
    /**
     * Array with menu
     */
    menu: {
      type: Array,
      required: true
    },
    /**
     * Cookie text
     */
    cookieText: {
      type: String,
      required: true
    },
    /**
     * Heading
     */
    heading: {
      type: String,
      required: true
    },
    /**
     * Input object
     */
    input: {
      type: Object,
      required: true
    },
    /**
     * Array with checkboxes
     */
    checkboxes: {
      type: Array,
      required: true
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
    /**
     * Submit newsletter event
     * @type {Event}
     */
    submitNewsletter (payload) {
      this.$emit('submitNewsletter', payload)
    }
  }
}
