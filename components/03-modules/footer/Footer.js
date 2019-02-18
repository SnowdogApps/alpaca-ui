import AlpacaIcon from '../../01-globals/icon/Icon.vue'
import AlpacaLink from '../../01-globals/link/Link.vue'
import AlpacaButton from '../../02-elements/button/Button.vue'
import AlpacaList from '../../02-elements/list/List.vue'
import AlpacaListItem from '../../02-elements/list/ListItem.vue'
import AlpacaCookieMessage from '../../02-elements/cookie-message/CookieMessage.vue'
import AlpacaDropdownList from '../../02-elements/dropdown-list/DropdownList.vue'
import AlpacaDropdownListItem from '../../02-elements/dropdown-list/dropdown-list-item/DropdownListItem.vue'
import AlpacaNewsletter from '../../03-modules/newsletter/Newsletter.vue'

export default {
  components: {
    AlpacaButton,
    AlpacaLink,
    AlpacaIcon,
    AlpacaList,
    AlpacaListItem,
    AlpacaCookieMessage,
    AlpacaDropdownList,
    AlpacaDropdownListItem,
    AlpacaNewsletter
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
    socialElements: {
      type: Array,
      required: true
    },
    listElements: {
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
    submit(){
      this.$emit('submit')
    }
  }
}
