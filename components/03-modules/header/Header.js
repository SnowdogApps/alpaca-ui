import Container from '@alpaca-storybook/components/01-globals/container/Container.vue'
import AlpacaIcon from '@alpaca-storybook/components/01-globals/icon/Icon.vue'
import Logo from '@alpaca-storybook/components/02-elements/logo/Logo.vue'
import MegaMenu from '@alpaca-storybook/components/03-modules/mega-menu/MegaMenu.vue'
import HeaderButton from '@alpaca-storybook/components/03-modules/header-button/HeaderButton.vue'
import HeaderSearch from '@alpaca-storybook/components/03-modules/header-search/HeaderSearch.vue'

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
    toggleSideMenu() {
      this.$emit('toggleSideMenu')
    },
    goToAccount() {
      this.$emit('goToAccount')
    }
  }
}
