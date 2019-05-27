import AIcon from '../../atoms/icon/Icon.vue'
import ALink from '../../atoms/link/Link.vue'
import AButton from '../../atoms/button/Button.vue'
import AList from '../../atoms/list/List.vue'
import AListItem from '../../atoms/list-item/ListItem.vue'
import ACookieMessage from '../../02-elements/cookie-message/CookieMessage.vue'
import ACollapse from '../../molecules/collapse/Collapse.vue'
import ANewsletter from '../../03-modules/newsletter/Newsletter.vue'

// @vue/component
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
    copyrightText: {
      type: String,
      required: true
    },
    socialListSubtitle: {
      type: String,
      required: true
    },
    socialMenu: {
      type: Array,
      required: true
    },
    menu: {
      type: Array,
      required: true
    },
    cookieText: {
      type: String,
      required: true
    },
    heading: {
      type: String,
      required: true
    },
    input: {
      type: Object,
      required: true
    },
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
    submitNewsletter (payload) {
      this.$emit('submitNewsletter', payload)
    }
  }
}
