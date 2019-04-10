import AIcon from '../../atoms/icon/Icon.vue'
import ALink from '../../atoms/link/Link.vue'
import AButton from '../../atoms/button/Button.vue'
import AList from '../../02-elements/list/List.vue'
import AListItem from '../../02-elements/list-item/ListItem.vue'
import ACookieMessage from '../../02-elements/cookie-message/CookieMessage.vue'
import ADropdownList from '../../molecules/dropdown-list/DropdownList.vue'
import ADropdownListItem from '../../molecules/dropdown-list-item/DropdownListItem.vue'
import ANewsletter from '../../03-modules/newsletter/Newsletter.vue'

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
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    submitNewsletter(payload) {
      this.$emit('submitNewsletter', payload)
    }
  }
}
