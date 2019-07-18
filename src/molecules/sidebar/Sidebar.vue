<template src="../modal/Modal.html" />

<script>
import AHeading from '../../atoms/heading/Heading.vue'
import AButton from '../../atoms/button/Button.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import ADivider from '../../templates/divider/Divider.vue'

import AModal from '../modal/Modal.js'

export default {
  name: 'AlpacaSidebar',
  components: {
    AIcon,
    ADivider,
    AHeading,
    AButton
  },
  mixins: [AModal],
  props: {
    /**
     * Modal wrapper html tag
     */
    modalTag: {
      type: String,
      default: 'aside'
    },
    /**
     * Content transition effect name
     */
    modalContentTransition: {
      type: String,
      default: 'slide-left'
    },
    /**
     * Additional Modal content class
     */
    modalContentClass: {
      type: String,
      default: 'a-sidebar__content'
    },
    /**
     * Modal role
     */
    modalRole: {
      type: String,
      default: 'complementary'
    }
  }
}
</script>

<style lang="scss" src="./Sidebar.scss" scoped />
