import AIcon from '../../atoms/icon/Icon.vue'
import ALink from '../../atoms/link/Link.vue'
import AButton from '../../atoms/button/Button.vue'
import AList from '../../atoms/list/List.vue'
import AListItem from '../../atoms/list-item/ListItem.vue'
import ACookieMessage from '../../molecules/cookie-message/CookieMessage.vue'
import ADropdownList from '../../02-elements/dropdown-list/DropdownList.vue'
import ADropdownListItem from '../../02-elements/dropdown-list-item/DropdownListItem.vue'
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
    ADropdownList,
    ADropdownListItem,
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
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    },
    submitNewsletter (payload) {
      this.$emit('submitNewsletter', payload)
    }
  }
}
