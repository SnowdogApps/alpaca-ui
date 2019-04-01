import AContainer from '../../atoms/container/Container.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import ALogo from '../../02-elements/logo/Logo.vue'
import AButton from '../../02-elements/button/Button.vue'
import AMegaMenu from '../../03-modules/mega-menu/MegaMenu.vue'
import AHeaderButton from '../../03-modules/header-button/HeaderButton.vue'
import AHeaderSearch from '../../03-modules/header-search/HeaderSearch.vue'

export default {
  components: {
    AContainer,
    AIcon,
    ALogo,
    AButton,
    AMegaMenu,
    AHeaderButton,
    AHeaderSearch
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
