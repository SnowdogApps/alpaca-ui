import Container from '../../01-globals/container/Container.vue'
import AlpacaIcon from '../../01-globals/icon/Icon.vue'
import Logo from '../../02-elements/logo/Logo.vue'
import MegaMenu from '../../03-modules/mega-menu/MegaMenu.vue'
import HeaderButton from '../../03-modules/header-button/HeaderButton.vue'
import HeaderSearch from '../../03-modules/header-search/HeaderSearch.vue'

export default {
  components: {
    Container,
    AlpacaIcon,
    Logo,
    MegaMenu,
    HeaderButton,
    HeaderSearch
  },
  props: {
    menu: {
      type: Array,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleMicrocart() {
      this.$emit('toggleMicrocart')
    },
    toggleWishlist() {
      this.$emit('toggleWishlist')
    },
    goToAccount() {
      this.$emit('goToAccount')
    }
  }
}
