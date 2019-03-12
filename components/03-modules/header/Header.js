import Container from '@/components/01-globals/container/Container.vue'
import AlpacaIcon from '@/components/01-globals/icon/Icon.vue'
import Logo from '@/components/02-elements/logo/Logo.vue'
import MegaMenu from '@/components/03-modules/mega-menu/MegaMenu.vue'
import HeaderButton from '@/components/03-modules/header-button/HeaderButton.vue'
import HeaderSearch from '@/components/03-modules/header-search/HeaderSearch.vue'

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
