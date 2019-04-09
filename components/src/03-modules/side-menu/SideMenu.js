import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'
import ASlideMenu from '../../03-modules/slide-menu/SlideMenu.vue'
import AOffCanvasSidebar from '../../03-modules/off-canvas-sidebar/OffCanvasSidebar.vue'

export default {
  components: {
    AIcon,
    AButton,
    ASlideMenu,
    AOffCanvasSidebar,
  },
  props: {
    menuItems: {
      type: Array,
      required: true
    }
  },
  methods: {
    showSideMenu () {
      this.$refs.sideMenu.show('side-menu')
    }
  }
}
