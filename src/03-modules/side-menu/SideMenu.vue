<template src="./SideMenu.html" />

<script>
import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'
import ASlideMenu from '../../03-modules/slide-menu/SlideMenu.vue'
import AModal from '../../molecules/modal/Modal.vue'

import ASideMenu from './SideMenu.js'

export default {
  name: 'AlpacaSideMenu',
  components: {
    AIcon,
    AButton,
    ASlideMenu,
    AModal
  },
  mixins: [ASideMenu]
}
</script>

<style lang="scss" src="./SideMenu.scss" />
