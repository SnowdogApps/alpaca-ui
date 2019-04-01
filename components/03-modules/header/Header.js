import Container from '@alpaca-storybook/components/01-globals/container/Container.vue'
import AlpacaIcon from '@alpaca-storybook/components/01-globals/icon/Icon.vue'
import Logo from '@alpaca-storybook/components/02-elements/logo/Logo.vue'
import MegaMenu from '@alpaca-storybook/components/03-modules/mega-menu/MegaMenu.vue'
import HeaderButton from '@alpaca-storybook/components/03-modules/header-button/HeaderButton.vue'
import HeaderSearch from '@alpaca-storybook/components/03-modules/header-search/HeaderSearch.vue'
import AlpacaSideMenu from '@alpaca-storybook/components/03-modules/side-menu/SideMenu.vue'

export default {
  components: {
    Container,
    AlpacaIcon,
    Logo,
    MegaMenu,
    HeaderButton,
    HeaderSearch,
    AlpacaSideMenu
  },
  props: {
    menu: {
      type: Array,
      required: true
    },
    sideMenu: {
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
