<template src="./CatalogGridItem.html" />

<script>
import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'
import ABadge from '../../atoms/badge/Badge.vue'
import APrice from '../../atoms/price/Price.vue'
import AImage from '../../atoms/image/Image.vue'
import ASwatch from '../../02-elements/swatch/Swatch.vue'

import ACatalogGridItem from './CatalogGridItem.js'

export default {
  name: 'AlpacaCatalogGridItem',
  components: {
    AIcon,
    AButton,
    ABadge,
    AImage,
    APrice,
    ASwatch
  },
  mixins: [ACatalogGridItem]
}
</script>

<style lang="scss" src="./CatalogGridItem.scss" />
