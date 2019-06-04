<template src="./CatalogListItem.html" />

<script>
import ALink from '../../atoms/link/Link.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import AImage from '../../atoms/image/Image.vue'
import ABadge from '../../atoms/badge/Badge.vue'
import ASwatch from '../../02-elements/swatch/Swatch.vue'
import APrice from '../../atoms/price/Price.vue'
import AButton from '../../atoms/button/Button.vue'

import ACatalogListItem from './CatalogListItem.js'

export default {
  name: 'AlpacaCatalogListItem',
  components: {
    ALink,
    AIcon,
    AImage,
    ABadge,
    ASwatch,
    APrice,
    AButton
  },
  mixins: [ACatalogListItem]
}
</script>

<style lang="scss" src="./CatalogListItem.scss" />
