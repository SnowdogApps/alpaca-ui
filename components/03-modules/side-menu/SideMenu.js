import AlpacaButton from '@alpaca-storybook/components/02-elements/button/Button.vue'
import AlpacaSlideMenu from '@alpaca-storybook/components/03-modules/slide-menu/SlideMenu.vue'
import AlpacaOffCanvasSidebar from '@alpaca-storybook/components/03-modules/off-canvas-sidebar/OffCanvasSidebar.vue'

import EventBus from '@alpaca-storybook/eventBus'

export default {
  components: {
    AlpacaButton,
    AlpacaSlideMenu,
    AlpacaOffCanvasSidebar,
  },
  props: {
    menuItems: {
      type: Array,
      required: true
    }
  },
  methods: {
    showSideMenu () {
      EventBus.$emit('sidebar-show', 'side-menu')
    }
  }
}
