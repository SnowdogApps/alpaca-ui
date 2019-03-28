import AlpacaContainer from '../../atoms/container/Container.vue'
import AlpacaIcon from '../../atoms/icon/Icon.vue'
import AlpacaLogo from '../../02-elements/logo/Logo.vue'
import AlpacaButton from '../../02-elements/button/Button.vue'
import AlpacaMegaMenu from '../../03-modules/mega-menu/MegaMenu.vue'
import AlpacaHeaderButton from '../../03-modules/header-button/HeaderButton.vue'
import AlpacaHeaderSearch from '../../03-modules/header-search/HeaderSearch.vue'

export default {
  components: {
    AlpacaContainer,
    AlpacaIcon,
    AlpacaLogo,
    AlpacaButton,
    AlpacaMegaMenu,
    AlpacaHeaderButton,
    AlpacaHeaderSearch
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
