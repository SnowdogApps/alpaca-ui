<template src="./SlideMenu.html" />

<script>
import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'

import ASlideMenu from './SlideMenu.js'

export default {
  name: 'AlpacaSlideMenu',
  components: {
    AIcon,
    AButton
  },
  mixins: [ASlideMenu]
}
</script>

<style lang="scss" src="./SlideMenu.scss" />
